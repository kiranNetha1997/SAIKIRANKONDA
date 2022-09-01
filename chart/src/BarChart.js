// import styles from './App.css';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip, } from "chart.js";
Chart.register(
    LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip
)


function BarChart() {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const options = {
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: "Expense Tracker"
            }
        }
    }

    const data = {
        labels,
        datasets: [
            {
                label: "2020 Expenses",
                data: [10, 20, 50, 90, 50, 68, 49, 58, 86, 19, 14, 39, 100],
                backgroundColor: 'pink'
            },
            {
                label: "2021 expenses",
                data: [11, 15, 58, 69, 48, 27, 15, 39, 75, 89, 17, 58],
                backgroundColor: 'grey'

            },
            {
                label: "2022 expenses",
                data: [25, 28, 29, 24, 29, 27, 29, 18, 30, 38, 18, 79],
                backgroundColor: 'yellow'

            }
        ]
    };

    return (
        <div className='div' style={{ 'height': 400, 'width': 800, 'margin': 'auto' }}>

            <Bar options={options} data={data} />
        </div>
    )
}

export default BarChart;