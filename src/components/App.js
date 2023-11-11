import { Component } from 'react';
import { SearchBar } from './search-bar/searchBar';
import { ImageGalery } from './image-galery/imageGallery';
import { Loader } from './laoder';
import { Button } from './button-more/button';
import { Div } from './App.styled';

class App extends Component {
  state = {
    image: '',
    page: 1,
  };

  render() {
    return (
      <Div>
        <SearchBar />
        <ImageGalery />
        <Button />
        <Loader />
      </Div>
    );
  }
}

export default App;
