import React from 'react'
import { DatesCard, SectionWrapper } from '../../components/index'
const Dates = () => {
    const DatesDate =
    {
        id: "1", year: "2032/2024", fsb: "2023/09/03", fse: "2024/02/04", ssb: "2024/02/18", sse: "2024/07/20", wtb1: "9:00", wte1: "12:00", stb1: "10:00", ste1: "13:00", wtb2: "12:00", wte2: "15:00", stb2: "13:00", ste2: "16:00",
        days: ["2024/03/30", "2024/04/07", "2024/06/01", "2024/07/20"]
    }; 
    return (
        <>
            <SectionWrapper>
                <div className='dates'>
                    <DatesCard propsdate={DatesDate} />
                </div>  
            </SectionWrapper>
                
        </>
    )
}
export default Dates