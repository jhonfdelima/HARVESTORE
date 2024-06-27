import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Produto } from "../pages/Produtos";
import { Login } from "../pages/Login";

export function RouteApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/Login" element={ <Login/>}/>    
                <Route path="/" element={ <Home/>}/>
                <Route path="/produto" element={ <Produto/>}/>
            </Routes>
        </BrowserRouter>
    )
}


