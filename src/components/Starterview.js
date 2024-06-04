import React from 'react'
import Currentdate from 'components/Currentdate';
import Tablemain from 'components/Tablemain';

function Starterview({driverDetails , setRendercomponent  }) {
  return (
    <div className='col-span-4 bg-black sm:p-0 md:p-4 lg:p-12'>
        <div className='flex justify-between'>
            <h1 className='text-white font-verdana font-semibold text-5xl p-4'> 
                Dashboard
            </h1>
            <Currentdate/>
        </div>
            <div>
                <Tablemain driverDetails={driverDetails}  setRendercomponent={setRendercomponent}/>
            </div>  
    </div>            
  )
}

export default Starterview