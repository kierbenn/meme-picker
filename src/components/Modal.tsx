
import { useState, useEffect } from "react"

type DisplayModal = {
    image: string, 
    alt: string,
    reset: React.Dispatch<React.SetStateAction<{
        image: string;
        alt: string;
    }>>
}

function Modal({image, alt, reset}:DisplayModal) {
    
    const [open, setOpen] = useState(false)

    function closeModal() {
        setOpen(false)
        reset({image: '', alt: ''})
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