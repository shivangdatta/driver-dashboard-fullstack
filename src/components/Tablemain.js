import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

function Tablemain({ driverDetails, setRendercomponent }) {
  return (
    <table className='w-full overflow-hidden rounded-lg border border-white text-white'>
      <thead>
        <tr className='bg-gray-800'>
          <th className='py-4 px-6 text-left'>ID</th>
          <th className='py-4 px-6 text-left'>NAME</th>
          <th className='py-4 px-6 text-left'>AGE</th>
          <th className='py-4 px-6 text-center'>VIEW</th>
        </tr>
      </thead>
      <tbody>
        {driverDetails.map((singledriver, index) => (
          <tr key={singledriver.driver_id} className='border-b border-gray-700 hover:bg-gray-700 cursor-pointer' onClick={() => setRendercomponent(index)}>
            <td className='py-4 px-6'>{singledriver.driver_id}</td>
            <td className='py-4 px-6'>{singledriver.name}</td>
            <td className='py-4 px-6'>{singledriver.age}</td>
            <td className='py-4 px-6 flex items-center justify-center'><FaExternalLinkAlt /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tablemain;
