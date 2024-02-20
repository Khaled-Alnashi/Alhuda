import './Projects.css'
import { ProjectsCard,SectionHeader,SectionWrapper } from '../../components/index'
import ProjectsData from '../../Data/ProjectsData'
const Projects = () => {
    const cards = ProjectsData.map(card => {
        return <ProjectsCard key={card.id} image= {card.image} title= {card.title} />
    }) 
    return (
        <>
            <SectionWrapper>
                <SectionHeader>مشاريعنا</SectionHeader>
                <div className='projects'>
                    {cards} 
                </div>  
            </SectionWrapper>
        </>
    )
}

export default Projects