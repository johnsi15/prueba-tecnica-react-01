import { useEffect, useState } from 'react'
import './App.css'
const URL_API_FACT = 'https://catfact.ninja/fact'
const URL_API_CAT = 'https://cataas.com/'

function App () {
  const [fact, setFact] = useState(null)
  const [cat, setCat] = useState(null)

  useEffect(() => {
    fetch(URL_API_FACT)
      .then(data => data.json())
      .then(data => {
        console.log(data)
        const firstLetter = data.fact.split(' ')[0]
        console.log(firstLetter)

        setFact(firstLetter)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    fetch(`${URL_API_CAT}/cat/says/${fact}?json=true`)
      .then(data => data.json())
      .then(data => {
        console.log(data)
        setCat(data.url)
      })
  }, [fact])

  return (
    <>
      <h1>Hello world</h1>
      <main>
        {fact && <h2>This is a cat fact: {fact}</h2>}
        {cat && <img src={`${URL_API_CAT}/${cat}`} alt={`cat - ${fact}`} />}
      </main>
    </>
  )
}

export default App
