"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname();
    const isActive = href === pathname;
    return (
        <Link className={`${isActive ? "text-[#ffda79] font-bold" : ""}`} href={href}>{children}</Link>
    );
};

export default NavLink;