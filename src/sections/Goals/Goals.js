import React from 'react'
import './Goals.css'
import {GoalsCard, SectionHeader, SectionWrapper } from '../../components/index'
import GoalsData from '../../Data/GoalsData'
const Goals = () => {
    const cards = GoalsData.map(card => {
      return <GoalsCard key={card.id}  title= {card.title} />
    })
  return (
    <SectionWrapper>
    <SectionHeader > أهداف المدرسة </SectionHeader>
        <div className='goals-main'>
            <ul>
              {cards} 
            </ul>
        </div>
    </SectionWrapper>
    
  )
}

export default Goals
