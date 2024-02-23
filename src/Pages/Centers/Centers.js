import './Centers.css'
import { CentersCard} from '../../components/index'
import CentersData from '../../Data/CentersData'
const Centers = () => {
    const cards  = CentersData.map(card => {
        return <CentersCard key={card.id} image= {card.image} title= {card.title} text= {card.text}addres= {card.addres} phon= {card.phon} email= {card.email} map= {card.map}/>
    })
    return (
        <>
            
                <div className='centers'>
                    {cards} 
                </div>  
        </>
    )
}

export default Centers