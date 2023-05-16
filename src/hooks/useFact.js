import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/fact'
export function useFact () {
  const [fact, setFact] = useState(null)

  useEffect(() => {
    getRandomFact().then(word => {
      const fiveFirstWords = word.split(' ', 5).join(' ')
      console.log(fiveFirstWords)
      setFact(fiveFirstWords)
    })
  }, [])

  return { fact }
}
