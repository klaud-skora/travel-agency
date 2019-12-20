import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  static propTypes = {
    title: PropTypes.node,
  }

  render () {
    const {title} = this.props;
    return (
      <div>
        <h3 className={styles.title}>{title}</h3>
        {/*<div className={styles.countdown}>3, 2, 1 ... !</div>*/}
        <div className={styles.promoDescription}>It is your time !</div>
      </div>
    );
  }
}

export default HappyHourAd;
