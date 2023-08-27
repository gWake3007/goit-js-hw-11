import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '39076815-f58c96365a19195787a97cf5e';

axios.defaults.baseURL = 'https://pixabay.com/api/';

async function fetchImages(searchQuery, page, limit) {
  const response = await axios(
    `?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${limit}`
  );
  return response.data;
}
export { fetchImages };
