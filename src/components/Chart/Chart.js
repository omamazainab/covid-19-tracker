import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Line } from 'react-chartjs-2';
import './Chart.css'

export const Chart = () => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {

        async function fetchAPI() {
            const { data } = await Axios.get("https://covid19.mathdro.id/api/daily");
            setDailyData(data);
        }
        fetchAPI();
    }, [])

    if (!dailyData) {
        return "loading";
    }

    return (
        <div className="chart-container">

            <Line
                data={{
                    labels: dailyData.map((date) => date.reportDate),
                    datasets: [
                        {
                            data: dailyData.map((data) => data.confirmed.total),
                            label: "Infected",
                            borderColor: "blue",
                            fill: true
                        }, {
                            data: dailyData.map((data) => data.deaths.total),
                            label: "Deaths",
                            borderColor: "red",
                            fill: true
                        }
                    ]

                }}>

            </Line>
        </div>
    )
}