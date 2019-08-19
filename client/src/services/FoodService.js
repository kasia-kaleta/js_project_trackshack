const baseURL = 'http://localhost:3000';

export default {
  getFoods(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  getFoods2(input){
    return fetch('http://localhost:3000/search', {
      method: 'POST',
      body: `{"query": ${input}}`,
      headers: {'Content-Type': 'application/json'}
    })
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
