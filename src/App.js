import './App.css';
import Home from "./components/Home";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home />} />
      <Route  path="/contact" element={ <Contact />} />
      <Route  path="*" element={ <Error404 />} />
      </Routes>
  );
}

export default App;