import Inicio from "./components/Inicio";
import Registro from "./components/Registro";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/inicio" element={<Inicio/>} />
          <Route path="/registro" element={<Registro/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
