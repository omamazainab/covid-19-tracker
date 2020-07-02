import React, {useState, useEffect} from 'react'
import ReactMapGL from 'react-map-gl'
import Axios from 'axios';


const Map = () => {

    const [viewport, setViewport] = useState({
        latitude: 30.3753,
        longitude: 69.3451,
        width: "100vw",
        height: "100vh",
        zoom: 2
    });

    useEffect(() => {
        async function getApi() {
            const {data} = await Axios.get("https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search");
            console.log(data.data.rows[1].country_abbreviation);
        }
        getApi()
    }, []);

    return (
        <div>
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken={'pk.eyJ1Ijoib21hbWF6YWluYWIiLCJhIjoiY2tjMzZ0c3VnMmFkczJybGdrc2txdG5rNSJ9._WsRccuLzh8lGjKZMH1hqQ'} 
                mapStyle="mapbox://styles/omamazainab/ckc4rl4i00zha1ip6i03t5wfv" 
                onViewportChange={
                    viewport=> setViewport(viewport)
                }
            >
                Markers here
            </ReactMapGL>
        </div>
    )
}

export default Map
