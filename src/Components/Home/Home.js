import React from 'react';
import HomeContents from './HomeContents';

const Home = ({setShowWAllet,showWAllet}) => {
    return (
        <div>
            <HomeContents setShowWAllet={setShowWAllet} showWAllet={showWAllet}></HomeContents>
        </div>
    );
};

export default Home;