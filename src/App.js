import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { RouteApp } from "./route";
import { MyNavBar } from "./componentes/MyNavBar.jsx";
import { CarouselAnuncios } from "./componentes/CarouselAnuncios.jsx";
import { GerenciarLogin } from "./componentes/GerenciarLogin.jsx";
function App() {
  return (
    <>
  
      <RouteApp />
      <ToastContainer />
    </>
  );
}

export default App;