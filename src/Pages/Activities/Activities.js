import './Activities.css'
import {ActivitiesCard, SectionHeader, SectionWrapper } from '../../components/index'
import ActivitiesData from '../../Data/ActivitiesData'

const Activities = () => {
    const cards = ActivitiesData.map(card => {
        return <ActivitiesCard key={card.id} title={card.title}  date_added={card.date_added}  text={card.text} />
    }) 
        return (
        <div className='open'>
            <SectionWrapper>
                <SectionHeader>أنشطتنا</SectionHeader>
                <div className='activities-card'>
                    {cards}  
                </div>  
            </SectionWrapper>
        </div>
    )
}

export default Activities