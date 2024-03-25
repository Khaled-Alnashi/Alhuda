import './ToUp.css'
import { FaAngleDoubleUp} from "react-icons/fa";
import React, { useState, useEffect } from 'react';

const ToUp = () => {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setshowScrollBTN(true)
            } else {
                setshowScrollBTN(false)
            }
        });
    }, []);
    const [showScrollBTN, setshowScrollBTN] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <span onClick={scrollToTop} className='to-up' style={{ opacity: showScrollBTN ? 1 : 0,"color": "var(--color-primary)" }}><FaAngleDoubleUp /></span>
    )
}

export default ToUp
