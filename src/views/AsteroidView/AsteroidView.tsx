import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AsteroidView.scss';

const AsteroidView = () => {
    const [asteroidName, setAsteroidName] = useState('asteroid-view');

    return (
        <>
            <p>{asteroidName}</p>
            <Link to='/'>
                <button>Back to Feed</button>
            </Link>
        </>

    )
}

export default AsteroidView;