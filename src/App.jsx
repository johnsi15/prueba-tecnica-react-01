import './App.css'
import { useFact } from './hooks/useFact'
import { useCat } from './hooks/useCat'

const URL_API_CAT = 'https://cataas.com'

function App () {
  const { fact, refreshFact } = useFact()
  const { imageUrl } = useCat({ fact })
  // console.log(fact)

  const handleClick = () => {
    refreshFact()
  }

  return (
    <>
      <h1>App the cats with the first 5 words</h1>
      <main>
        <button onClick={handleClick}>Get new fact</button>
        {fact && <h2>This is a cat fact: {fact}</h2>}
        {imageUrl && <img src={`${URL_API_CAT}/${imageUrl}`} alt={`cat - ${fact}`} />}
      </main>
    </>
  )
}

export default App
