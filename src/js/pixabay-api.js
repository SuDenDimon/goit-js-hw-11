import axios from "axios";

export function getImage(inputValue) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = new URLSearchParams({
      key: "22926721-5d20aa08498ffd1ff2f906542",
      q: inputValue,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    });

const url = `${BASE_URL}${END_POINT}?${params}`;

return axios.get(url)
.then(responce => {
    
return responce.data;

}).catch(error => {
    console.log(error);
});
}