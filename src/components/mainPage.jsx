import "../sass/style.scss"
import FirstView from "./firstView"
import Header from "./header"
import About from "./about"
import Profile from "./profile"
import TopWorkList from "./topWorkList"
import Contact from "./contact"

const Top = () =>{
    return(
        <div>
            <Header />
            <main>
                <FirstView />
                <About />
                <Profile />
                <TopWorkList />
                <Contact />
            </main>
        </div>
    )
}

export default Top