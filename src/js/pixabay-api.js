import axios from 'axios';



import 'izitoast/dist/css/iziToast.min.css';

export async function getImagesByQuery(query, page) {
  const URL = 'https://pixabay.com/api/';
 const res = await axios.get(URL, {
      params: {
        key: '55993457-c2c59480978811e479ce5b7cc',
        q: `${query}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: `${page}`,
        per_page: 15,
      },
    })
return res.data;
  
}
