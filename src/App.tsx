import { Routes, Route } from 'react-router-dom';

import AsteroidView from './views/AsteroidView/AsteroidView';
import nasa from './assets/nasa-logo.png';
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <div className='title-bar'>
        <img src={nasa} className='nasa-logo' />
        <h1 className='title'>NEO</h1>
      </div>
      <Routes>
        <Route path='/' element={<AsteroidView />} />
      </Routes>
    </div>
  );
}

export default App;
