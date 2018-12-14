import { ImageComponent } from './image.component';
import { SettingsService } from './../../services/settings.service';
import { GalleryImage } from './../../interfaces/gallery.interfaces';
import { ImgurService } from './../../services/imgur.service';
import {
    Component,
    OnInit,
    OnDestroy,
    HostListener,
    ViewChild,
    ElementRef,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentRef,
    ViewRef,
 } from '@angular/core';
import { Subject, interval } from 'rxjs';
import { takeUntil, min, combineLatest } from 'rxjs/operators';

@Component({
    selector: 'app-images',
    templateUrl: './images.component.html',
    styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit, OnDestroy {
    private images: GalleryImage[];
    private imageSize: number;
    private unsubscribe$: Subject<void>;
    private timer: any;

    private componentMap = new Map<string, any>();
    private refs: ComponentRef<ImageComponent>[] = [];

    @ViewChild('holder') holder: ElementRef;
    @ViewChild('componentHost', {read: ViewContainerRef}) componentHost: ViewContainerRef;

    constructor(
        private imgur: ImgurService,
        private settings: SettingsService,
        private cfResolver: ComponentFactoryResolver,
    ) {}

    ngOnInit() {
        this.refs = [];
        this.unsubscribe$ = new Subject<void>();

        this.imgur.update(this.settings.settings.gallery);
        interval(this.settings.settings.delay).pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.imgur.update(this.settings.settings.gallery);
        });

        this.imgur.images$.pipe(takeUntil(this.unsubscribe$)).subscribe(images => {
            this.images = images;
            this.onResize();
            this.updateComponents();
        });
    }

    private updateComponents() {
        let numCreated = 0;
        for (const image of this.images) {
            if (!image || this.componentMap.has(image.link)) { continue; }
            this.createComponent(image);
            numCreated++;
        }

        this.refs = this.refs.filter((ref, index) => {
            ref.instance.size = this.imageSize;

            const remove = index >= this.images.length;
            if (remove) {
                this.componentMap.delete(ref.instance.image.link);
                this.componentHost.remove(this.componentHost.indexOf(<any>ref));
            }
            return !remove;
        });
    }

    private createComponent(image: GalleryImage) {
        const factory = this.cfResolver.resolveComponentFactory(ImageComponent);
        const ref = this.componentHost.createComponent(factory, 0);

        ref.instance.image = image.is_album ? image.images[0] : image;
        ref.instance.size = this.imageSize;

        this.refs.unshift(ref);
        this.componentMap.set(image.link, ref.instance);
    }

    update() {
        this.imgur.update(this.settings.settings.gallery);

        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }

        this.timer = setTimeout(this.settings.settings.delay, () => {
            this.timer = null;
            this.update();
        });
    }

    getSize(numImages: number): number {
        if (!this.holder) {
            return null;
        }

        const body = this.holder.nativeElement;
        const maxH = body.clientHeight;
        const maxW = body.clientWidth;

        let maxSquares = 1;
        let size = Math.min(maxH, maxW);
        let h = 1;
        let w = 1;

        while (numImages > maxSquares) {
            if (maxH / (h + 1) >= maxW / ( w + 1)) {
                h++;
            } else {
                w++;
            }
            maxSquares = h * w;
            size = Math.min(maxH / h, maxW / w);
        }

        return size;
    }

    isValid(image: GalleryImage) {
        let valid = !!image;
        valid = valid && (!image.is_album || (image.is_album && image.images && image.images.length > 0));
        return valid;
    }

    @HostListener('window:resize', [])
    onResize() {
        this.imageSize = this.getSize(this.images ? this.images.filter(x => this.isValid(x)).length : 50);
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
