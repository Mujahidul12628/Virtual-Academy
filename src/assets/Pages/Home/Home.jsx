import React from 'react';
import Class from '../Class/Class';
import Banner from './Banner';
import Instructor from '../Instructor/Instructor';
import ClassData from '../Class/ClassData';
import SideViewClass from '../Class/SideViewClass';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Class></Class>
            <Instructor></Instructor>
            <ClassData></ClassData>
            <SideViewClass></SideViewClass>
        </div>
    );
};

export default Home;