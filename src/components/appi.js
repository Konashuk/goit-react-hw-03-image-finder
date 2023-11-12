import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/?';

export const imageFind = async isValidInputTimeValue => {
  const response = await axios.get('', {
    params: {
      q: isValidInputTimeValue,
      key: '39751957-699f95fae17e6e2f35ebbbaf7',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: '12',
    },
  });
  return response.data.hits;
};
