import React from 'react';
import { FaBook } from 'react-icons/fa';
import { FiZap } from 'react-icons/fi';
import { TbTargetArrow } from 'react-icons/tb';
import "animate.css";

const AboutSection = () => {
    return (
        <div className='w-9/12 mx-auto my-5'>
            <section className="py-16 px-6 bg-base-200">
                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-bold mb-4 animate__animated animate__fadeInDown">
                        About Our Book Library
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-8">
                        Welcome to our digital library where you can explore a wide collection
                        of books from different categories like Story, Tech, and Science.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-10">

                        <div className="p-6 bg-base-100 rounded-xl shadow animate__animated animate__zoomIn">
                            <h3 className="font-semibold text-xl mb-2 flex items-center gap-2 justify-center"><FaBook /> Wide Collection</h3>
                            <p className="text-sm text-gray-500">
                                Thousands of books from different genres available in one place.
                            </p>
                        </div>

                        <div className="p-6 bg-base-100 rounded-xl shadow animate__animated animate__zoomIn animate__delay-1s">
                            <h3 className="font-semibold text-xl mb-2 flex items-center gap-2 justify-center"><FiZap /> Fast Access</h3>
                            <p className="text-sm text-gray-500">
                                Easily search, filter, and find your favorite books quickly.
                            </p>
                        </div>

                        <div className="p-6 bg-base-100 rounded-xl shadow animate__animated animate__zoomIn animate__delay-2s">
                            <h3 className="font-semibold text-xl mb-2 flex items-center gap-2 justify-center"><TbTargetArrow /> User Friendly</h3>
                            <p className="text-sm text-gray-500">
                                Simple and clean interface for a smooth reading experience.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;