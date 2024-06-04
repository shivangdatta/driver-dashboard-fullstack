import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Basicdetails from './detailview/Basicdetails';
import Cardetails from './detailview/Cardetails';
import Location from './detailview/Location';

function Detailview({ singledetail, driverDetails , setRendercomponent }) {
    

    if (!singledetail) {
        return <div>Loading...</div>; // Fallback UI
    }

    const handleBackClick = () => {
        setRendercomponent(-1);
    };

    return (
        <div className='relative col-span-4 bg-black sm:p-0 md:p-4 lg:p-12 text-white'>
            <button 
                onClick={handleBackClick} 
                className='absolute top-4 left-4 bg-gray-700  hover:bg-gray-600 text-white font-bold py-2 px-4 rounded'>
                <FaArrowLeft className="inline-block " /> 
            </button>
            <Basicdetails 
                name={singledetail.name} 
                id={singledetail.driver_id} 
                age={singledetail.age} 
                income={singledetail.average_earnings_per_month} 
                driverDetails={driverDetails} 
            />
            <Cardetails 
                type={singledetail.car_type} 
                details={singledetail.cab_details}
            />
            <Location 
                loc={singledetail.location} 
                address={singledetail.address}
            />
        </div>
    );
}

export default Detailview;
