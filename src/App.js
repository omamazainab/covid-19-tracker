import React from 'react'
import {Cards} from './components/Card/Cards'
import AppBar from './components/AppBar/AppBar'
import {Chart} from './components/Chart/Chart'
import Map from './components/MapGL/Map'

const App = () => {

    return (
        <div>
            <AppBar></AppBar>
            <Cards></Cards>
            <Chart></Chart>
            <Map></Map>
        </div>
    )
}

export default App;