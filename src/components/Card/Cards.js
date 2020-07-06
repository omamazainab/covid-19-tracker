import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './cards.css'

import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
import Container from '@material-ui/core/Container';
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
            <Container maxWidth="sm" className="card-container">
                <Typography variant="h5" className="global-cases" align="center" >Total Global Cases</Typography>
                    <Grid container spacing={4} justify="center">
                    <Grid item >
                            <Card variant="outlined" >
                                <CardContent >
                                    <Typography color="textSecondary" align="center" >Infected</Typography>
                                    <Typography variant="h5" className="infected" align="center">
                                        <CountUp 
                                            start={0}
                                            end={card.confirmed.value}
                                            duration={2.5}
                                            separator=","
                                        />
                                        </Typography>
                                    <Typography color="textSecondary">{new Date(card.lastUpdate).toDateString()}</Typography>
                                </CardContent>
                            </Card>
                    </Grid>
                    <Grid item >
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography color="textSecondary" align="center">Recovered</Typography>
                                    <Typography variant="h5" className="recovered" align="center">
                                        <CountUp 
                                            start={0}
                                            end={card.recovered.value}
                                            duration={2.5}
                                            separator=","
                                        />
                                    </Typography>
                                    <Typography color="textSecondary">{new Date(card.lastUpdate).toDateString()}</Typography>
                                </CardContent>
                            </Card>
                    </Grid>
                    <Grid item >
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography color="textSecondary" align="center">Deaths</Typography>
                                    <Typography variant="h5" className="deaths" align="center">
                                    <CountUp 
                                        start={0}
                                        end={card.deaths.value}
                                        duration={2.5}
                                        separator=","
                                    />
                                    </Typography>
                                    <Typography color="textSecondary" >{new Date(card.lastUpdate).toDateString()}</Typography>
                                </CardContent>
                            </Card>
                    </Grid>
                </Grid>
            </Container>

           
           
        </div>
    )
}
