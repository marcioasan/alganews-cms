import { transparentize } from 'polished';
import { title } from 'process';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import NoData from '../NoData/NoData';
import Heading from '../Typography/Heading';

const options: Chart.ChartOptions = {
  maintainAspectRatio: true,
  elements: {
    line: {
      tension: 0
    }
  },
  legend: {
    display: true,
    position: 'bottom',
    align: 'center',
    labels: {
      usePointStyle: true
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: false,
        position: 'left',
        id: 'cashflow',
      },
    ],
  },
};

export interface ChartProps{
  data: Chart.ChartData
  title: string
}

export default function Chart({ data, title }: ChartProps) {
  return <ChartWrapper style={{ width: 640 }}>
    <div style={{ marginBottom: 16 }}>
      <Heading level={3}>
        {title}
      </Heading>
    </div>
    {
      data
      ?
      <Line 
        type="line"
        height={139}
        width={600}
        data={data}
        options={options}
      />
      : <NoData height={139}/>
    }
  </ChartWrapper>//4.39. Propificando o componente de Chart
}

const ChartWrapper = styled.div`
  text-align: center;
  border: 1px solid ${transparentize(0.9, '#274060')};
  padding: 20px;
`