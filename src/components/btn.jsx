import { Link } from "react-router-dom"

const Btn = ({txt}) =>{
    return(
        <Link to={`/Works/`}><button type="button" className="btn">{txt}</button></Link>
        
    )
}

export default Btn