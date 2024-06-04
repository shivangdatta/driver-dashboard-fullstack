import React from 'react';

const Statcard = ({ title, value , icon}) => {
  return (
    <div className="bg-black text-white p-6 rounded-lg shadow-lg m-2  border">
      <div className='flex justify-between'>
        <div>
            <div className="text-sm font-medium">{title}</div>
            <div className="text-3xl font-bold">{value}</div>
        </div>
        <div>{icon}</div>
      </div>
    </div>
  );
};

export default Statcard;
