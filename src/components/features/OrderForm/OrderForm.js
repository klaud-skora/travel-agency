import React from 'react';
//import styles from './OrderForm.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';

const OrderForm = (props) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <OrderSummary tripCost={props.cost} options={props.options}/>
      </Col>
    </Row>
  </Grid>
);
OrderForm.propTypes = {
  cost: PropTypes.number,
  options: PropTypes.object,
};

export default OrderForm;
