import { useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchGet } from '../../api/nasa-neo';
import { Feed, Neo } from '../../data/types';
import './FeedView.scss';

const FeedView = () => {
    const [asteroidName, setAsteroidName] = useState('asteroid-view');
    const [weeklyAsteroids, setWeeklyAsteroids] = useState<Neo[]>([]);

    const getAsteroid = async (id: string) => {
        const res: Neo = await fetchGet(`/neo/${id}?`, {});
        setAsteroidName(res.name);
    }

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
            <button onClick={getToday}>Click Me</button>
            <h2>Passing by Today</h2>
            {weeklyAsteroids.map(a => (
                <div key={a.id}>
                    <p>{a.name}</p>
                    <p>Relative Velocity to Earth: {a.close_approach_data[0].relative_velocity.miles_per_hour}mph</p>
                    <p>Max Estimated Diameter: {a.estimated_diameter.feet.estimated_diameter_max}ft</p>
                    <p>Miss Distance: {a.close_approach_data[0].miss_distance.astronomical} light years</p>
                    <Link to={'/asteroid'}>
                        <button>View Details</button>
                    </Link>
                    <p>-------------------------------------------------</p>
                </div>
            ))}
        </div>
    )
}

export default FeedView