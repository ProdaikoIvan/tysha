import { Photo } from "react-photo-album/*";
import PH1 from "../../assets/img/gallery/Ph-1.jpg"
import PH2 from "../../assets/img/gallery/Ph-2.jpg"
import PH3 from "../../assets/img/gallery/Ph-3.jpg"
import PH4 from "../../assets/img/gallery/Ph-4.jpg"
import PH5 from "../../assets/img/gallery/Ph-5.jpg"
import PH6 from "../../assets/img/gallery/Ph-6.jpg"
import PH7 from "../../assets/img/gallery/Ph-7.jpg"
import PH8 from "../../assets/img/gallery/Ph-8.jpg"
import PH9 from "../../assets/img/gallery/Ph-9.jpg"
import PH10 from "../../assets/img/gallery/Ph-10.jpg"
import PH11 from "../../assets/img/gallery/Ph-11.jpg"
import PH12 from "../../assets/img/gallery/Ph-12.jpg"
import PH13 from "../../assets/img/gallery/Ph-13.jpg"
import PH14 from "../../assets/img/gallery/Ph-14.jpg"
import PH15 from "../../assets/img/gallery/Ph-15.jpg"
import PH16 from "../../assets/img/gallery/Ph-16.jpg"


export type PhotoFilterType = 'house' | 'yard' | 'interior';

export interface IFilterButon {
  label: string;
  category: PhotoFilterType;
}

export interface IPhotoFiltered extends Photo {
  categoty: PhotoFilterType;
}


export const PhotoGalleryService = {
  getFilterButtonData(): IFilterButon[] {
    return [
      {
        label: 'Будиночок',
        category: 'house'
      },
      {
        label: 'Територія',
        category: 'yard'
      },
      {
        label: 'Інтер’єр',
        category: 'interior'
      }
    ]
  },
  getImages(): IPhotoFiltered[] {
    return [
      {
        src: PH1,
        width: 400,
        height: 600,
        categoty: 'house'
      },
      {
        src: PH2,
        width: 400,
        height: 600,
        categoty: 'house'
      },
      {
        src: PH3,
        width: 400,
        height: 600,
        categoty: 'house'
      },
      {
        src: PH4,
        width: 400,
        height: 600,
        categoty: 'house'
      },
      {
        src: PH5,
        width: 600,
        height: 400,
        categoty: 'house'
      },
      {
        src: PH6,
        width: 400,
        height: 600,
        categoty: 'yard'
      },
      {
        src: PH7,
        width: 400,
        height: 600,
        categoty: 'yard'
      },
      {
        src: PH8,
        width: 400,
        height: 600,
        categoty: 'yard'
      },
      {
        src: PH9,
        width: 400,
        height: 600,
        categoty: 'yard'
      },
      {
        src: PH10,
        width: 400,
        height: 600,
        categoty: 'yard'
      },
      {
        src: PH11,
        width: 400,
        height: 600,
        categoty: 'interior'
      },
      {
        src: PH12,
        width: 400,
        height: 600,
        categoty: 'interior'
      },
      {
        src: PH13,
        width: 600,
        height: 400,
        categoty: 'interior'
      },
      {
        src: PH14,
        width: 400,
        height: 600,
        categoty: 'interior'
      },
      {
        src: PH15,
        width: 400,
        height: 600,
        categoty: 'interior'
      },
      {
        src: PH16,
        width: 600,
        height: 400,
        categoty: 'interior'
      },
    ];
  },
};
