import { Component } from 'react';
import { SearchBar } from './search-bar/searchBar';
import { ImageGalery } from './image-galery/imageGallery';
import { Loader } from './laoder';
import { Button } from './button-more/button';
import { Div } from './App.styled';
import { imageFind } from './appi';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  handelQuery = event => {
    this.setState({
      images: [],
      query: event,
      page: 1,
    });
  };

  handelLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  fetchImages = async () => {
    try {
      const targetImages = await imageFind(this.state.query);
      this.setState({
        images: targetImages,
      });
    } catch (error) {}
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  render() {
    return (
      <Div>
        <SearchBar onSubmit={this.handelQuery} />
        <Loader />

        <ImageGalery hits={this.state.images} />
        <Button />
      </Div>
    );
  }
}

export default App;
