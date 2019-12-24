import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';
import { formatTime } from '../../../utils/formatTime';

class HappyHourAd extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    promoDescription: PropTypes.string,
  }
  constructor(){
    super();
    /* run this.forceUpdate() every second */
    this.forceUpdate();
  }

  forceUpdate() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }

  // ile sekund do następnej promki
  getCountdownTime() {
    const currentTime = new Date();
    //console.log('lkjhgfd', currentTime);
    // Date.UTC - data podana -> rok, miesiąc, dzień -> ustawiam godzinę 12 = start happy hour dla utc
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    //if it is after 12:00 - beginning of happy hour
    if (currentTime.getUTCHours() >= 12) {
      nextNoon.setUTCDate(currentTime.getUTCDate()+1); // change nextNoon
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000); // time countdown : ms -> s
  }

  render () {
    const {title, promoDescription} = this.props;
    const countdown = this.getCountdownTime() / 3600;
    let announcement;
    if (countdown > 23) {
      announcement = promoDescription;
    } else {
      announcement = formatTime(this.getCountdownTime());
    }
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{announcement}</div>
      </div>
    );
  }
}

export default HappyHourAd;
