import './ProjectsCard.css'
import { SecondaryButton } from '../index'
const ProjectsCard = (props) => {
    return (
        <div className='projectscard'>
            <div className='card-wrapper'>
                <img className='projectscard-image' src={props.image} alt="" />
                <div className='projectscard-content'>
                    <h4 className='projectscard-title'>{props.title} </h4>
                    <SecondaryButton>متابعة القراءة</SecondaryButton>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard