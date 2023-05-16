const URL_API_CAT = 'https://cataas.com'

export function getImageCat ({ fact }) {
  return fetch(`${URL_API_CAT}/cat/says/${fact}?json=true`)
    .then(data => data.json())
    .then(data => {
      console.log(data)
      // setCat(data.url)
      return data.url
    })
    .catch(err => console.log(err))
}
