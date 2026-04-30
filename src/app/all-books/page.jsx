import BookCard from '@/components/BookCard';
import React from 'react';

const AllBooksPage = async () => {
    const res = await fetch("https://my-ph-a8-online-book-borrowing-plat.vercel.app/data.json");
    const books = await res.json();
    return (
        <div className='w-9/12 mx-auto mb-5'>
            <h2 className='text-3xl font-bold my-3'>All Books</h2>
            <div className='grid grid-cols-4 gap-4'>
                {
                    books.map(book => <BookCard key={book.id} book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooksPage;