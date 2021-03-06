import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gallery, ImageResponse, GalleryImage } from '../interfaces/gallery.interfaces';
import { BehaviorSubject } from 'rxjs';
import { isNgTemplate } from '../../../node_modules/@angular/compiler';

@Injectable()
export class ImgurService {
    images$ = new BehaviorSubject<GalleryImage[]>([]);

    constructor(private http: HttpClient) {}

    update(gallery: Gallery) {
        const url = `${this.host}/${gallery.gallery}/${gallery.sort}/${gallery.showViral ? 'true' : 'false'}/raw`;

        this.http.get<ImageResponse>(url).subscribe(data => {
            if (data.error && data.error.error) {
                console.error(data.error.error);
            }
            if (data && data.list && data.list.length > 0) {
                this.images$.next(data.list);
            }
        });
    }

    private get host(): string {
        const host = location.host.split(':')[0];
        const prefix = location.href.split('://')[0];
        return `${prefix}://${host}:9001`;
    }
}
