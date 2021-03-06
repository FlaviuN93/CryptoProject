import React, { useState, useContext, useEffect } from 'react';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';
import { CryptoContext } from '../../providers/crypto.provider';

const MainChart = () => {
  const { selectedCrypto } = useContext(CryptoContext);
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      type: 'line',
      plotarea: {
        margin: 'dynamic 45 60 dynamic',
      },
      legend: {
        layout: 'float',
        'background-color': 'none',
        'border-width': 0,
        shadow: 0,
        align: 'left',
        'adjust-layout': true,
        'toggle-action': 'remove',
        item: {
          padding: 8,
          marginRight: 5,
          cursor: 'hand',
        },
      },
      'scale-x': {
        item: {
          paddingTop: 20,
        },

        lineColor: 'none',
        tick: {
          visible: false,
        },
        guide: {
          visible: false,
        },
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
      },
      'scale-y': {
        lineColor: 'none',
        tick: {
          visible: false,
        },
        guide: {
          visible: false,
        },
      },
      'crosshair-x': {
        'line-color': '#efefef',
        'plot-label': {
          'border-radius': '25px',
          'border-width': '1px',
          'border-color': '#f6f7f8',
          padding: '15px',
          'font-weight': 'bold',
        },
        'scale-label': {
          visible: false,
        },
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
        'highlight-state': {
          'line-width': 6,
        },
        animation: {
          effect: 2,
          sequence: 1,
          speed: 100,
        },
        aspect: 'spline',
      },

      series: selectedCrypto.map((crypto) => {
        return {
          values: Object.values(crypto.price),
          text: crypto.short,
          'line-color': crypto.color,
          'legend-item': {
            'background-color': crypto.color,
            borderRadius: 5,
            color: 'white',
          },
          'legend-marker': {
            visible: false,
          },

          'highlight-marker': {
            size: 6,
            'background-color': '#007790',
          },
        };
      }),
    });
  }, [selectedCrypto]);

  return (
    <div>
      <ZingChart data={data} />
    </div>
  );
};

export default MainChart;
