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
    isLader: false,
  };

  handelQuery = event => {
    this.setState({
      images: [],
      query: `${Date.now()}/${event}`,
      page: 1,
      loadMore: '',
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
      this.setState({ isLoading: true });
      const splitQuery = this.state.query.split(/\/(.*)/)[1];
      const { totalHits, hits } = await imageFind(splitQuery, this.state.page);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        loadMore: this.state.page < Math.ceil(totalHits / 12),
      }));
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
    }
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
    const { images, isLoading, loadMore } = this.state;
    return (
      <Div>
        <SearchBar onSubmit={this.handelQuery} />

        <ImageGalery hits={images} />
        {isLoading && <Loader />}
        {loadMore && <Button onClick={this.handelLoadMore} />}
      </Div>
    );
  }
}

export default App;
