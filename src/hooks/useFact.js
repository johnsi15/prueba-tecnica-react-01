import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/fact'
export function useFact () {
  const [fact, setFact] = useState(null)

  useEffect(() => {
    getRandomFact().then(word => setFact(word))
  }, [])

  return { fact }
}
