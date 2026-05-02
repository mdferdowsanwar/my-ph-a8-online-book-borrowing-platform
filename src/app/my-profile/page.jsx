"use client"

import { UpdateProfileModal } from '@/components/UpdateProfileModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const MyProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData.data?.user;
    //console.log(user);

    return (
        <div className='w-9/12 mx-auto'>
            <Card className='max-w-96 mx-auto flex flex-col items-center my-8'>
                <Avatar className='h-24 w-24'>
                    <Avatar.Image
                        src={user?.image}
                        referrerPolicy="no-referrer"
                        alt='Profile Avatar'
                    />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <h3 className='text-2xl font-semibold'>{user?.name}</h3>
                <h4 className='text-lg'>{user?.email}</h4>
                <UpdateProfileModal />
            </Card>
        </div>
    );
};

export default MyProfilePage;