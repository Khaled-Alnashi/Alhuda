import './GoalsCard.css'
import { FaArrowLeft } from "react-icons/fa6";
const GoalsCard = (props) => {
    return (
        <li> <span style={{ "color": "var(--color-primary)" }}><FaArrowLeft /></span> {props.title}</li>
    )
}

export default GoalsCard