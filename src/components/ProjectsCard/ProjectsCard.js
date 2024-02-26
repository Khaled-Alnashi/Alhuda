import './ProjectsCard.css'
import { Link } from 'react-router-dom'
import {FaArrowCircleLeft } from "react-icons/fa";
const ProjectsCard = (props) => {
    return (
        <div className='projectscard'>
            <div className='card-wrapper'>
                <img className='projectscard-image' src={props.image} alt="" />
                <div className='projectscard-content'>
                    <h4 className='projectscard-title'>{props.title} </h4>
                    <Link className='button secondary-button' to={`/${props.name}`}>متابعة القراءة &nbsp; &nbsp;<FaArrowCircleLeft /></Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard