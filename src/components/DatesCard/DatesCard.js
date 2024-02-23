import React from './DatesCard.css'

const DatesCard = (props) => {
    const propsdate = props.propsdate;
    const daysArray = propsdate.days;
    const year = propsdate.year;
    const fsb = propsdate.fsb;
    const fse = propsdate.fse;
    const ssb = propsdate.ssb;
    const sse = propsdate.sse;
    const wtb1 = propsdate.wtb1;
    const wte1 = propsdate.wte1;
    const stb1 = propsdate.stb1;
    const ste1 = propsdate.ste1;
    const wtb2 = propsdate.wtb2;
    const wte2 = propsdate.wte2;
    const stb2 = propsdate.stb2;
    const ste2 = propsdate.ste2;

    return (
        <div className='datesCard'>
            <div className='datesCard-wrapper'>
                <div className='datesCard-content'>
                    <h4>أوقات الدراسة والعطل الرسمية للسنة الدراسية <span>{year} </span>  </h4>
                    <p >   الفصل الدراسي الأول يبدأ بتاريخ <span>{fsb}</span> وينتهي بتاريخ <span>{fse}</span></p>
                    <p >   الفصل الدراسي الثاني يبدأ بتاريخ  <span>{ssb}</span> وينتهي بتاريخ <span>{sse}</span></p>
                    <h3 className='datesCard-title'> الدوام الصباحي</h3>
                    <p>التوقيت الشتوي إبتداء من الساعة <span>{wtb1}</span> صباحا حتى الساعة <span>{wte1}</span> ظهرا</p>
                    <p >التوقيت الصيفي إبتداء من الساعة <span>{stb1}</span> صباحا حتى الساعة <span>{ste1}</span> ظهرا</p>
                    <h3 className='centerscard-title'> الدوام المسائي</h3>
                    <p >التوقيت الشتوي إبتداء من الساعة <span>{wtb2} </span> ظهرا حتى الساعة <span>{wte2}</span> مساء</p>
                    <p >التوقيت الصيفي إبتداء من الساعة <span>{stb2} </span> ظهرا حتى الساعة <span>{ste2}</span> مساء</p>
                    <h3 className='centerscard-title'> أيام العطل </h3>
                    <ul className='time'>{daysArray.map((da,index)=>(<li key={index}><span>يوم الأحد :</span><span> {da}</span>
                        </li>))}
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DatesCard