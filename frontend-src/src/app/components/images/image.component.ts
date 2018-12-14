import { GalleryImage, ImgData, GalleryData } from './../../interfaces/gallery.interfaces';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
    private _image: GalleryImage;

    @Input() size: number;
    @Input() available = true;
    @Input()
    set image(image: GalleryImage) {
        this._image = image;
    }

    get imageId() {
        return this._image.id;
    }

    get image() {
        return this.merged;
    }

    get raw() {
        return this._image;
    }

    get casted(): ImgData {
        return this._image ? this._image.is_album ? (<GalleryData>this._image).images[0] : <ImgData>this._image : null;
    }

    get merged(): ImgData {
        const result = {...this.casted};

        for (const key in result) {
            if (result[key] === null && this._image[key] !== null) {
                result[key] = this._image[key];
            }
        }

        return result;
    }

    get isImage() {
        return this.casted ? this.casted.type.indexOf('image/') === 0 : false;
    }

    get isVideo() {
        return this.casted ? this.casted.type.indexOf('video/') === 0 : false;
    }
}
