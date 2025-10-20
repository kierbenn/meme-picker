
import Header from './components/Header'
import RadioButton from './components/RadioButton'
import { catsData } from './data.ts'
import { useState } from 'react'

function App() {

  const [emotion, setEmotion] = useState('')
  // display all unqiue emotions. map to get all array of emtions, flatten then new Set to remove duplicates
  const unqiueEmotions = [...new Set(catsData.map(cat => cat.emotionTags).flat())]
  console.log(unqiueEmotions)

  function handleClick(e: React.MouseEvent<HTMLInputElement>) {
    console.log(e.currentTarget.value)
    setEmotion(e.currentTarget.value)
  }

  return (
    <>
   <Header />
	
    <main>
      <h3>Select Your Current Emotion</h3>
      <div className="controls-container">
        <div className="emotion-radios" id="emotion-radios">
          {unqiueEmotions && unqiueEmotions.map(catEmotion => 
            <RadioButton catEmotion={catEmotion} handleClick={handleClick} emotion={emotion} />
          )}
        </div>
          
        <div className="gifs-check">
          <label htmlFor="gifs-only-option" className="gifs-check-label">Animated GIFs only</label>
          <input type="checkbox" id="gifs-only-option" />
        </div>
        <button className="get-image-btn" id="get-image-btn">Get Image</button>
      </div>
    </main>
		
    <div className="meme-modal" id="meme-modal">
			<button className="meme-modal-close-btn" id="meme-modal-close-btn">X</button>
			<div id="meme-modal-inner"></div>
		</div>
    </>
  )
}

export default App
