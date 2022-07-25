export interface Neo {
    links: Links
    id: string
    neo_reference_id: string
    name: string
    designation: string
    nasa_jpl_url: URL
    absolute_magnitude_h: number
    estimated_diameter: DiameterUnits
    is_potentially_hazardous_asteroid: boolean
    close_approach_data: SingleCloseApproachData[]
    orbital_data: OrbitalData
    is_sentry_object: boolean
}

export interface Feed {
    links: Links
    element_count: number
    near_earth_objects: Dates
}

interface Links {
    next?: URL
    prev?: URL
    self?: URL
}

interface DiameterUnits {
    kilometers: DiameterMinMax
    meters: DiameterMinMax
    miles: DiameterMinMax
    feet: DiameterMinMax
}

interface DiameterMinMax {
    estimated_diameter_min: number
    estimated_diameter_max: number
}

interface SingleCloseApproachData {
    close_approach_date: string
    close_approach_date_full: string
    epoch_date_close_approach: number
    relative_velocity: VelocityUnits
    miss_distance: DistanceUnits
    orbiting_body: string
}

interface VelocityUnits {
    kilometers_per_second: string
    kilometers_per_hour: string
    miles_per_hour: string
}

interface DistanceUnits {
    astronomical: string
    lunar: string
    kilometers: string
    miles: string
}

interface OrbitalData {
    orbit_id: string
    orbit_determination_date: string
    first_observation_date: string,
    last_observation_date: string,
    data_arc_in_days: number,
    observations_used: number,
    orbit_uncertainty: string,
    minimum_orbit_intersection: string,
    jupiter_tisserand_invariant: string,
    epoch_osculation: string,
    eccentricity: string,
    semi_major_axis: string,
    inclination: string,
    ascending_node_longitude: string,
    orbital_period: string,
    perihelion_distance: string,
    perihelion_argument: string,
    aphelion_distance: string,
    perihelion_time: string,
    mean_anomaly: string,
    mean_motion: string,
    equinox: string,
    orbit_class: OrbitClass
}

interface OrbitClass {
    orbit_class_type: string
    orbit_class_description: string
    orbit_class_range: string
}

interface Dates {
    [key: string]: Neo[]
}