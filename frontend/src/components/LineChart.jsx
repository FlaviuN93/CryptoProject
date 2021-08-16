import React from 'react';
import { Line } from 'react-chartjs-2';
import './LineChart.scss';

const LineChart = (props) => {
  return (
    <div className='line-chart'>
      <Line
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: ['red'],
              borderColor: ['blue'],
              borderWidth: 1.5,
            },
          ],
        }}
      />{' '}
      Hello
    </div>
  );
};

export default LineChart;
