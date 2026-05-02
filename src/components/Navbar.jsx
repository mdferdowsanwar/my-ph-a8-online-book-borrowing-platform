"use client"
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import { authClient } from "@/lib/auth-client"
import { toast } from 'react-toastify';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Avatar } from '@heroui/react';

const Navbar = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;

    const router = useRouter();

    const handleLogout = async () => {
        const { error } = await authClient.signOut();
        if (error) return toast.error("Logout Failed.");
        router.push("/login");
        toast.success("Successfully Logout");
    }



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
                    <li>
                        <NavLink href={"/about"}>About US</NavLink>
                    </li>
                </ul>

                {/* <span className="loading loading-spinner text-warning"></span> */}

                {user && <div className='flex items-center gap-2'>
                    <h3>Hello, <span className='font-semibold'>{user.name}</span></h3>
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <Avatar>
                                <Avatar.Image
                                    src={user?.image}
                                    referrerPolicy="no-referrer"
                                    alt='Profile Avatar'
                                />
                                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                            </Avatar>
                        </div>
                    </div>
                    <button onClick={handleLogout} className='btn btn-neutral btn-sm'>
                        Logout
                    </button>
                </div>}

                {!user && <button className='btn btn-neutral btn-sm'>
                    <Link href={"/login"}>Login</Link>
                </button>
                }

            </div>
        </div>
    );
};

export default Navbar;