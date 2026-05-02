"use client"
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const RegisterPage = () => {

    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleRegisterFunc = async (data) => {
        const { name, email, image_url, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: image_url,
        });

        //console.log(res, error);
        if (error) {
            toast.error(error.message);
        }
        if (res) {
            await authClient.signOut();
            toast.success("Registration successful. Please login");
            router.push("/login");
        }
    }



    return (
        <div className="w-9/12 mx-auto my-10">
            <div className="bg-base-200 p-5 rounded-lg w-5/12 mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-5">Register your account</h2>
                <hr className="my-3 text-gray-400" />
                <form onSubmit={handleSubmit(handleRegisterFunc)} className="space-y-2">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text"
                            className="input w-full"
                            placeholder="Type your name"
                            {...register("name", { required: "Name field is required" })}
                        />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email"
                            className="input w-full"
                            placeholder="Type your email"
                            {...register("email", { required: "Email field is required" })}
                        />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Image URL</legend>
                        <input type="text"
                            className="input w-full"
                            placeholder="Type your image url"
                            {...register("image_url", { required: "Image Url field is required" })}
                        />
                        {errors.image_url && <p className='text-red-600'>{errors.image_url.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            className="input w-full"
                            placeholder="Type your password"
                            {...register("password", { required: "Password field is required" })}
                        />
                        <span onClick={() => setIsShowPassword(!isShowPassword)} className="text-lg absolute cursor-pointer right-2 top-4 text-gray-600">
                            {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn btn-neutral w-full mt-3">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;