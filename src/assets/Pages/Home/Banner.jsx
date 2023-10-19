import React, { useContext } from 'react';
import banner1 from '../../images/a1.jpg'
import banner2 from '../../images/b.jpg'
import banner3 from '../../images/f.jpg'
import banner4 from '../../images/a.jpg'
import Search from './Search';


const Banner = () => {

    return (

        <div className='grid grid-cols- md:grid-cols-2 max-w-7xl mx-auto bg-cyan-100 shadowAll '>
            <div className="flex flex-col items-center justify-center">
                <div className="p-1 w-3/4 mx-auto">
                    <h1 className="text-2xl text-cyan-500 font-bold my-2">Elevate Your Game, Excel with Excellence</h1>
                    <h1 className="text-lg font-semibold text-cyan-500 my-3">Join Our Elite Sports Summer Camp</h1>
                    <p className="text-justify">Experience the Thrill of a Lifetime at Our Premier Sports Summer Camp! Unleash your potential, make lifelong friends, and create unforgettable memories.</p>

                    <div className='mt-5'>
                        <Search></Search>
                    </div>

                    <button className="bg-cyan-500 max-w-md px-2 py-1 rounded text-white my-5 " type="submit">Enroll Now</button>
                </div>
            </div>
            <div className="grid grid-cols-2 mx-auto gap-2 border-2 border-cyan-200 my-1 p-2 w-5/6 rounded-lg shadowAll">
                <div className="transform transition-transform duration-500 hover:scale-105">
                    <img className=' rounded-lg' src={banner4} alt="Photo 3" />
                </div>
                <div className="transform transition-transform duration-500 hover:scale-105">
                    <img className=' rounded-lg' src={banner3} alt="Photo 4" />
                </div>
                <div className="transform transition-transform duration-500 hover:scale-105">
                    <img className=' rounded-lg' src={banner2} alt="Photo 2" />
                </div>
                <div className="transform transition-transform duration-500 hover:scale-105 ">
                    <img className=' rounded-lg shadowAll' src={banner1} alt="Photo 1" />
                </div>
            </div>

        </div>


    );
};

export default Banner;