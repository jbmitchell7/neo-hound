import { useState } from 'react';
import { fetchGet } from './api/nasa-neo';
import './App.scss';

const App = () => {
  const [neo, setNeo] = useState('');

  const getNeo = async () => {
    const neoName = await fetchGet('/neo/3542519', {});
    setNeo(neoName.name);
  }

  getNeo();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {neo}
        </p>
      </header>
    </div>
  );
}

export default App;
