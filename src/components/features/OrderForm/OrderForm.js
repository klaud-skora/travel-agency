import React from 'react';
//import styles from './OrderForm.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';

const OrderForm = (props) => (
  <Grid>
    <Row>
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
};

export default OrderForm;
