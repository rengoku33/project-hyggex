import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiRefreshCw, FiMaximize2 } from "react-icons/fi";
import { motion } from 'framer-motion';

const Relation = () => {
    const [selected, setSelected] = useState(0);
    const links = ["Study", "Quiz", "Test", "Game", "Others"];

    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {

        if(!isAnimating){
            setIsAnimating(true);
            setIsFlipped(!isFlipped);
        }
        
    };
    return (
        <div>
            {/* title */}
            <div className="absolute left-11">
                <h1 className="text-lg text-blue-800 font-bold">Relations and Functions ( Mathematics )</h1>
            </div>

            {/* 3x container - subnav + flip box + box footer */}
            <div className="relative top-7 w-full h-full flex flex-col items-center justify-center">
                {/* subnav */}
                <div className="bg-transparent h-16 flex justify-center items-center">
                    {links.map((link, index) => (
                        <button
                            key={index}
                            onClick={() => setSelected(index)}
                            className={`text-black text-lg mx-6 ${selected === index ? 'border-b-2 border-blue-700 font-bold' : ''}`}
                        >
                            {link}
                        </button>
                    ))}
                </div>
                {/* flip box */}
                <div onClick={handleClick} className="flip-card rounded-2xl relative w-2/4 h-60 bg-transparent flex items-center justify-center">
                    <motion.div
                    className='flip-card-inner w-[100%] h-[100%]'
                    initial={false}
                    animate={{rotateY: isFlipped ? 180 : 360}}
                    transition={{duration: 0.6, animationDirection: "normal"}}
                    onAnimationComplete={() => setIsAnimating(false)}
                    >
                    {/* <div className="absolute flex items-center justify-center w-full h-full">
                        <span className="text-white text-2xl font-semibold">{isFlipped ? '9 + 6 + 7x - 2x - 3' : '5x + 12'}</span>
                    </div> */}
                    
                    <div className="flip-card-front w-[100%] h-[100%] bg-cover-border-[1px] flex items-center justify-center flip-card rounded-2xl bg-gradient-to-l from-blue-900 to-blue-500 ">
                        <h1 className="text-white text-2xl font-semibold">9 + 6 + 7x - 2x - 3</h1>
                    </div>
                    <div className="flip-card-back w-[100%] h-[100%] bg-cover-border-[1px] flex items-center justify-center flip-card rounded-2xl bg-gradient-to-l from-blue-900 to-blue-500 ">
                        <h1 className="text-white text-2xl font-semibold">5x + 12</h1>
                    </div>
                    </motion.div>
                </div>
                {/* <div className="absolute bottom-0 left-0 right-0 z-10 bg-white h-16 flex justify-center items-center">
                    <FiArrowLeft className="text-xl text-gray-500 absolute left-4 cursor-pointer" />
                    <FiArrowRight className="text-xl text-gray-500 absolute right-4 cursor-pointer" />
                    <FiRefreshCw className="text-xl text-gray-500 absolute left-1/2 transform -translate-x-1/2 cursor-pointer" />
                    <FiMaximize2 className="text-xl text-gray-500 absolute right-1/2 transform translate-x-1/2 cursor-pointer" />
                </div> */}
            </div>
        </div>
    )
}

export default Relation;