import React from 'react';

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://my-ph-a8-online-book-borrowing-plat.vercel.app/data.json");
    const books = await res.json();
    const book = books.find(b => b.id == id);
    return (
        <div>
            Book Details Page
            <p>{book.title}</p>
            <p>{book.author}</p>
        </div>
    );
};

export default BookDetailsPage;