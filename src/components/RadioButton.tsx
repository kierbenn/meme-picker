
import { useState } from "react"

function RadioButton({catEmotion, emotion, handleClick}:{catEmotion: string, emotion: string, handleClick: (e:React.MouseEvent<HTMLInputElement>) => void}) {
    
    const [select, setSelect] = useState(false)
    const styles = catEmotion === emotion ? 'radio highlight' : 'radio'

    return (
        <div className={styles}>
            <label htmlFor={catEmotion}>{catEmotion}</label>
            <input 
              type="radio"
              id={catEmotion}
              value={catEmotion}
              name='emotions'
              onClick={handleClick} />
        </div>
    )
}

export default RadioButton