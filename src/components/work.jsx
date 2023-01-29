import Header from "./header"
import Btn from "./btn"
import ProductionList from "./productionList"
import "../sass/style.scss"
import Contact from "./contact"

const Works = () =>{
    return(
        <div>
            <Header />
            <main>
                <h2>Works</h2>
                {/* <div className="SchoolYearBtnFlexWrap">
                    <Btn txt={"1年"}/>
                    <Btn txt={"2年"}/>
                    <Btn txt={"3年"}/>
                </div> */}
                <ProductionList />
                <Contact />
            </main>
        </div>
    )
}

export default Works