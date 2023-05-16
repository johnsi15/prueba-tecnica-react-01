const URL_API_FACT = 'https://catfact.ninja/fact'
export function getRandomFact () {
  return fetch(URL_API_FACT)
    .then(data => data.json())
    .then(data => {
      console.log(data)
      const words = data.fact.split(' ', 5).join(' ')
      console.log(words)

      // setFact(words)
      return words
    })
    .catch(err => console.log(err))
}
