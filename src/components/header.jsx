import { Link } from "react-router-dom"
import {HashLink} from 'react-router-hash-link';

const Header = () =>{
    return(
        <header>
            <ul className="headerFlexWrap">
                <li><Link to={`/`}>home</Link></li>
                <li><HashLink smooth to={`/#about`}>about</HashLink></li>
                <li><HashLink smooth to={`/#profile`}>profile</HashLink></li>
                <li><Link to={`/Works/`}>works</Link></li>
                <li><HashLink smooth to={`/#contact`}>contact</HashLink></li>
            </ul>
        </header>
    )
}

export default Header