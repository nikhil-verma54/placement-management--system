import React from 'react'
import './Line.css'
import { Line } from 'react-chartjs-2'
import {
    CategoryScale,
    Chart as ChartJs,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    plugins
} from 'chart.js'
import { lineChartData } from '../Data/Graph_Data'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default function UserGraphDashboard() {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: "Number of Users per Day"
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            }
        }
    }

    return (
        <Line className='gc-user-dashboard-graph' options={options} data={lineChartData} />
    )
}
