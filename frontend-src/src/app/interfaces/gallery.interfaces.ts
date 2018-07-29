
export type GalleryType = 'hot' | 'top' | 'user' | string;
export enum Sorting {
    VIRAL = 'viral',
    TOP = 'top',
    TIME = 'time'
}

export const DEFAULT_TYPES = ['hot', 'top', 'user'];

export interface Gallery {
    gallery: GalleryType;
    sort: Sorting;
    showViral: boolean;
}

export interface GalleryImage {
    link: string;
    nsfw: boolean;
    id: string;
    is_ad: boolean;
    is_album?: boolean;
    type: string;
    images?: GalleryImage[];
}

export interface ImageResponse {
    path: string;
    list: GalleryImage[];
    error?: {
        error?: string;
    };
}

export interface Dimensions {
    width: number;
    height: number;
}
