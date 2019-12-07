import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

const OrderSummary = (props) => (
  <h2 className={styles.component}>
    {calculateTotal(formatPrice(props.tripCost),props.options)}

    {/*}
    {'Total:'}
    {props.tripCost}

    <strong>$12,345</strong>
*/}
  </h2>
);
OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
