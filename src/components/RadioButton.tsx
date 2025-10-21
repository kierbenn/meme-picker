
type InputRadio = {
    catEmotion: string, 
    emotion: string, 
    handleClick: (e:React.MouseEvent<HTMLInputElement>) => void
}

function RadioButton({catEmotion, emotion, handleClick}:InputRadio) {
    
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