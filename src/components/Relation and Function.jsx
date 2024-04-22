import React, { useState } from "react";
import logoBOT from '../assets/logo-bot.png';
import { FaAngleLeft, FaAngleRight, FaPlusCircle  } from "react-icons/fa";
import { BiFullscreen } from "react-icons/bi";

import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSync } from '@fortawesome/free-solid-svg-icons';

const Relation = () => {
    const [selected, setSelected] = useState(1);
    const links = ["Study", "Quiz", "Test", "Game", "Others"];

    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const [count, setCount] = useState(1);

    const handleClick = () => {

        if (!isAnimating) {
            setIsAnimating(true);
            setIsFlipped(!isFlipped);
        }

    };

    const increment = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    }
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

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
                        animate={{ rotateY: isFlipped ? 180 : 360 }}
                        transition={{ duration: 0.6, animationDirection: "normal" }}
                        onAnimationComplete={() => setIsAnimating(false)}
                    >
                        {/* <div className="absolute flex items-center justify-center w-full h-full">
                        <span className="text-white text-2xl font-semibold">{isFlipped ? '9 + 6 + 7x - 2x - 3' : '5x + 12'}</span>
                    </div> */}

                        <div className="flip-card-front w-[100%] h-[100%] bg-cover-border-[1px] flex items-center justify-center flip-card rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-950">
                            <h1 className="text-white text-2xl font-semibold">9 + 6 + 7x - 2x - 3</h1>
                        </div>
                        <div className="flip-card-back w-[100%] h-[100%] bg-cover-border-[1px] flex items-center justify-center flip-card rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-950">
                            <h1 className="text-white text-2xl font-semibold">5x + 12</h1>
                        </div>
                    </motion.div>
                </div>
                {/* bot-box */}
                <div className="bg-transparent h-16 flex justify-center items-center">
                    <span className=" mx-24 text-blue-700 cursor-pointer" style={{ fontSize: 27, fontWeight: 600 }}>&#10227;</span>
                    <span onClick={decrement} className=" mx-6 bg-gradient-to-t from-blue-700 to-blue-950 text-white rounded-full px-1 py-1 cursor-pointer" style={{ fontSize: 25, fontWeight: 600 }}><FaAngleLeft className="text-white cursor-pointer" /></span>
                    <span className=" mx-6 cursor-pointer font-bold">{count}/10</span>
                    <span onClick={increment} className=" mx-6 bg-gradient-to-t from-blue-700 to-blue-950 text-white rounded-full px-1 py-1 cursor-pointer" style={{ fontSize: 25, fontWeight: 600 }}><FaAngleRight className="text-white cursor-pointer" /></span>
                    <span className=" mx-24 text-blue-700 cursor-pointer" style={{ fontSize: 25, fontWeight: 600 }}><BiFullscreen className="cursor-pointer" /></span>
                </div>
            </div>
                {/* bot img */}
                <div className="relative top-7 w-full h-full flex justify-center items-center">
                <img src={logoBOT} alt='High-jacks' className="h-24 w-60 mr-[50%]"/>
                <div className=" flex mr-25">
                <FaPlusCircle className=" text-blue-700" />
                <h1>Create Flashcard</h1>
                </div>
                </div>

        </div>
    )
}

export default Relation;