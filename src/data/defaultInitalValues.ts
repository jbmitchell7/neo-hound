const emptyDiameter = {
    kilometers: {
        estimated_diameter_max: 0,
        estimated_diameter_min: 0
    },
    meters: {
        estimated_diameter_max: 0,
        estimated_diameter_min: 0
    },
    miles: {
        estimated_diameter_max: 0,
        estimated_diameter_min: 0
    },
    feet: {
        estimated_diameter_max: 0,
        estimated_diameter_min: 0
    },
}

const emptyUrl = new URL('https://google.com');

const emptyOrbitalData = {
    orbit_id: '',
    orbit_determination_date: '',
    first_observation_date: '',
    last_observation_date: '',
    data_arc_in_days: 0,
    observations_used: 0,
    orbit_uncertainty: '',
    minimum_orbit_intersection: '',
    jupiter_tisserand_invariant: '',
    epoch_osculation: '',
    eccentricity: '',
    semi_major_axis: '',
    inclination: '',
    ascending_node_longitude: '',
    orbital_period: '',
    perihelion_distance: '',
    perihelion_argument: '',
    aphelion_distance: '',
    perihelion_time: '',
    mean_anomaly: '',
    mean_motion: '',
    equinox: '',
    orbit_class: {
        orbit_class_description: '',
        orbit_class_range: '',
        orbit_class_type: ''
    }
}

export const emptyNeo = {
    links: {},
    id: '',
    neo_reference_id: '',
    name: '',
    designation: '',
    nasa_jpl_url: emptyUrl,
    absolute_magnitude_h: 0,
    estimated_diameter: emptyDiameter,
    is_potentially_hazardous_asteroid: false,
    close_approach_data: [],
    orbital_data: emptyOrbitalData,
    is_sentry_object: false
}