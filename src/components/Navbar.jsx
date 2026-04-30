import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='shadow mb-3'>
            <div className='w-9/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-3 py-3'>
                <Link href={"/"} className='text-xl font-semibold'>Online<span className='text-[#ffda79] font-bold'>BookBorrowing</span></Link>
                <ul className='flex justify-between items-center gap-3'>
                    <li>
                        <NavLink href={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink href={"/all-books"}>All Books</NavLink>
                    </li>
                    <li>
                        <NavLink href={"/my-profile"}>My Profile</NavLink>
                    </li>
                </ul>
                <div>
                    <button className='btn btn-neutral btn-sm'>
                        <Link href={"/login"}>Login</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;