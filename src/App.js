import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import { Container} from './components/index'
import { Header, Footer } from './sections/index'
import{Home,AllTeams,Activities,Centers,Dates} from'./Pages/index'
const App = () => {
    return (
        <>
            <Router basename={'/Alhuda'}>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/all-teams' element={<AllTeams />} />
                        <Route path='/activities' element={<Activities />} />
                        <Route path='/centers' element={<Centers />} />
                        <Route path='/dates' element={<Dates/>} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </>
    )
}
export default App