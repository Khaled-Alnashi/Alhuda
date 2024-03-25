import {useRef,useEffect,useState} from 'react'
import './Sliderimages.css'
import { motion } from 'framer-motion'
import SliderimagesDate from '../../Data/SliderimagesDate';
import { SectionWrapper } from '../../components/index'

const Sliderimages = () => {
    const carouselRef = useRef();
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(carouselRef.current.scrollWidth-carouselRef.current.offsetWidth)
    },[])
    return (
        <SectionWrapper>
            <div>
                <motion.div ref={ carouselRef} className='carousel' whileTap={{cursor:"grabbing"}}>
                    <motion.div drag="x" dragConstraints={{left:0 ,right: width}} className='inner-carousel'>
                        {SliderimagesDate.map((image) => (
                            <motion.div className='item' key={image}>
                                <img src={image} alt="Sliderimages"/>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </SectionWrapper>
    )
}

export default Sliderimages