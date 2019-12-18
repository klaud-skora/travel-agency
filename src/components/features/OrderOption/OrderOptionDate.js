import React from 'react';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';

class OrderOptionDate extends React.Component {
  static propTypes = {
    setOptionValue: PropTypes.func,
  }
  state = {
    startDate: new Date(),
  };

  handleChange = date => {
    this.props.setOptionValue(date),
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <DatePicker
        className={styles.date}
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default OrderOptionDate;
