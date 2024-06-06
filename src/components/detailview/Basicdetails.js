import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function Basicdetails({ name, id, age, income, driverDetails }) {
  // State to track hovered bar
  const [activeIndex, setActiveIndex] = useState(-1);

  if (!driverDetails) {
    return <div>Loading...</div>; // Fallback UI
  }

  // Prepare data for the bar chart
  const data = driverDetails.map(driver => ({
    name: driver.name,
    initial: driver.name.charAt(0),
    income: driver.average_earnings_per_month,
  }));

  // Calculate total income pan-country
  const totalIncome = data.reduce((acc, driver) => acc + driver.income, 0);

  // Custom tooltip content
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip rounded-lg bg-white text-black p-3">
          <p>{`Name: ${payload[0].payload.name}`}</p>
          <p>{`Income: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div className='text-sm font-medium mt-6'>
        Driver details
      </div>
      <div className='grid grid-cols-4'>
        <div className="bg-black text-white p-6 shadow-lg m-2 border-r">
          <div>
            <div className="text-sm font-medium">
              {id}
            </div>
            <div className="text-3xl font-bold">
              {name}
            </div>
          </div>
        </div>
        <div className='shadow-lg m-2 border-r p-6'>
          <div className='text-sim font-medium'>
            age:
          </div>
          <div className='text-3xl font-bold'>
            {age}
          </div>
        </div>
        <div className='shadow-lg m-2 border-r p-6'>
          <div className='text-sim font-medium'>
            income:
          </div>
          <div className='text-3xl font-bold'>
            {income}
          </div>
        </div>
        <div className='shadow-lg m-2 p-6'>
          <div className='text-sim font-medium'>
            Income Pan Country:
          </div>
          <div className='text-3xl font-bold'>
            {totalIncome}
          </div>
        </div>
        <div className='col-span-4 p-6'>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart 
              data={data} 
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              onMouseMove={(e) => {
                if (e.isTooltipActive) {
                  setActiveIndex(e.activeTooltipIndex);
                } else {
                  setActiveIndex(-1);
                }
              }}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="initial" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey="income"
                fill="#8884d8"
                isAnimationActive={false}
                shape={(props) => {
                  const { x, y, width, height, payload, index } = props;
                  const isCurrentDriver = payload.name === name;
                  const barColor = isCurrentDriver ? "#8884d8" : (index === activeIndex ? "#DA70D6" : "#FFFFFF");
                  const strokeColor = isCurrentDriver ? "#000000" : (index === activeIndex ? "#DA70D6" : "#000000");
                  return (
                    <rect x={x} y={y} width={width} height={height} fill={barColor} stroke={strokeColor} />
                  );
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Basicdetails;
