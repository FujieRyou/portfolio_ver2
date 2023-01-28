import "./sass/_ress.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/style.scss"
import Top from './components/mainPage'
import Works from "./components/work";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Top />} />
        <Route path={`/Works/`} element={<Works />} />
      </Routes>
    </BrowserRouter>
    )
}

export default App
