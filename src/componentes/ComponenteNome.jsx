import { useEffect, useState } from "react";

function ComponenteNome() {
  const [nome, setNome] = useState("SEU NOME");
  
  useEffect(()=>{
    alert(`O nome foi alterado para ${nome}`)
  },[nome])

  return (
    <div>
      <button onClick={() => setNome("Luizitus")}>Alterar para apelido</button>
      <button onClick={() => setNome("Luiz Moreira")}>Alterar para Nome</button>
      <p>Seu nome, ou apelido é: {nome}</p>
    </div>
  );
}

export { ComponenteNome };
