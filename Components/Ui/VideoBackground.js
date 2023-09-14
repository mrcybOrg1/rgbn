import React from 'react';
import VIDEOS from '../../public/video/index'
import styles from '../../app/Style/VideoBackground.module.css'



const VideoBackground = () => {
  return (
    <div className={styles.videobackground}>
      <video autoPlay muted loop className={styles.video}>
        <source src={VIDEOS.heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
