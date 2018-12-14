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

export interface Tag {
    accent: string;
    background_hash: string;
    background_is_animated: boolean;
    description: string;
    description_annotations: any;
    display_name: string;
    followers: number;
    following: boolean;
    is_promoted: boolean;
    logo_destination_url:  string;
    logo_hash:  string;
    name: string;
    thumbnail_hash: string;
    thumbnail_is_animated: boolean;
    total_items: number;
}

export interface GalleryImage {
    account_id: number;
    account_url: string;
    ad_type: number;
    ad_url: string;
    comment_count: number;
    datetime: number;
    description: string;
    downs: number;
    favorite: boolean;
    favorite_count: number;
    id: string;
    in_gallery: boolean;
    in_most_viral: boolean;
    is_ad: boolean;
    link: string;
    nsfw: boolean;
    points: number;
    score: number;
    section: string;
    tags: Tag[];
    title: string;
    ups: number;
    views: number;
    vote: number;
    is_album: boolean;
}

export interface ImgData extends GalleryImage {
    animated: boolean;
    bandwidth: number;
    description: string;
    gifv: string;
    has_sound: boolean;
    height: number;
    hls: string;
    looping: boolean;
    mp4: string;
    mp4_size: number;
    size: number;
    type: string;
    width: number;
    is_album: false;
}

export interface GalleryData extends GalleryImage {
    cover: string;
    cover_height: number;
    cover_width: number;
    images: ImgData[];
    images_count: number;
    include_album_ads: boolean;
    layout: string;
    privacy: string;
    topic: string;
    topic_id: number;
    is_album: true;
}
