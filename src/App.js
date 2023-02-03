import logo from "./logo.svg";
import "./App.scss";
import Header from "./header/Header";
import Contact from "./contact/Contact";

function App() {
    return (
        <div className="home">
            <Header />
            <Contact />
        </div>
    );
}

export default App;
