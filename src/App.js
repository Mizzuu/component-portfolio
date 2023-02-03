import logo from "./logo.svg";
import "./App.scss";
import Header from "./header/Header";
import Contact from "./contact/Contact";
import Skill from "./skill/Skill";

function App() {
    return (
        <div className="home">
            <Header />
            <Skill />
            <Contact />
        </div>
    );
}

export default App;
