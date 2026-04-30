import React from 'react';
import Marquee from 'react-fast-marquee';

const NewArrival = () => {
    return (
        <div className='flex justify-between items-center gap-3 p-2 bg-gray-100 rounded-lg'>
            <button className='btn btn-sm btn-neutral'>New Arrival</button>
            <Marquee pauseOnHover={true}>
                Demo Book Name
            </Marquee>
        </div>
    );
};

export default NewArrival;