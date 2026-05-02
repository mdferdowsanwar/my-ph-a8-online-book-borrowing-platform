"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLoginFunc = async (data) => {
        const { email, password } = data;
        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        });
        if (error) {
            toast.error(error.message || "Login Failed");
        }
        if (res) {
            toast.success("You have successfully logged in.");
        }
    }

    const handleGoogleLogin = async () => {
        toast.loading("Redirecting to google...");
        await authClient.signIn.social({
            provider: "google",
        });
    }



    return (
        <div className="w-9/12 mx-auto my-10">
            <div className="bg-base-200 p-5 rounded-lg w-5/12 mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-5">Login your account</h2>
                <hr className="my-3 text-gray-400" />

                <form className="space-y-2" onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input {...register("email", { required: "Email field is required" })}
                            type="email" className="input w-full"
                            placeholder="Type your email"
                        />
                        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            {...register("password", { required: "Password field is required" })}
                            placeholder="Type your password"
                            type={isShowPassword ? "text" : "password"} className="input w-full"
                        />
                        <span onClick={() => setIsShowPassword(!isShowPassword)} className="text-lg absolute cursor-pointer right-2 top-4 text-gray-600">
                            {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn btn-neutral w-full mt-3">Login</button>
                </form>

                <p className="text-center mt-3">Don't have an account? <Link href={"/register"}><span className="font-semibold text-[#ffda79]">Register.</span></Link> </p>
                <p className="text-center my-2">OR</p>
                <div className="flex items-center justify-center">
                    <button className="btn btn-neutral w-full" onClick={handleGoogleLogin}>
                        <FaGoogle />
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;