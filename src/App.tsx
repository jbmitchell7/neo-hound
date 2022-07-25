import { Routes, Route } from 'react-router-dom';

import AsteroidView from './views/AsteroidView/AsteroidView';
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AsteroidView />} />
      </Routes>
    </div>
  );
}

export default App;
