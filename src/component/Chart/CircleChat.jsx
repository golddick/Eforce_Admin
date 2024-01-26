import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const CircleChart = ({labels, datasets} ) => {

    const data = {
        labels: [
          'Fined Vehicles',
          'Fined Drivers',
          'Vehicles & Drivers'

        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300,  100,200],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
          
        }],
      
      };

    // const data = {
    //     labels,
    //     datasets
    //   };

      const options = {
        plugins: {
          animation: {
            rotate: true,
          },
        },
      };
    
  

  return (
     <div style={{width:'200px'}}>
      <Doughnut  data={data} options={options} />
     </div>
  );
};

export default CircleChart;
