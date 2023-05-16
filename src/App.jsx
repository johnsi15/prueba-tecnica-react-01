import './App.css'
import { useFact } from './hooks/useFact'
import { useCat } from './hooks/useCat'

const URL_API_CAT = 'https://cataas.com'

function App () {
  const { fact } = useFact()
  const { imageUrl } = useCat({ fact })

  console.log(fact)

  return (
    <>
      <h1>App the cats with the first 5 words</h1>
      <main>
        {fact && <h2>This is a cat fact: {fact}</h2>}
        {imageUrl && <img src={`${URL_API_CAT}/${imageUrl}`} alt={`cat - ${fact}`} />}
      </main>
    </>
  )
}

export default App
