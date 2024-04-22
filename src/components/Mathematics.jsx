import React from "react";
import { Link } from "react-router-dom";

const Mathematics = () => {

    return (
        <div>
            <div className="flex items-center justify-center">
                <Link className="px-7 py-3 rounded-full bg-gradient-to-t from-blue-700 to-blue-950 text-white text-3xl" to='/Flashcard/Mathematics/Relation-and-Function'>Relations and Functions</Link>
            </div>
        </div>

    )
}

export default Mathematics;