const baseURL = 'http://localhost:3000';

export default {
  getFoods(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  
  postFood(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
}
