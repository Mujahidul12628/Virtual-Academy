
// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import './Instructor.css'

// const Instructor = () => {
//     const [instructors, setInstructors] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch('http://localhost:5700/campData')
//             .then((response) => response.json())
//             .then((data) => {
//                 setInstructors(data);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return (
//             <div className="spinner-container">
//                 <div className="spinner"></div>
//             </div>
//         );
//     }

//     return (
//         <div >
//             {instructors.map((instructor) => (
//                 <div key={instructor.id}>
//                     <img src={instructor.instructorImg} alt={instructor.instructorName} />
//                     <h3>{instructor.instructorName}</h3>
//                     <p>Email: {instructor.email}</p>
//                     <p>Number of Classes Taken: {instructor.takenClasses}</p>
//                     <Link to={`/instructor/${instructor?.id}`}>
//                         <button className='bg-cyan-500 px-4 py-2 text-white rounded'>See Class </button>
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Instructor;

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Instructor.css';

const Instructor = () => {
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

        <div className='max-w-7xl mx-auto'>
            <h1 className='text-cyan-500 text-center text-3xl font-bold my-3'>Instructor</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {instructors.map((instructor) => (
                    <div key={instructor.id} className="bg-white p-4 shadowAlll my-5 rounded">
                        <img className='rounded' src={instructor.instructorImg} alt={instructor.instructorName} />
                        <h3 className="text-lg font-semibold my-2">Instructor Name: {instructor.instructorName}</h3>
                        <p className="text-gray-600 my-2">Instructor Email: {instructor.email}</p>
                        <p className="text-gray-600 my-2">Number of Taken Class: {instructor.takenClasses}</p>
                        <Link to={`/instructor/${instructor?.id}`}>
                            <button className='bg-cyan-500 px-4 py-2 text-white rounded my-3'>See Class</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Instructor;

