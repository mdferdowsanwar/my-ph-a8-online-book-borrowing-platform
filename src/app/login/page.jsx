"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    
    const handleLoginFunc = async (data) => {
        const {email, password} = data;
        const { data:res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
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
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input
                            {...register("password", { required: "Password field is required" })}
                            type="password" className="input w-full"
                            placeholder="Type your password"
                        />
                        <p>{watch("password")}</p>
                        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn btn-neutral w-full mt-3">Login</button>
                </form>

                <p className="text-center mt-3">Don't have an account? <Link href={"/register"}><span className="font-semibold text-[#ffda79]">Register.</span></Link> </p>
            </div>
        </div>
    );
};

export default LoginPage;