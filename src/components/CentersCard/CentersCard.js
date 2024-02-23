import './CentersCard.css'
import { FaPhone, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const CentersCard = (props) => {
    return (
        <div className='centerscard'>
            <div className='centerscard-wrapper'>
                <div className='centerscard-content'>
                    <img className='centerscard-image' src={props.image} alt="" />
                    <h3 className='centerscard-title'>{props.title} </h3>
                    <p> {props.text} </p>
                    <h3 className='centerscard-title'>للتواصل معنا</h3>
                    <ul className='time'>
                        <li><span>يوم الأحد : </span><span> 09:00 - 15:00</span>
                        </li>
                        <li className='contact'>
                            <a href={`/tel:/${props.phon} `} ><span style={{ "color": "var(--color-primary)" }}><FaPhone /></span> {props.phon} </a><br/>
                            <a href={`/mailto:/${props.email} `}><span style={{"color":"var(--color-primary)"}}><FaEnvelope /></span> {props.email} </a>
                        </li>
                        <li className='contact'>
                        <a href= {`${props.map} `}><span style={{ "color": "var(--color-primary)" }}> <FaMapMarkedAlt /> </span> {props.addres} </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CentersCard
