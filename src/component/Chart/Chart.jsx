import React from 'react'
import './chart.css'
import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS, LinearScale, ArcElement, Tooltip, Legend, BarElement, CategoryScale  } from "chart.js";

ChartJS.register(LinearScale, ArcElement, Tooltip, Legend, BarElement, CategoryScale);


function Chartbox({chartData}) {
   
  return (
    <div className='Chart'>
        <Bar data={chartData}
         />

    </div>
  )
}

export default Chartbox
