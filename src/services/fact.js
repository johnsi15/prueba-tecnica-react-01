const URL_API_FACT = 'https://catfact.ninja/fact'
export function getRandomFact () {
  return fetch(URL_API_FACT)
    .then(data => data.json())
    .then(data => {
      return data.fact
    })
    .catch(err => console.log(err))
}
