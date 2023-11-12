import { ImageGaleryItem } from './imageGalleryItem';
import { ImageGallery } from './imageGalery.styled';

export const ImageGalery = ({ hits }) => {
  return (
    <ImageGallery>
      <ImageGaleryItem hits={hits} />
    </ImageGallery>
  );
};
