import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Footer from "./components/Footers";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main />
      <Menu />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
