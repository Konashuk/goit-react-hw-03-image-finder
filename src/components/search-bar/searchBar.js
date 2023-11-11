import { GrSearch } from 'react-icons/gr';

import {
  HeaderSearch,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './searchBar.styled';

export const SearchBar = () => {
  return (
    <HeaderSearch>
      <SearchForm>
        <SearchFormButton type="submit">
          <GrSearch />
          <SearchFormButtonLabel></SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </HeaderSearch>
  );
};
