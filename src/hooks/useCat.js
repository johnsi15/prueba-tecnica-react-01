import { useEffect, useState } from 'react'
import { getImageCat } from '../services/cat'

export function useCat ({ fact }) {
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    if (!fact) return

    getImageCat({ fact }).then(urlCat => setImageUrl(urlCat))
  }, [fact])

  return { imageUrl }
}
