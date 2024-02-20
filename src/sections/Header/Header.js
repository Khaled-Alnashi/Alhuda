import { Link } from 'react-router-dom'
import './Header.css'

import logo from '../../assets/images/logo.png'

import NavItem,{NavItemDropDown} from '../../components/NavItem/NavItem'

const Header = () => {
    return (
        <div className="navbar navbar-expand-md  navbar-dark cyborg-navbar  fixed-top">
            <div className="container">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt=''/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainmenu">
                    <ul className="navbar-nav ms-auto">
                        <NavItem><Link to="/" className="nav-link">الرئيسية</Link></NavItem>
                        <NavItemDropDown>
                            <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">الفروع</Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/#" className="dropdown-item">KTV</Link></li>
                                <li><Link to="/#" className="dropdown-item">Evershagen</Link></li>
                                <li><Link to="/#" className="dropdown-item">Groß Klein</Link></li>
                            </ul>
                        </NavItemDropDown>
                        <NavItemDropDown>
                            <Link to="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">لمحة عن</Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/activities" className="dropdown-item">أنشطتنا</Link></li>
                                <li><Link to="/all-teams" className="dropdown-item">الفريق</Link></li>
                                <li><Link to="/#" className="dropdown-item">التقويم </Link></li>
                            </ul>
                        </NavItemDropDown>
                        <NavItem><Link to="/#" className="nav-link">التسجيل</Link></NavItem>
                        <NavItem><Link to="/#" className="nav-link">تواصل معنا</Link></NavItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header