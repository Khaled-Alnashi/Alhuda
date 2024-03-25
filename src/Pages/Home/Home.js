import './Home.css'
import {Hero, Goals, Team, Projects,ContactButton ,Sliderimages} from '../../sections/index'
const Home = () => {
    return (
        <>
            <Sliderimages />
            <Hero />
            <Goals />
            <Projects />
            <Team />
            <ContactButton />
        </>
    )
}

export default Home