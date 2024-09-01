import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale
} from 'chart.js';

// Register the required components, including Tooltip for tooltips
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale);

const InteractiveGraph = ({ onPointHover, onPointClick }) => {
  const data = {
    labels: ['Point 1', 'Point 2', 'Point 3', 'Point 4'],
    datasets: [
      {
        label: 'Sample Data',
        data: [3, 5, 2, 4], // Adjusted data for four peaks
        fill: false,
        borderColor: '#FF0000',
        tension: 0.4,
        pointBackgroundColor: '#FF0000',
        pointBorderColor: '#000000',
        pointBorderWidth: 3,
        pointRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'category',
        grid: {
          color: '#444444',
        },
      },
      y: {
        grid: {
          color: '#444444',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    },
    onHover: (event, chartElement) => {
      if (chartElement.length) {
        const index = chartElement[0].index;
        onPointHover(index);
      } else {
        onPointHover(null);
      }
    },
    onClick: (event, chartElement) => {
      if (chartElement.length) {
        const index = chartElement[0].index;
        onPointClick(index);
      }
    },
  };

  return <Line data={data} options={options} />;
};

export default InteractiveGraph;
