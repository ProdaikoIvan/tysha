import styles from "./photo-gallery.module.scss";
import { ClickHandlerProps, RowsPhotoAlbum } from "react-photo-album";
import { useEffect, useState } from "react";
import {
  IPhotoFiltered,
  PhotoFilterType,
  PhotoGalleryService,
} from "./photo-gallery.service";
import Lightbox from "yet-another-react-lightbox";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

const PhotoGallery: React.FC = () => {
  const [selectedFilterCategory, setSelectedFilterCategor] =
    useState<PhotoFilterType>();
  const [images, setImages] = useState<IPhotoFiltered[]>();
  const [index, setIndex] = useState<number>(-1);

  const onFilter = (category: PhotoFilterType) => {
    setSelectedFilterCategor(category);
  };

  const getFilteredImages = () => {
    if (images && selectedFilterCategory) {
      return images?.filter((image) => {
        return image.categoty === selectedFilterCategory;
      });
    }
    return [];
  };

  useEffect(() => {
    setImages(PhotoGalleryService.getImages());
    setSelectedFilterCategor(
      PhotoGalleryService.getFilterButtonData()[0].category
    );
  }, []);

  return (
    <>
      <ul className={styles["photo-filter"]}>
        {PhotoGalleryService.getFilterButtonData().map((btn, index) => (
          <li
            key={index}
            className={`${styles["photo-filter--item"]} ${
              btn.category === selectedFilterCategory && styles["active"]
            }`}
            onClick={() => onFilter(btn.category)}
          >
            {btn.label}
          </li>
        ))}
      </ul>
      <RowsPhotoAlbum
        targetRowHeight={(containerWidth) => {
          if (containerWidth < 768) return 200;
          return 400;
        }}
        spacing={10}
        onClick={({ index }) => setIndex(index)}
        photos={getFilteredImages()}
      />
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={getFilteredImages().map((photo) => ({ src: photo.src }))}
        index={index}
      />
    </>
  );
};

export default PhotoGallery;
