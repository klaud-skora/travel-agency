import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  static propTypes = {
    title: PropTypes.node,
  }

  getCountdownTime() {
    const currentTime = new Date();
    // Date.UTC - data podana -> rok, miesiąc, dzień -> ustawiam godzinę 12 = start happy hour dla utc
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    //if it is after 12:00 - beginning of happy hour
    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1); // change nextNoon
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000); // time countdown : ms -> s
  }

  render () {
    const {title} = this.props;
    return (
      <div>
        <h3 className={styles.title}>{title}</h3>
        {/*<div className={styles.countdown}></div>*/}
        <div className={styles.promoDescription}>{this.getCountdownTime()}</div>
      </div>
    );
  }
}

export default HappyHourAd;
