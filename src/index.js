import ReactDom from "react-dom/client"
import "./style.css"
import Home from "./views/Home/Home"
import About from "./views/About/About"
import Contact from "./views/Contact/Contact"

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<Home />)