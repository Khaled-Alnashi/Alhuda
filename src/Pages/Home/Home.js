import './Home.css'
import {Hero, Goals, Team, Projects,ContactButton } from '../../sections/index'
const Home = () => {
    return (
        <>
            <Hero />
            <Goals />
            <Projects />
            <Team />
            <ContactButton />
        </>
    )
}

export default Home