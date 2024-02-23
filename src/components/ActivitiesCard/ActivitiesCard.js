import './ActivitiesCard.css'

const ActivitiesCard = (props) => {
    return (
        <div className='activities-card'>
            <ul>
                <li><h3>{props.title}</h3><span>{props.date_added}</span></li>
                <li><p>{props.text}</p></li>
            </ul>
        </div>
    )
}

export default ActivitiesCard