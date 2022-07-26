import { useState } from 'react';
import './AsteroidView.scss';

const AsteroidView = () => {
    const [asteroidName, setAsteroidName] = useState('asteroid-view');

    return (
        <div>{asteroidName}</div>
    )
}

export default AsteroidView;