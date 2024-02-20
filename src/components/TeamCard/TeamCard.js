import './TeamCard.css'
const TeamCard = (props) => {
    return (
        <div className='teamcard'>
            <div className='card-wrapper'>
                <img className='teamcard-image' src={props.image} alt="" />
                <div className='teamcard-content'>
                    <p className='teamcard-title'>{props.title} </p>
                    <p> {props.category} </p>
                </div>
            </div>
        </div>
    )
}

export default TeamCard