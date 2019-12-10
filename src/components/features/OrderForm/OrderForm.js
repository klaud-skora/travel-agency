import React from 'react';
//import styles from './OrderForm.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = (props) => (
  <Grid>
    <Row>
      {pricing.map(option =>
        <Col md={4} key={option.id}>
          <OrderOption {...option} currentValue={props.options[option.id]} setOrderOption={props.setOrderOption}/>
        </Col>)}
      <Col xs={12}>
        <OrderSummary tripCost={props.tripCost} options={props.options}/>
        {console.log('prps', props.tripCost)}
      </Col>
    </Row>
  </Grid>
);
OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
