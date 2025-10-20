
import Header from './components/Header'
import { catsData } from './data.ts'

function App() {

  console.log(catsData)
  

  return (
    <>
   <Header />
	
    <main>
      <h3>Select Your Current Emotion</h3>
      <div className="controls-container">
        <div className="emotion-radios" id="emotion-radios"></div>
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
