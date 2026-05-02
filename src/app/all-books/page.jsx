import BookCard from '@/components/BookCard';

const AllBooksPage = async () => {

    const res = await fetch("https://my-ph-a8-online-book-borrowing-plat.vercel.app/data.json");
    const books = await res.json();

    return (
        <div className='w-9/12 mx-auto mb-5'>
            <h2 className='text-3xl font-bold my-3'>All Books</h2>
            <div className='grid grid-cols sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    books.map(book => <BookCard key={book.id} book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooksPage;