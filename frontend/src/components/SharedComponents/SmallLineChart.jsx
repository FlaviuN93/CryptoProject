import React, { useState, useEffect } from 'react';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';

const SmallLineChart = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      type: 'line',
      plotarea: {
        width: props.width,
        height: props.height,
        margin: props.margin || '0 0 0 0',
        backgroundColor: props.backgroundColor || 'white',
      },

      'scale-x': {
        visible: false,
      },
      'scale-y': {
        visible: false,
      },

      tooltip: {
        visible: false,
      },
      plot: {
        highlight: true,
        'tooltip-text': '%t views: %v<br>%k',
        shadow: 0,
        'line-width': 4,
        marker: {
          type: 'none',
        },
        animation: {
          effect: 2,
          sequence: 1,
          speed: 100,
        },
        aspect: 'spline',
      },

      series: [
        {
          values: Object.values(props.crypto.price),
          'line-color': `${props.pricePercentage > 0 ? '#2bb596' : '#e3507a'}`,
          'legend-marker': {
            visible: false,
          },
        },
      ],
    });
  }, [
    props.crypto,
    props.pricePercentage,
    props.width,
    props.height,
    props.margin,
    props.backgroundColor,
  ]);

  return (
    <ZingChart
      data={data}
      width={props.width || 45}
      height={props.height || 20}
    />
  );
};

export default SmallLineChart;
