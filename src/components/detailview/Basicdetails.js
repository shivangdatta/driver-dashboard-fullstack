import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

function Basicdetails({ name, id, age, income, driverDetails }) {
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
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="initial" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                dataKey="income"
                fill="#8884d8"
                isAnimationActive={false}
                shape={(props) => {
                    const { x, y, width, height, payload } = props;
                    const barColor = payload.name === name ? "#8884d8" : "#FFFFFF";
                    return (
                    <rect x={x} y={y} width={width} height={height} fill={barColor} stroke="#000000" />
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
