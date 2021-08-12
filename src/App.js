import './App.css';
import Header from './components/Header';
import Popup from './components/Popup';
import { useState } from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="App">
      <main>
        <Header />
        <button onClick={() => setButtonPopup(true)}>Add Recipe</button>
        <br></br>
        <p1>there are no recipes to list</p1>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <br></br>
          <br></br>
          <p1>Recipe Name: </p1>
          <input type="text" name="Recipe Name"/>
          <br></br>
          <br></br>
          <p2>Recipe Instructions: </p2>
          <input type="text" name="Recipe Intructions"/>
        </Popup>  
        
      </main>
      
      
    </div>
  );
}

export default App;
