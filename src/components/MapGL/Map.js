import React, {useState, useEffect} from 'react'
import ReactMapGL, {Marker,Popup } from 'react-map-gl'
import Axios from 'axios';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import {Doughnut} from 'react-chartjs-2';
import logo from '../../logo.png';
import './Map.css'

const Map = () => {

 

    const [viewport, setViewport] = useState({
        latitude: 30.3753,
        longitude: 69.3451,
        width: "60vw",
        height: "60vh",
        zoom: 2
    });

    const [coronacases, setCoronacases] = useState("")

    const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect(() => {
        async function getApi() {
            const {data} = await Axios.get("https://www.trackcorona.live/api/countries");
            setCoronacases(data);
            
        }
        getApi()
    }, []);



    if(!coronacases){
        return (<div className="circular-progress"><CircularProgress /></div>)
    }
    return (
        <div className="map-container">
            
            <ReactMapGL  className="map"
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
                            <button 
                                className="marker-button"  
                                onClick={ e => {
                                    e.preventDefault();
                                    setSelectedCountry(country);
                                    }} >
                                <img src={logo} alt="marker" width="15" height="15"/>
                            </button>
                            
                        </Marker>
                    )
                    
                }

                {selectedCountry ? (
                    <Popup 
                        latitude={selectedCountry.latitude} 
                        longitude={selectedCountry.longitude}
                        onClose={ () => {
                            setSelectedCountry(null);
                        }}
                        >
                        <div>
                    <Typography color="textSecondary" align="center">{selectedCountry.location}</Typography>
                        <Doughnut data={{
                                labels: [
                                    'Recovered',
                                    'Deaths',
                                    'Confirmed'
                                ],
                                datasets: [{
                                    data: [selectedCountry.recovered, selectedCountry.dead, selectedCountry.confirmed],
                                    backgroundColor: [
                                    '#008000',
                                    '#FF0000',
                                    '#0000FF'
                                    ],
                                    hoverBackgroundColor: [
                                    '#228B22',
                                    '#8B0000',
                                    '#008080'
                                    ],
                                    borderWidth: 0
                                }]
                            }} />
                        </div>
                    </Popup>
                ):null }
            </ReactMapGL>
        </div>
    )
}

export default Map
