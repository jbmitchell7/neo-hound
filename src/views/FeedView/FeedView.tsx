import { useEffect, useState } from 'react';

import { fetchGet } from '../../api/nasa-neo';
import { Feed, Neo } from '../../data/types';
import './FeedView.scss';
import AsteroidCard from '../../components/Asteroid-Card/AsteroidCard';

const FeedView = () => {
    const [weeklyAsteroids, setWeeklyAsteroids] = useState<Neo[]>([]);

    useEffect(() => {
        getToday();
    }, []);

    const getToday = async () => {
        /*getting date and converting to string with correct
         format for query parameters*/
        let today = new Date();
        let todayStr = today.toISOString().slice(0, 10);

        const res: Feed = await fetchGet(
            `/feed?start_date=${todayStr}&end_date=${todayStr}&`, {}
        );
        setWeeklyAsteroids(res.near_earth_objects[todayStr]);
    }

    return (
        <div className='feed'>
            <h2>Passing by Today</h2>
            {weeklyAsteroids.map(a => (
                <AsteroidCard asteroid={a} />
            ))}
        </div>
    )
}

export default FeedView