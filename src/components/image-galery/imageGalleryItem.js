import { Item, Image } from './imageGaleryItem.styled';

export const ImageGaleryItem = ({ hits }) => {
  return hits.map(({ id, largeImageURL, webformatURL }) => (
    <Item key={id}>
      <Image src={webformatURL} alt={`This is card ${id}`} />
    </Item>
  ));
};
