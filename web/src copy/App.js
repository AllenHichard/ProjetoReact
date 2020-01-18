import React, {useState} from 'react';

// Componente - Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade - informações que um componente Pai passa para o componente filho
// Estado: informações mantidas pelo componente (lembrar: imutabilidade)

// <> fragmento

import Header from "./Header"


function App() {
  const [counter, setCounter] = useState(0); // ou var
  function incrementCounter(){
    //alert("Hello");
    setCounter(counter + 1);
    
  }

  return (
    <>
      <> 
      <Header title="Titulo 1"/>
      <Header title="Titulo 2"/>
      <Header title="Titulo 3"/>
      </>
      <>
  <h1> Contador: {counter}</h1>
        <button onClick={incrementCounter}> Incrementar </button>
      </>
    </>
  );
}

export default App;
