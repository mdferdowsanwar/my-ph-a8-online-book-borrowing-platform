import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#ffda79] py-16 rounded-lg'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h1 className='text-2xl sm:text-5xl font-bold'>Find Your Next Read</h1>
                <button className='btn btn-neutral'>Browse Now</button>
            </div>
        </div>
    );
};

export default Banner;