import { useState } from 'react';

import { fetchGet } from '../../api/nasa-neo';
import { Neo } from '../../data/types';
import './AsteroidView.scss';

const AsteroidView = () => {
    const [asteroidName, setAsteroidName] = useState('asteroid-view');

    const getAsteroid = async (id: string) => {
        const res: Neo = await fetchGet(`/neo/${id}?`, {});
        setAsteroidName(res.name);
    }

    return (
        <div>{asteroidName}</div>
    )
}

export default AsteroidView;