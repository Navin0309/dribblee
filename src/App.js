import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
// import Footer from "../src/components/Footer/Footer.jsx"
import Projects1 from "./components/Projects1";
import Projects2 from "./components/Projects2";
import Projects3 from "./components/Projects3";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main />
      <Menu />
      <add/>
      <Projects/>
      <Projects1/>
      <Projects2/>
      <Projects3/>
      <Footer/>
    </div>
  );
}

export default App;
