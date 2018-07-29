import { GalleryType, DEFAULT_TYPES } from './../../interfaces/gallery.interfaces';
import { SettingsService } from './../../services/settings.service';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
    gallerySetting: GalleryType;
    refresh: number;
    constructor(public settings: SettingsService) {
        this.gallerySetting = settings.settings.gallery.gallery;
        this.refresh = settings.settings.delay / 1000;

        if (!DEFAULT_TYPES.find(item => item === this.gallerySetting)) {
            this.gallerySetting = 'custom';
        }
    }

    update() {
        if (this.gallerySetting !== 'custom') {
            this.settings.settings.gallery.gallery = this.gallerySetting;
        }
        this.settings.settings.delay = this.refresh * 1000;
        this.settings.save();
    }
}
