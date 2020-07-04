import React, {useState, useEffect} from 'react'
import ReactMapGL, {Marker,Popup } from 'react-map-gl'
import Axios from 'axios';
import logo from '../../logo.png';
import './Map.css'

const Map = () => {

    const [viewport, setViewport] = useState({
        latitude: 30.3753,
        longitude: 69.3451,
        width: "100vw",
        height: "100vh",
        zoom: 2
    });

    const [coronacases, setCoronacases] = useState("")

    useEffect(() => {
        async function getApi() {
            const {data} = await Axios.get("https://www.trackcorona.live/api/countries");
            setCoronacases(data);
            
        }
        getApi()
    }, []);

    if(!coronacases){
        return 'loading'
    }
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
                {
                    
                    coronacases.data.map( country => 
                        <Marker
                            key={country.country_code}
                            latitude={country.latitude}
                            longitude={country.longitude}
                        >
                            <button className="marker-button">
                                <img src={logo} alt="marker" width="15" height="15"/>
                            </button>
                            
                        </Marker>
                    )
                    
                }

            </ReactMapGL>
        </div>
    )
}

export default Map
