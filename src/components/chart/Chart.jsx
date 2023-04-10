import React from 'react'
import './chart.scss'
// react-vis, nivo.rocks recharts react chart js 2
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Tilt from 'react-parallax-tilt';
const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];
const Chart = ({ height, title }) => {
  return (
    <Tilt className='chart' scale={.9}>
      <div className="title" style={{ fontWeight: "bold" }}>{title}</div>
      {/*aspect:(2/1) means half of the width that is 50%*/}
      <AreaChart width={730} height={height} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00563B" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#00563B" stopOpacity={0} />
          </linearGradient>
          {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient> */}
        </defs>
        <XAxis dataKey="name" stroke='gray' />
        {/* <YAxis /> */}
        <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
        <Tooltip />
        <Area type="monotone" dataKey="Total" stroke="#00563B" fillOpacity={1} fill="url(#total)" />
        {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
      </AreaChart>

    </Tilt>
  )
}

export default Chart