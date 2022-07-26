import { useNavigate } from "react-router-dom";

import Asteroid from "../../assets/asteroid-image";
import { Neo } from "../../data/types";
import './AsteroidCard.scss';

const AsteroidCard = (props: { asteroid: Neo }) => {
    const { asteroid } = props;
    let navigate = useNavigate();

    let randomColor = "#000000".replace(/0/g, () => { return (~~(Math.random() * 16)).toString(16); });
    let asteroidWidth = asteroid.estimated_diameter.feet.estimated_diameter_max * .2;

    return (
        <div className='asteroid'>
            <div className='asteroid-image' style={{ width: asteroidWidth + 'px' }}>
                <Asteroid randomColor={randomColor} />
            </div>
            <div>
                <p>{asteroid.name}</p>
                <p>Relative Velocity to Earth: {asteroid.close_approach_data[0].relative_velocity.miles_per_hour}mph</p>
                <p>Max Estimated Diameter: {asteroid.estimated_diameter.feet.estimated_diameter_max}ft</p>
                <p>Miss Distance: {asteroid.close_approach_data[0].miss_distance.astronomical} light years</p>
                <button onClick={() => navigate('/asteroid', { state: { asteroidId: asteroid.id } })}>View Details</button>
                <p>-------------------------------------------------</p>
            </div>
        </div>
    )
}

export default AsteroidCard;