const URL_API_CAT = 'https://cataas.com'

export function getImageCat ({ fact }) {
  return fetch(`${URL_API_CAT}/cat/says/${fact}?json=true`)
    .then(res => {
      if (!res.ok) throw new Error('Error  fetching cat image')
      return res.json()
    })
    .then(data => {
      // console.log({ data })
      return data.url
    })
    .catch(err => {
      console.log(err)
      return err
    })
}
