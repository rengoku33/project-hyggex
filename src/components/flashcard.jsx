import React from "react";
import { Link } from "react-router-dom";                    

const FlashCard = () => {
    
    return (
        <div className="flex items-center justify-center">
            <Link className="px-7 py-3 rounded-full bg-gradient-to-t from-blue-700 to-blue-950 text-white text-3xl" to='/Flashcard/Mathematics'>Mathematics</Link>
        </div>
    )
}

export default FlashCard;