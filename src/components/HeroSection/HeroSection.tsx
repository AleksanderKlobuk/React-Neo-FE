import React from "react";
import '../../Styles/App.css';
import { Button } from '../Button/Button';
import '../../Styles/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Make Your Time Organized</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button type={undefined} onClick={undefined}
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button type={undefined} 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH YT VIDEO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;