import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className='min-h-screen bg-gradient-to-r from-black to-gray-900 text-white flex flex-col items-center justify-center p-8'>
            <h1 className='text-6xl font-bold mb-8'>Welcome to the Driver Analytics Dashboard</h1>
            <p className='text-xl mb-8 text-center max-w-2xl'>
                Explore detailed statistics and information about drivers, their vehicles, and earnings. 
                Our dashboard provides comprehensive insights through graphs, maps, and detailed data.
            </p>
            <div className='bg-gray-800 p-6 rounded-lg mb-8 max-w-lg'>
                <h2 className='text-2xl font-semibold mb-4'>Our Dashboard contains detailed analytics and to visit follow these steps:</h2>
                <ul className='list-decimal list-inside space-y-2'>
                    <li>Go to Select Country</li>
                    <li>Select either USA or IND</li>
                    <li>In dashboard you will be provided a list of all drivers</li>
                    <li>Click on any driver to view their detailed analytics</li>
                </ul>
            </div>
            <div className='flex space-x-4'>
                <button 
                    onClick={() => navigate('/inputselect')}
                    className='px-8 py-4 bg-green-500 text-white text-2xl rounded-lg hover:bg-green-700 transition duration-300'
                >
                    Select Country
                </button>
            </div>
        </div>
    );
};

export default Landing;
