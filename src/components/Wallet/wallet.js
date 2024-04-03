import React, { useEffect } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import { graphDataApiCall } from '../../modules/APIService/apiService';
const data = {
  labels: ['Red', 'Grey', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => {
  const graphData = async () => {
    const response = await graphDataApiCall();
    if (response) {
      console.log('f', response);
    }
  };
  useEffect(() => {
    graphData();
  }, []);

  Chart.register(ArcElement);
  return (
    <div>
      <h2>Doughnut Chart</h2>
      {data && <Doughnut data={data} />}
    </div>
  );
};

export default DoughnutChart;
