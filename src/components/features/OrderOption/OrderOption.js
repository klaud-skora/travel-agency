import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOption = (props) => (
  <div className={styles.component}>
    <h3 className={styles.title}>
      {props.title}
    </h3>
  </div>
);
OrderOption.propTypes = {
  title: PropTypes.node,
};

export default OrderOption;
