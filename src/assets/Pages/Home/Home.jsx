import React from 'react';
import Class from '../Class/Class';
import Banner from './Banner';
import Instructor from '../Instructor/Instructor';
import ClassData from '../Class/ClassData';
import Payment from '../Payment/Payment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ClassData></ClassData>
            <Instructor></Instructor>
            <Payment></Payment>

        </div>
    );
};

export default Home;