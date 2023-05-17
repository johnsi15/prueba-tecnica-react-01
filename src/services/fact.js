const URL_API_FACT = 'https://catfact.ninja/fact'
export function getRandomFact () {
  return fetch(URL_API_FACT)
    .then(res => {
      if (!res.ok) throw new Error('Error fetching fact')
      return res.json()
    })
    .then(data => {
      return data.fact
    })
    .catch(err => {
      console.log(err)
      return err
    })
}
