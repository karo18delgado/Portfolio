import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navb from "./components/Navb";
import Sobremi from "./components/Sobremi";
import Conocimientos from "./components/Conocimientos";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";
import skills from "./components/Hardskills";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navb />
        <Sobremi />
        <div id="conocimientos" className="skills  text-center">
        <h2 className="subtitle pb-5">Conocimientos</h2>
        <div className="row justify-content-center p-3 ">
          
        {skills.map((skills) => (
          
            <Conocimientos
              skills={skills}
            
            />))}
        </div>
        </div>
      <Proyectos/>
      <Footer />
    </Router>
  );
}

export default App;
