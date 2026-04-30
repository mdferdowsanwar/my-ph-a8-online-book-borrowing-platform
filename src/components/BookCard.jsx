import Image from 'next/image';
import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl p-2">
                <figure className='relative w-full aspect-square'>
                    <Image
                        src={book.image_url}
                        fill={true}
                        alt={book.title}
                        className="object-cover rounded-lg"
                    />
                    <div className={`badge absolute right-2 bottom-2 
                    ${book.category === "Story" ? "badge-success"
                            : book.category == "Tech" ? "badge-info"
                                : "badge-secondary"}`}>
                        {book.category}
                    </div>
                </figure>
                <div>
                    <h2 className="text-xl font-semibold">{book.title}</h2>
                    <p className='text-sm'>{book.author}</p>
                    <button className="btn btn-sm btn-neutral w-full">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;