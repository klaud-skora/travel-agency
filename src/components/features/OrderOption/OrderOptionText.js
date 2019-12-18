import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({currentValue, setOptionValue}) => (
  <div className={styles.text}>
    <input
      type='text'
      className={styles.text}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      required
    ></input>
  </div>
);
OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};



export default OrderOptionText;
