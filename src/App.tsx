import { useState } from 'react';
import { fetchGet } from './api/nasa-neo';
import './App.scss';
import { Feed, Neo } from './data/types';

const App = () => {
  const [neo, setNeo] = useState(0);

  const getNeo = async () => {
    const testNeo: Feed = await fetchGet('/feed/?start_date=2022-07-01&end_date=2022-07-02&detailed=false&', {});
    setNeo(testNeo.element_count);
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
