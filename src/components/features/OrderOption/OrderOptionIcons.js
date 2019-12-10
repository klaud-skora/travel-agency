import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, currentValue, setOptionValue}) => (
  <div
    className={styles.icon}
  >
    {values.map(value => (
      <div
        className={styles.icon}
        key={value.id}
        value={currentValue}
        onClick={event => setOptionValue(event.currentTarget.id)}
      >
        <Icon name={value.name} />
        {value.name}
      ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);
OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;
