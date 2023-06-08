import React from 'react';
import Header from '../component/Header';
import CircleImage from '../component/CircleImage';
import Stars from '../component/Stars';
import '../assets/stars.css';
import '../assets/username.css';
function HomePage() {
  return (
    <div className="HomePage">
        <Header/>
        <CircleImage/>
        <Stars starsName={'stars1'} />
        <Stars starsName={'stars2'} />
        <Stars starsName={'stars3'} />
    </div>
  );
}

export default HomePage;
