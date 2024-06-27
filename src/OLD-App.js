import logo from './logo.svg';
import './App.css';
import "font-awesome/css/font-awesome.css"
import { ComponenteNome } from './componentes/ComponenteNome';
import { ComponenteResumoSobreVoce } from './componentes/ComponenteResumoSobreVoce';
import { ComponenteCompetencia } from './componentes/ComponenteCompetencia';
import { ComponenteNomeIdadeTelefone } from './componentes/ComponenteNomeIdadeTelefone';
import { ComponenteEndereco } from './componentes/ComponenteEndereco';
import { ComponenteFormacao } from './componentes/ComponenteFormacao';
import { ComponenteQualidade } from './componentes/ComponenteQualidade';

function App() {
  return (
    <div className="App">
      <p>
        TESTE DE ALTEÇÃO.
      </p>
      <ComponenteNome />
      <ComponenteResumoSobreVoce>
        Um pouco da minha história para vocês!
      </ComponenteResumoSobreVoce>
      <hr/>
      <p>Lista de Competencia</p>
      <ComponenteCompetencia
        nome="HTML"
        descricao="Elaboracao de pagina estatica"
      />
      <ComponenteCompetencia
        nome="CSS"
        descricao="Configuração de estilos usando CSS"
      />
      <ComponenteCompetencia
        nome="NodeJS"
        descricao="programação em NodeJs"
      />
      <ComponenteNomeIdadeTelefone 
        nome="Aqui é o Luizitus"
        idade="40 anos"
        telefone="(+55)41999121543"
      />
      <ComponenteEndereco
        rua="Av Annibale Ferrarini"
        bairro="Jardim Flórida"
        numero="2102"
        complemento="Apto 01"
      />
      <ComponenteFormacao
        instituicao="Harve cursos"
        curso="Desenvolvedor Web"
      />
      <ComponenteQualidade
        nome="Comunicativo"
        descricao="Teste de descrição"
      />
    </div>
  )
}

export default App;
