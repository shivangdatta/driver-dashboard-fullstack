import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputSelection = () => {
    const [country, setCountry] = useState('');
    const navigate = useNavigate();

    const handleSelect = (event) => {
        setCountry(event.target.value);
    };

    const handleSubmit = () => {
        if (country) {
            navigate(`/dashboard-${country.toLowerCase()}`);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-black text-white">
            <div className="bg-black border border-white  p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Select a Country</h2>
                <select 
                    value={country} 
                    onChange={handleSelect}
                    className="w-full p-2 mb-4 border border-white bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select</option>
                    <option value="usa">USA</option>
                    <option value="ind">IND</option>
                </select>
                <button 
                    onClick={handleSubmit} 
                    className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default InputSelection;
