import { GalleryImage } from './../../interfaces/gallery.interfaces';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
    @Input() image: GalleryImage;
    @Input() size: number;

    get isImage() {
        return this.image.type.indexOf('image/') === 0;
    }

    get isVideo() {
        return this.image.type.indexOf('video/') === 0;
    }
}
