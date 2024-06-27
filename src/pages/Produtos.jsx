import { Container, Navbar } from "react-bootstrap";
import { ListaProdutos } from "../componentes/ListaProdutos";

function Produto (){
    return(
        
        <Container>
            
            <Navbar></Navbar>
            <p>Aqui vai o produto</p>
            <ListaProdutos/>
        </Container>
    )
}

export { Produto };