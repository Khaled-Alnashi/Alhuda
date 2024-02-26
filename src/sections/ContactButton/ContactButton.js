import './ContactButton.css'
import { Link } from 'react-router-dom'
const ContactButton = () => {
    return (
        <div className='contact-button' ><Link className='button  primary-button' to = '/contact'>تواصل معنا </Link></div>
    )
}

export default ContactButton