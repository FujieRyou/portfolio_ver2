import { Link } from "react-router-dom"
import Btn from "./btn"
import iberi from "../img/いべりー.png"
import myPortfolio from "../img/portfolioImage.png"
import myflagrance from "../img/myflagrance.png"
import matsuriru from "../img/まつりる.png"



const TopWorkList = () =>{
    return(
        <div className="workListWrap">
            <h2>works</h2>
            <div className="workListFlexWrap">
                <Link to={`/Works/`}><img src={iberi} alt="" /></Link>
                <Link to={`/Works/`}><img src={myPortfolio} alt="" /></Link>
                <Link to={`/Works/`}><img src={myflagrance} alt="" /></Link>
                <Link to={`/Works/`}><img src={matsuriru} alt="" /></Link>
            </div>
            <Btn txt={"view more"} />
        </div>
    )
}

export default TopWorkList