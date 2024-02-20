import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import { Container} from './components/index'
import { Header, Footer } from './sections/index'
import{Home,AllTeams,Activities} from'./Pages/index'
const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/all-teams' element={<AllTeams />} />
                        <Route path='/activities' element={<Activities/>} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </>
    )
}
export default App