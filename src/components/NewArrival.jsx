import React from 'react';
import Marquee from 'react-fast-marquee';

const NewArrival = async () => {
    const res = await fetch("https://my-ph-a8-online-book-borrowing-plat.vercel.app/data.json");
    const books = await res.json();
    const topBooksData = books.slice(0,4);

    return (
        <div className='flex justify-between items-center gap-3 p-2 bg-gray-100 rounded-lg'>
            <button className='btn btn-sm btn-neutral'>New Arrival</button>
            <Marquee pauseOnHover={true}>
                {
                    topBooksData.map(book => <p className='mr-20 font-semibold' key={book.id}>{book.title}</p>)
                }
            </Marquee>
        </div>
    );
};

export default NewArrival;