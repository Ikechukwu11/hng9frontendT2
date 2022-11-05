import './App.css';
import Home from "./components/Home";
import Contact from "./components/Contact";
import {Routes, Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Routes>
      <Route exact path="/contact" element={ <Contact />} />
      <Route exact path="/" element={ <Home />} />
      </Routes>
  );
}

export default App;