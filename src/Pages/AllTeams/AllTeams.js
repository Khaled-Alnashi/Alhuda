import './AllTeams.css'
import { TeamCard,SectionHeader,SectionWrapper} from '../../components/index'
import TeamData from '../../Data/TeamData'
const AllTeams = () => {
    const KTV  = TeamData.filter(ktv => {
        return ktv.school === "ktv"
    }).map(ktv => {
        return <TeamCard key={ktv.id} image= {ktv.image} title= {ktv.title} category= {ktv.category}/>
    })
    const Evershagen  = TeamData.filter(ev => {
        return ev.school === "ev"
    }).map(ev => {
        return <TeamCard key={ev.id} image= {ev.image} title= {ev.title} category= {ev.category} />
    })
    const Groß_Klein  = TeamData.filter(gk => {
        return gk.school === "gk"
    }).map(gk => {
        return <TeamCard key={gk.id} image= {gk.image} title= {gk.title} category= {gk.category}  />
    })
    return (
        <div className='open'>
            <SectionWrapper >
                <SectionHeader>معلمين فرع KTV</SectionHeader>
                <div className='all-teams'>
                    {KTV} 
                </div> 
            </SectionWrapper>
            <SectionWrapper>
            <SectionHeader>معلمين فرع Evershagen</SectionHeader>
                <div className='all-teams'>
                    {Evershagen} 
                </div>  
            </SectionWrapper>
            <SectionWrapper>
            <SectionHeader>معلمين فرع Groß Klein</SectionHeader>
                <div className='all-teams'>
                    {Groß_Klein} 
                </div>  
            </SectionWrapper>
        </div>
    )
}

export default AllTeams


