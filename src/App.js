import React from 'react'
import {Cards} from './components/Card/Cards'
import AppBar from './components/AppBar/AppBar'
import {Chart} from './components/Chart/Chart'
import Map from './components/MapGL/Map'
import Header from './components/Header/Header'

const App = () => {

    return (
        <div>
            <AppBar></AppBar>
            <Header></Header>
            <Cards></Cards>
            {/* <Chart></Chart> */}
            <Map></Map>
        </div>
    )
}

export default App;