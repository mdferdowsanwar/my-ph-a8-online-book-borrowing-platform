import Image from 'next/image';
import React from 'react';
import { toast } from 'react-toastify';

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://my-ph-a8-online-book-borrowing-plat.vercel.app/data.json");
    const books = await res.json();
    const book = books.find(b => b.id == id);
    // const handleBookBorrow = () => {
    //     toast.success("Book borrowed successfully.");
    // }
    return (
        <div className='w-9/12 mx-auto my-5'>
            <h2 className='text-3xl font-semibold mb-5 text-center'>Book Details</h2>

            <div className='flex justify-between items-center gap-8 bg-base-200 shadow-md p-5 w-10/12 mx-auto rounded-lg'>
                <div>
                    <Image
                        src={book.image_url}
                        alt={book.title}
                        height={300}
                        width={300}
                        className='rounded-lg'
                    />
                </div>
                <div className='space-y-3'>
                    <h2 className='text-3xl font-semibold'>{book.title}</h2>
                    <p>Author: <span className='font-semibold'>{book.author}</span></p>
                    <div>
                        Category:
                        <p className={`ml-2 font-semibold badge px-5 
                    ${book.category === "Story" ? "badge-success"
                                : book.category == "Tech" ? "badge-info"
                                    : "badge-secondary"}`}>
                            {book.category}
                        </p>
                    </div>
                    <p>Available Quantity: <span className='font-semibold'>{book.available_quantity} copies left</span></p>
                    <p>{book.description}</p>
                    <button className='btn btn-neutral'>Borrow This Book</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;