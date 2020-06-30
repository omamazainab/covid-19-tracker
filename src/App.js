import React from 'react'
import {Cards} from './components/Card/Cards'
import AppBar from './components/AppBar/AppBar'
import {Chart} from './components/Chart/Chart'


const App = () => {

    return (
        <div>
            <AppBar></AppBar>
            <Cards></Cards>
            <Chart></Chart>
            
        </div>
    )
}

export default App;