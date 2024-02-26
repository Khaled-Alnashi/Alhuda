import './ProjectsPages.css'
import {ActivitiesCard, SectionWrapper } from '../../components/index'
import ProjectsData from '../../Data/ProjectsData'

const Islam = () => {
    const cards  = ProjectsData.filter(card => {
        return card.name === "islam"
    }).map(card => {
        return <ActivitiesCard key={card.id} title={card.title}  date_added={card.date_added}  text={card.text} />
    }) 
        return (
        <div className='open'>
            <SectionWrapper>
                <div className='projectspages-card'>
                    {cards}  
                </div>  
            </SectionWrapper>
        </div>
    )
}
export default Islam