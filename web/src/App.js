import React, {useState, useEffect} from 'react';
import api from "./services/api";

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import DevItem from "./components/DevItem"
import DevForm from "./components/DevForm"

function App() {

  const [devs, setDevs] = useState([]);

  
  

  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get("/devs");
      setDevs(response.data);
    }
    loadDevs();
  },[]);

  async function handleAddDev(data){
    const response = await api.post('/devs', data);
    console.log(response.data);
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
       

      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
          
        </ul>

      </main>
    </div>
  );
}

export default App;

/*
return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <form onSubmit={handleAddDev}>
          <div className = "input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input 
            name="github_username" 
            id="github_username" 
            required
            value={github_username}
            onChange={e=>setGithubUsername(e.target.value)}
          />
          </div>

          <div className = "input-block">
          <label htmlFor="techs">Tecnologia</label>
          <input 
            name="techs" 
            id="techs" 
            required
            value={techs}
            onChange={e=>setTechs(e.target.value)}
          />
          </div>

          <div className="input-group">
            <div className = "input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={e=>setLatitude(e.target.value)}
              />
            </div>
            <div className = "input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={e=>setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>

      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="Diego Fernandes"/>
              <div>
                <strong> Diego Fernandes </strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile. </p>
            <a href="https://github.com/diego3g">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="Diego Fernandes"/>
              <div>
                <strong> Diego Fernandes </strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile. </p>
            <a href="https://github.com/diego3g">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="Diego Fernandes"/>
              <div>
                <strong> Diego Fernandes </strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile. </p>
            <a href="https://github.com/diego3g">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/2254731?s=400&v=4" alt="Diego Fernandes"/>
              <div>
                <strong> Diego Fernandes </strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile. </p>
            <a href="https://github.com/diego3g">Acessar perfil no Github</a>
          </li>
        </ul>

      </main>
    </div>
  );
}

*/