const baseURL = 'http://localhost:3000/';

export default {
  getFoods(){
    return fetch(baseURL)
    .then(res => res.json())
  }
}
