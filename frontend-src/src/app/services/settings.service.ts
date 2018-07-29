import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Settings } from '../interfaces/settings.interfaces';
import { Sorting } from '../interfaces/gallery.interfaces';

@Injectable()
export class SettingsService {
    public settings: Settings;
    public updated$ = new Subject<void>();

    private default: Settings = {
        delay: 10000,
        gallery: {
            gallery: 'aww',
            sort: Sorting.TIME,
            showViral: false,
        }
    };

    constructor() {
        this.load();
    }

    save() {
        localStorage.setItem('settings', JSON.stringify(this.settings));
        this.updated$.next();
    }

    load() {
        const load = localStorage.getItem('settings');
        if (load) {
            this.settings = JSON.parse(load);
        } else {
            this.settings = this.default;
        }
    }
}
