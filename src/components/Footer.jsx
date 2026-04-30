import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { TiSocialTwitter } from 'react-icons/ti';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-zinc-500 py-5'>
            <div className='w-9/12 m-auto space-y-5'>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-5'>
                    <div className='space-y-2 flex-1'>
                        <p className='text-xl text-white'>Social Links</p>
                        <ul className='flex text-black items-center gap-4'>
                            <li className='bg-white rounded-full w-7 h-7 flex justify-center items-center hover:text-[#ffda79] hover:bg-transparent'><a href=""><FaLinkedin /></a></li>
                            <li className='bg-white rounded-full w-7 h-7 flex justify-center items-center hover:text-[#ffda79] hover:bg-transparent'><a href=""><FaFacebookSquare /></a></li>
                            <li className='bg-white rounded-full w-7 h-7 flex justify-center items-center hover:text-[#ffda79] hover:bg-transparent'><a href=""><TiSocialTwitter /></a></li>
                        </ul>
                    </div>

                    <ul className='flex gap-2 justify-center items-center flex-col'>
                        <li className='hover:text-[#ffda79]'><a href="">Contact US</a></li>
                        <li className='hover:text-[#ffda79]'><a href="">Privacy Policy</a></li>
                        <li className='hover:text-[#ffda79]'><a href="">Terms & Condition</a></li>
                    </ul>
                </div>
                <hr className='mt-10' />
                <div className='text-center'>
                    <p>
                        © 2026 Online<span className='text-[#ffda79] font-bold'>BookBorrowing</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;