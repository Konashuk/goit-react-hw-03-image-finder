import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { Item, Image } from './imageGaleryItem.styled';

export const ImageGaleryItem = ({ hits }) => {
  const openModal = largeImageURL => {
    const instance = basicLightbox.create(`
      <img src="${largeImageURL}" alt="Large image">
    `);

    instance.show();
  };

  return hits.map(({ id, largeImageURL, webformatURL }) => (
    <Item key={id} onClick={() => openModal(largeImageURL)}>
      <Image src={webformatURL} alt={`This is card ${id}`} />
    </Item>
  ));
};
