import './ActivitiesCard.css'
import { SecondaryButton } from '../index'

const ActivitiesCard = (props) => {
    return (
        <div className='activities-card'>
            <ul>
                <li><h3>{props.title}</h3><span>{props.date_added}</span></li>
                <li><p>{props.text}</p></li>
                <SecondaryButton >متابعة القراءة  </SecondaryButton>
            </ul>
        </div>
    )
}

export default ActivitiesCard