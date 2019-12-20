import React from 'react';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {
  render () {
    return (
      <div>
        <h3 className={styles.title}>Title</h3>
        {/*<div className={styles.countdown}>3, 2, 1 ... !</div>*/}
        <div className={styles.promoDescription}>It is your time !</div>
      </div>
    );
  }
}

export default HappyHourAd;
