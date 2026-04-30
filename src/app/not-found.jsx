import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col gap-5'>
            <h2 className='text-5xl font-semibold text-[#ffda79]'>This page is not found</h2>
            <Link href={"/"}>
                <button className='btn btn-neutral' >Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;