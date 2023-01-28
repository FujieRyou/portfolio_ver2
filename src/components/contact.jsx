import github from "../img/github.svg"
import Instagram from "../img/Instagram.svg"
import twitter from "../img/twitter.svg"

const Contact = () =>{
    return(
        <div className="contactWrap">
            <h2>contact</h2>
            <div className="mailFlexWrap">
                <p>mail</p>
                <address><a href="mailto:fujieryo2210185@gmail.com">fujieryo2210185@gmail.com</a></address>
            </div>
            <div className="snsFlexWrap">
                <p>SNS</p>
                <div className="iconWrap">
                    <a href="https://github.com/FujieRyou"><img src={github} alt="" /></a>
                    <img src={Instagram} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact