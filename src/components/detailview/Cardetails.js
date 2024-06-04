import React from 'react'

function Cardetails({ type, details }) {
  return (
    <div className='border-t'>
      <div className='text-sm font-medium mt-6'>
        Vehicle Details
      </div>

      <div className='mt-5 grid grid-cols-4'>
        <div className='border-r p-6'>
          <div className="text-sm font-medium">
            car type :
          </div>
          <div className="text-3xl font-bold">
            {type}
          </div>
        </div>
        <div className='col-span-2 border-r flex justify-between p-6'>
          <div>
            <div className="text-sm font-medium">
              car make :
            </div>
            <div className="text-3xl font-bold">
              {details.make}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium">
              car model :
            </div>
            <div className="text-3xl font-bold">
              {details.model}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium">
              car year :
            </div>
            <div className="text-3xl font-bold">
              {details.year}
            </div>
          </div>
        </div>
        <div className='p-6 flex justify-between'>
          <div>
            <div className="text-sm font-medium">
              car color :
            </div>
            <div className="text-3xl font-bold">
              {details.color}
            </div>
          </div>
          <div className='border border-grey-600 h-8 w-8' style={{ backgroundColor: details.color }}></div>
        </div>
      </div>
    </div>
  )
}

export default Cardetails
