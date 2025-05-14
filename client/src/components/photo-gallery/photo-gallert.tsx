import styles from "./photo-gallery.module.scss";
import { RowsPhotoAlbum } from "react-photo-album";
import { useEffect, useState } from "react";
import { PhotoGalleryService } from "./photo-gallery.service";
import "react-photo-album/rows.css";

const PhotoGallery: React.FC = () => {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    console.log(PhotoGalleryService.getImages());
  }, []);

  return (
    <div className={styles["photo-container"]}>
      <div className={styles["photo"]}>
        <div className={styles["photo__title"]}>Фото</div>
          <ul className={styles["photo-filter"]}>
            <li className={styles["photo-filter--item"]}>Будиночок</li>
            <li className={styles["photo-filter--item"]}>Територія</li>
            <li className={styles["photo-filter--item"]}>Інтер’єр</li>
          </ul>
        <RowsPhotoAlbum
          targetRowHeight={400}
          spacing={10}
          photos={PhotoGalleryService.getImages()}
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
