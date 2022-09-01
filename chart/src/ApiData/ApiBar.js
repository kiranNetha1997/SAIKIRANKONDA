import React from 'react';
import { Bar } from "react-chartjs-2";
import { Chart, LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip } from "chart.js";
Chart.register(
    Chart, LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip
)


function ApiBar() {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const options = {
        plugins: {
            legend: {
                position: "top"

            },
            title: {
                display: true,
                text: "Data From Api"

            }

        }
    }
    const data = {
        labels,
        datasets: [
            {
                label: "Total Coins",
                data: [1500, 15892.589115],
                backgroundColor: "pink"
            },
            {
                label: "Total Market",
                data: [56, 85, 45918],
                backgroundColor: "grey"
            }
        ]
    }

    return (
        <div>
            <Bar options={options} data={data} />

        </div>
    )
}

export default ApiBar