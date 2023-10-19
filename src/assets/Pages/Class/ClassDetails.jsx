
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ClassDetails = () => {
    const { id } = useParams();
    const [classData, setClassData] = useState(null);

    useEffect(() => {
        fetch(`https://assignment-summer-camp-server.vercel.app/campData/${id}`)
            .then((res) => res.json())
            .then((data) => setClassData(data));
    }, [id]);

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-3xl text-center text-cyan-500 font-bold '>Class Information</h1>
            {classData ? (
                <div className="grid grid-cols-1 border-2 border-cyan-500 w-full sm:w-10/12 md:w-4/5 mx-auto rounded my-5 bg-cyan-50 shadowAlll">
                    <div className="class-image m-5">
                        <img className='w-1/2 lg:w-2/3 mx-auto p-2  border-2 border-cyan-500 rounded shadowAlll' src={classData?.classImg} alt="Instructor" />
                        <h2 className='text-xl text-center font-bold text-cyan-500'>{classData?.className}</h2>
                        <div className='text-center'>
                            <p>Instructor: {classData?.instructorName}</p>
                            <p>Available Seats: {classData?.availableSeats}</p>
                            <p>Price: ${classData?.price}</p>
                        </div>
                    </div>
                </div>

            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ClassDetails;

