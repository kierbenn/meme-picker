
import { useState, useEffect } from "react"

function Modal({image, alt}:{image: string, alt: string}) {
    
    const [open, setOpen] = useState(false)

    function closeModal() {
        setOpen(false)
    }

    useEffect(() => {
        if (image) {
            setOpen(true)
        }
    }, [image])
    
    return (
        <div 
            className="meme-modal" 
            id="meme-modal"
            style={{display: open ? "flex" : "none"}}    
        >
			<button 
                className="meme-modal-close-btn" 
                id="meme-modal-close-btn"
                onClick={closeModal}
            >X</button>
			<div id="meme-modal-inner">
                <img 
                    className="cat-img" 
                    src={`/images/${image}`}
                    alt={alt}
                />
            </div>
		</div>
    )
}

export default Modal