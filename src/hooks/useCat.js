import { useEffect, useState } from 'react'
import { getImageCat } from '../services/cat'

const URL_API_CAT = 'https://cataas.com'

export function useCat ({ fact }) {
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    if (!fact) return

    getImageCat({ fact }).then(urlCat => setImageUrl(`${URL_API_CAT}${urlCat}`))
  }, [fact])

  return { imageUrl }
}
