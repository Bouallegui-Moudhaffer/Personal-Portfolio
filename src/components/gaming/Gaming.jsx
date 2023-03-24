import React from 'react';
import './Gaming.module.css';
import video from '../../assests/images/kdaVid.mp4'

function VideoBackground() {
  return (
    <div className="video-view">
      <video className='video' autoPlay loop style={{ width: "100%", height: "100%" }}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoBackground;
