import { Link } from "react-router-dom"

const Header = () =>{
    return(
        <header>
            <ul className="headerFlexWrap">
                <li><Link to={`/`}>home</Link></li>
                <li><a href="#">about</a></li>
                <li><a href="#">profile</a></li>
                <li><Link to={`/Works/`}>works</Link></li>
                <li><a href="#">contact</a></li>
            </ul>
        </header>
    )
}

export default Header