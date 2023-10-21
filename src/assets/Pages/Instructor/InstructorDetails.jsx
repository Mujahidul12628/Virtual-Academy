
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const InstructorDetails = () => {
    const { id } = useParams();
    const [instructorData, setInstructorData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5700/campData/${id}`)
            .then((res) => res.json())
            .then((data) => setInstructorData(data));
    }, [id]);

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-3xl text-center text-cyan-500 text-bold '>Instructor</h1>
            {instructorData ? (
                <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-cyan-500 w-full sm:w-10/12 md:w-4/5 mx-auto rounded my-5 bg-cyan-50 shadowAlll">
                    <div className='m-5' >
                        <img className='w-1/2 lg:w-2/3 mx-auto p-2  border-2 border-cyan-500 rounded shadowAlll' src={instructorData?.instructorImg} alt="Instructor" />
                        <h2 className='text-xl text-center font-bold text-cyan-500'>{instructorData?.instructorJob}</h2>
                        <div className='text-center'>
                            <h2>Instructor Name: {instructorData?.instructorName}</h2>
                            <p>Instructor Email: {instructorData?.email}</p>
                            <p>Total Taken Class: {instructorData?.takenClasses}</p>
                        </div>
                    </div>
                    <div className="class-image m-5">
                        <img className='w-1/2 lg:w-2/3 mx-auto p-2  border-2 border-cyan-500 rounded shadowAlll' src={instructorData?.classImg} alt="Instructor" />
                        <h2 className='text-xl text-center font-bold text-cyan-500'>{instructorData?.className}</h2>
                        <div className='text-center'>
                            <p>Instructor: {instructorData?.instructorName}</p>
                            <p>Available Seats: {instructorData?.availableSeats}</p>
                            <p>Price: ${instructorData?.price}</p>
                        </div>
                    </div>
                </div>

            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default InstructorDetails;

