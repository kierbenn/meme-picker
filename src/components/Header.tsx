
import catHeader from '../images/pumpkin.png'

function Header() {
    
    return (
         <header>
            <div className="header-inner">
                <img src={catHeader} className="pumpkin-img" />
                <div>
                    <h2>Pumpkin's Purrfect...</h2>
                    <h1>Meme Picker</h1>
                </div>
            </div>
        </header>
    )
}

export default Header