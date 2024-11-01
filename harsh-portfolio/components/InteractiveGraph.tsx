import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale,
  ChartOptions,
} from 'chart.js';

// Register the required components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, CategoryScale);

interface InteractiveGraphProps {
  onPointHover: (index: number | null) => void; // Callback when a point is hovered
  onPointClick: (index: number) => void; // Callback when a point is clicked
}

const InteractiveGraph: React.FC<InteractiveGraphProps> = ({ onPointHover, onPointClick }) => {
  const chartRef = useRef<any>(null); // Create a ref to store the chart instance

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

  const options: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      x: {
        type: 'category',
        grid: {
          color: '#444444',
        },
      },
      y: {
        beginAtZero: true, // Ensure y-axis starts at zero
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
  };

  const handleHover = (event: React.MouseEvent) => {
    const chartInstance = chartRef.current?.chartInstance; // Safely access the chart instance
    if (!chartInstance) return; // If chart instance is not available, exit early

    const chartElement = chartInstance.getElementsAtEventForMode(event.nativeEvent, 'nearest', { intersect: true }, false);
    if (chartElement.length) {
      const index = chartElement[0].index;
      onPointHover(index);
    } else {
      onPointHover(null);
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    const chartInstance = chartRef.current?.chartInstance; // Safely access the chart instance
    if (!chartInstance) return; // If chart instance is not available, exit early

    const chartElement = chartInstance.getElementsAtEventForMode(event.nativeEvent, 'nearest', { intersect: true }, false);
    if (chartElement.length) {
      const index = chartElement[0].index;
      onPointClick(index);
    }
  };

  return (
    <div
      role="button" // Set role to button
      tabIndex={0} // Make the div focusable
      onMouseMove={handleHover}
      onClick={handleClick}
      onKeyDown={(e) => { // Handle keyboard interactions
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick(e as any); // Cast event to any for compatibility
        }
      }}
      style={{ outline: 'none' }} // Optional: To prevent the outline when focusing
    >
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default InteractiveGraph;
