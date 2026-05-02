import React from 'react';
import BookCard from './BookCard';

const TopBooks = async () => {
    const res = await fetch("https://my-ph-a8-online-book-borrowing-plat.vercel.app/data.json");
    const books = await res.json();
    const topBooksData = books.slice(0,4);
    //console.log(topBooksData);
    return (
        <div className='mb-5'>
            <h2 className='text-3xl font-bold my-3'>Featured Books</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    topBooksData.map(book => <BookCard key={book.id} book={book} />)
                }
            </div>
        </div>
    );
};

export default TopBooks;