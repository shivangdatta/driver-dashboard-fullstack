import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; // Assuming you're using react-icons for the calendar icon

const Currentdate = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="bg-black text-white p-2 rounded-lg flex items-center space-x-2">
      <FaCalendarAlt className="text-lg" />
      <span>{formattedDate}</span>
    </div>
  );
};

export default Currentdate;
