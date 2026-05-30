import axios from 'axios';



import 'izitoast/dist/css/iziToast.min.css';

export function getImagesByQuery(query) {
  const URL = 'https://pixabay.com/api/';

  return axios
    .get(URL, {
      params: {
        key: '55993457-c2c59480978811e479ce5b7cc',
        q: `${query}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => {
      return res.data;
    })
   
}
