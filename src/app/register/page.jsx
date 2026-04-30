import React from 'react';

const RegisterPage = () => {
    return (
        <div className="w-9/12 mx-auto my-10">
            <div className="bg-base-200 p-5 rounded-lg w-5/12 mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-5">Register your account</h2>
                <hr className="my-3 text-gray-400" />
                <form className="space-y-2">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" className="input w-full" placeholder="Type your name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input w-full" placeholder="Type your email" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Image URL</legend>
                        <input type="text" className="input w-full" placeholder="Type your image url" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" className="input w-full" placeholder="Type your password" />
                    </fieldset>
                    <button className="btn btn-neutral w-full mt-3">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;