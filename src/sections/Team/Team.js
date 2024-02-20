import './Team.css'
import { TeamCard,SectionHeader,SectionWrapper} from '../../components/index'
import TeamData from '../../Data/TeamData'
const Team = () => {
    const cards  = TeamData.filter(card => {
        return card.job === "manager"
    }).map(card => {
        return <TeamCard key={card.id} image= {card.image} title= {card.title} category= {card.category} phon= {card.phon} email= {card.email} />
    })
    return (
        <>
            <SectionWrapper>
                <SectionHeader>الفريق الأداري</SectionHeader>
                <div className='team'>
                    {cards} 
                </div>  
            </SectionWrapper>
        </>
    )
}

export default Team