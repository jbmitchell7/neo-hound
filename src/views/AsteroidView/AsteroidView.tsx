import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { fetchGet } from '../../api/nasa-neo';
import { emptyNeo } from '../../data/defaultInitalValues';
import AsteroidCard from '../../components/Asteroid-Card/AsteroidCard';
import { Neo } from '../../data/types';
import './AsteroidView.scss';

const AsteroidView = () => {
    const [asteroid, setAsteroid] = useState<Neo>(emptyNeo);
    const navigate = useNavigate();
    const location = useLocation();
    const { asteroidId } = location.state as any;



    useEffect(() => {
        const getAsteroid = async () => {
            try {
                const res: Neo = await fetchGet(`/neo/${asteroidId}?`, {});
                setAsteroid(res);
                console.log(asteroid.id);
            } catch {
                alert('Error getting Asteroid');
                navigate('/');
            }
        }
        getAsteroid();

        return () => setAsteroid(emptyNeo);
    }, []);

    return (
        <>
            {/* <AsteroidCard asteroid={asteroid} /> */}
            <p>{asteroid.name}</p>
            <button onClick={() => navigate('/')}>Back to Feed</button>
        </>

    )
}

export default AsteroidView;