
import Header from './components/Header'
import RadioButton from './components/RadioButton'
import Modal from './components/Modal'
import { catsData } from './data.ts'
import { useState } from 'react'

function App() {

  const [emotion, setEmotion] = useState('')
  const [meme, setMeme] = useState({image: '', alt: ''})
  const [gifs, setGifs] = useState(false)
  // display all unqiue emotions. map to get all array of emtions, flatten then new Set to remove duplicates
  const unqiueEmotions = [...new Set(catsData.map(cat => cat.emotionTags).flat())]
  //console.log(unqiueEmotions)

  function handleClick(e: React.MouseEvent<HTMLInputElement>) {
    //console.log(e.currentTarget.value)
    setEmotion(e.currentTarget.value)
  }

  function handleCheckbox(e) {
    //console.log(e.currentTarget.checked)
    setGifs(e.currentTarget.checked)
  }

  console.log(gifs)

  function showMeme() {
    if(!emotion) return
    // GIFs only option
    // filter to get all memes containing selected emotion
    const filterMemes = gifs 
      ? catsData.filter(meme => meme.emotionTags.includes(emotion) && meme.isGif) 
      : catsData.filter(meme => meme.emotionTags.includes(emotion))
    //console.log(filterMemes)
    // choose one randomly
    const ranNum = Math.floor(Math.random() * filterMemes.length)
    setMeme(filterMemes[ranNum])
  }

  return (
    <>
   <Header />
	
    <main>
      <h3>Select Your Current Emotion</h3>
      <div className="controls-container">
        <div className="emotion-radios" id="emotion-radios">
          {unqiueEmotions && unqiueEmotions.map(catEmotion => 
            <RadioButton 
              catEmotion={catEmotion} 
              handleClick={handleClick} 
              emotion={emotion} />
          )}
        </div>
          
        <div className="gifs-check">
          <label htmlFor="gifs-only-option" className="gifs-check-label">Animated GIFs only</label>
          <input 
            type="checkbox" 
            id="gifs-only-option" 
            onChange={handleCheckbox}
          />
        </div>
        <button
          type="button" 
          className="get-image-btn" 
          id="get-image-btn"
          onClick={showMeme}
          >Get Image</button>
      </div>
    </main>
    <Modal image={meme.image} alt={meme.alt} />
    </>
  )
}

export default App
