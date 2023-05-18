import './App.css'
import { useFact } from './hooks/useFact'
import { useCat } from './hooks/useCat'

function App () {
  const { fact, refreshFact } = useFact()
  const { imageUrl } = useCat({ fact })
  // console.log(fact)
  console.log({ imageUrl })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <>
      <h1>App the cats with the first 5 words</h1>
      <main>
        <button onClick={handleClick}>Get new fact</button>
        {fact && <h2 className='fact'>This is a cat fact: {fact}</h2>}
        {imageUrl && <img src={imageUrl} alt={`cat - ${fact}`} />}
      </main>
    </>
  )
}

export default App
