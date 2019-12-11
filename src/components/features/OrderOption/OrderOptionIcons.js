import React from 'react';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div
    className={styles.icon}
  >
    {required ? '' : (
      <div
        key='null'
        value=''
        onClick={event => setOptionValue(event(''))}
      >
        <Icon name='times-circle' />
        {'none'}
      </div>
    )}
    {values.map(value => (
      <div
        className={styles.icon}
        //className={styles.iconActive}
        key={value.id}
        value={currentValue}
        onClick={event => setOptionValue(event.currentTarget.id)}
      >
        <Icon name={value.icon} />
        {value.name}
        ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);
OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.node,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;
