import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './cards.css'

import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';


export const Cards = () => {

    const [card, setCard] = useState("")

    useEffect(() => {
        async function getApi() {
            const {data} = await Axios.get("https://covid19.mathdro.id/api");
            setCard(data);
            
        }
        getApi()
    }, []);

    if(!card.confirmed){
        return (
            <div className="circular-progress"><CircularProgress /></div>
        )
    }
      return (
        <div>
            <Tooltip title="Total global cases">
                {/* <Typography variant="h5" className="global-cases" align="center" >Total Global Cases</Typography> */}
                    <Grid container spacing={4} justify="center">
                    <Grid item >
                            <Card className="card" style={{background:'blue' , color:'white' }} >
                                <CardContent align="center">
                                    <Typography color="textSecondary" align="center" style={{ color:'white'}} >Infected</Typography>
                                    <i class="fa fa-ambulance" style={{color:'white', fontsize:'40px'}} ></i>
                                    <Typography variant="h5" className="infected" align="center" style={{ color:'white'}}>
                                        <CountUp 
                                            start={0}
                                            end={card.confirmed.value}
                                            duration={2.5}
                                            separator=","
                                        />
                                        </Typography>
                                    <small>{new Date(card.lastUpdate).toDateString()}</small>
                                </CardContent>
                            </Card>
                    </Grid>
                    <Grid item >
                            <Card  className="card" style={{background:'green', color:'white' }}>
                                <CardContent align="center">
                                    <Typography color="textSecondary" align="center" style={{ color:'white'}}>Recovered</Typography>
                                    <i class="fa fa-heartbeat" style={{color:'white', fontsize:'40px'}} ></i>
                                    <Typography variant="h5" className="recovered" align="center"  style={{ color:'white'}}>
                                        <CountUp 
                                            start={0}
                                            end={card.recovered.value}
                                            duration={2.5}
                                            separator=","
                                        />
                                    </Typography>
                                    <small>{new Date(card.lastUpdate).toDateString()}</small>
                                </CardContent>
                            </Card>
                    </Grid>
                    <Grid item >
                            <Card  className="card" style={{background:'red', color:'white'}}>
                                <CardContent align="center">
                                    <Typography color="textSecondary" align="center" style={{ color:'white'}}>Deaths</Typography>
                                    <i class="fa fa-close" style={{color:'white', fontsize:'40px'}} ></i>
                                    <Typography variant="h5" className="deaths" align="center"  style={{ color:'white'}}>
                                    <CountUp 
                                        start={0}
                                        end={card.deaths.value}
                                        duration={2.5}
                                        separator=","
                                    />
                                    </Typography>
                                    <small>{new Date(card.lastUpdate).toDateString()}</small>
                                </CardContent>
                            </Card>
                    </Grid>
                </Grid>
            

                </Tooltip>
           
        </div>
    )
}
