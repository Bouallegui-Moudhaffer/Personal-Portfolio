import React from 'react';
import styles from '../hobbies/HobbiesPage.module.css';

const Hobbies = () => {
  return (
    <>
      <h3>My Hobbies</h3>
      <div className={styles.container}>
        <div className={styles.anime}>
          <a href="/home#/anime">
            <img src="https://i.ibb.co/tMZ7xLH/5-best-anime-wallpapers-apps-for-android-in-2021-anime-buddie.jpg" alt="Anime" />
            <div className={styles.overlay}>
              <h4>Anime</h4>
              <p>Check out my favorite anime series !</p>
            </div>
          </a>
        </div>
        <div className={styles.gaming}>
          <a href="/home#/gaming">
            <img src="https://i.ibb.co/0KXgCk2/Streamingsetup-1735x1080-RGB.png" alt="gaming" border="0"/>
            <div className={styles.overlay}>
              <h4>Gaming</h4>
              <p>Check out my favorite games !</p>
            </div>
          </a>
        </div>

        <div className={styles.blogging}>
          <a href="/home#/articles">
            <img src="https://i.ibb.co/DMCWr2W/Starting-Phase.jpg" alt="Blogging" border="0"/>
            <div className={styles.overlay}>
              <h4>Blogging</h4>
              <p>Check out my articles!</p>
            </div>
          </a>
        </div>

      </div>
    </>
  );
};

export default Hobbies;
