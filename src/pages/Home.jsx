import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { Login } from "./Login";
import { MyNavBar } from "../componentes/MyNavBar";
import { CarouselAnuncios } from "../componentes/CarouselAnuncios";


export function Home(){
    return(
        <div>
          <MyNavBar></MyNavBar>
           <CarouselAnuncios />
            <ListaProdutos/>
        </div>
    );
}

