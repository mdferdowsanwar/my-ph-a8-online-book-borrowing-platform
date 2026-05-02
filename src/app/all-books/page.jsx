"use client";

import { useState, useEffect } from "react";
import BookCard from "@/components/BookCard";

const AllBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch("https://my-ph-a8-online-book-borrowing-plat.vercel.app/data.json");
      const data = await res.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-9/12 mx-auto mb-5">
      <h2 className="text-3xl font-bold my-3">All Books</h2>

      <div className="p-3 bg-base-200 my-5 shadow-lg">
        <input
          type="text"
          placeholder="Search book here..."
          className="input input-bordered w-full md:w-[80%] my-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooksPage;