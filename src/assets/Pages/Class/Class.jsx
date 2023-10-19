
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const Class = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://assignment-summer-camp-server.vercel.app/campData')
            .then((response) => response.json())
            .then((data) => {
                setInstructors(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner"></div>
            </div>
        );
    }

    return (

        <div className='mx-auto max-w-7xl'>
            <h1 className='my-3 text-3xl font-bold text-center text-cyan-500 '>Class</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
                {instructors.map((instructor) => (
                    <div key={instructor.id} className="p-4 my-5 rounded bg-cyan-50 shadowAlll">
                        <img className='rounded' src={instructor.classImg} alt={instructor.className} />
                        <h3 className="my-2 text-lg font-semibold"> {instructor.className}</h3>
                        <p className="my-2 text-gray-600">Instructor Name: {instructor.instructorName}</p>
                        <p className="my-2 text-gray-600">Available Seat: {instructor.availableSeats}</p>
                        <p className="my-2 text-gray-600">Total Price: {instructor.price}</p>
                        <Link to={`/class/${instructor?.id}`}>
                            <button className='px-4 py-2 my-3 text-white rounded bg-cyan-500'>Select</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Class;

