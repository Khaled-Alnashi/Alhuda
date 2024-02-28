import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import { Container } from './components/index'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, Footer } from './sections/index'
import { Home, AllTeams, Activities, Centers, Dates, Arabic, Islam, Quran, Contact, Register} from'./Pages/index'
const App = () => {
    return (
        <>
            <ToastContainer theme='colored' position='top-center'></ToastContainer>
            <Router basename={'/Alhuda'}>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/all-teams' element={<AllTeams />} />
                        <Route path='/activities' element={<Activities />} />
                        <Route path='/centers' element={<Centers />} />
                        <Route path='/dates' element={<Dates />} />
                        <Route path='/arabic' element={<Arabic />} />
                        <Route path='/islam' element={<Islam />} />
                        <Route path='/quran' element={<Quran />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </>
    )
}
export default App