import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='shadow mb-3'>
            <div className='w-9/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-3 py-3'>
                <Link href={"/"} className='text-xl font-semibold'>Online<span className='text-[#ffda79] font-bold'>BookBorrowing</span></Link>
                <ul className='flex justify-between items-center gap-3 font-semibold'>
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/all-books"}>All Books</Link>
                    </li>
                    <li>
                        <Link href={"/my-profile"}>My Profile</Link>
                    </li>
                </ul>
                <div>
                    <button className='btn btn-neutral btn-sm mr-2'>
                        <Link href={"/login"}>Login</Link>
                    </button>

                    <button className='btn btn-neutral btn-sm'>
                        <Link href={"/register"}>Register</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;