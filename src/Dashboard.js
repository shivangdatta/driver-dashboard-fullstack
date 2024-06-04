import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt, FaDollarSign, FaArrowLeft } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { GiUsaFlag } from "react-icons/gi";
import { PiSteeringWheelDuotone } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import Statcard from './components/Statcard'; 
import Detailview from 'components/Detailview';
import Starterview from 'components/Starterview';
import './components/Loadinganimation.css';  

const Dashboard = ({ country }) => {
    const [driverDetails, setDriverDetails] = useState([]);
    const [rendercomponent, setRendercomponent] = useState(-1);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const rendering = () => {
        if (rendercomponent === -1) 
            return <Starterview driverDetails={driverDetails} setRendercomponent={setRendercomponent} />;
        else 
            return <Detailview singledetail={driverDetails[rendercomponent]} driverDetails={driverDetails} setRendercomponent={setRendercomponent} />;
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://driver-dash.onrender.com/dashboard-${country.toLowerCase()}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                setDriverDetails(data);
            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };

    const getTotalDrivers = () => driverDetails.length;

    const getAverageAge = () => {
        if (driverDetails.length === 0) return 0;
        let ageSum = driverDetails.reduce((sum, item) => sum + item.age, 0);
        return (ageSum / driverDetails.length).toFixed(2);
    };

    const getAverageIncome = () => {
        if (driverDetails.length === 0) return 0;
        let incomeSum = driverDetails.reduce((sum, item) => sum + item.average_earnings_per_month, 0);
        return (incomeSum / driverDetails.length).toFixed(2);
    };

    useEffect(() => {
        fetchData();
    }, [country]);

    return (
        <div>
            {loading ? (
                <div className='flex items-center justify-center min-h-screen bg-black'>
                    <div className='spinner'></div> 
                </div>
            ) : (
                <div className='relative min-h-dvh md:grid md:grid-cols-5 md:gap-4 bg-black'>
                    <button 
                        onClick={() => {
                            navigate('/inputselect')
                        }}
                        className='absolute top-4 left-4 bg-transparent text-white text-2xl'
                    >
                        <FaArrowLeft />
                    </button>
                    {rendering()}
                    <div className='relative w-full p-4 grid grid-cols-1 gap-4'>
                        <Statcard title="Country" value={country} icon={<GiUsaFlag className='font-white text-6xl'/>}/>
                        <Statcard title="Average Age" value={getAverageAge()} icon={<FaPerson className='font-white text-6xl'/>}/>
                        <Statcard title="Average Income" value={`$${getAverageIncome()}`} icon={<FaDollarSign className='font-white text-6xl'/>} />
                        <Statcard title="Total Drivers" value={getTotalDrivers()} icon={<PiSteeringWheelDuotone className='font-white text-6xl'/>} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
