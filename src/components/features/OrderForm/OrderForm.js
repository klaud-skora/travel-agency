import React from 'react';
//import styles from './OrderForm.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripName, tripId, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  options.name.length != 0 && options.contact.length != 0
    ?
    (
      fetch(url, fetchOptions)
        .then(function(response){
          return response.json();
        }).then(function(parsedResponse){
          console.log('parsedResponse', parsedResponse);
        })
    )
    :
    alert('Give us details to contact');
};

const OrderForm = (props) => (
  <Grid>
    <Row>
      {pricing.map(option =>
        <Col md={4} key={option.id}>
          <OrderOption {...option} currentValue={props.options[option.id]} setOrderOption={value => props.setOrderOption(value)}/>
        </Col>)}
      <Col xs={12}>
        <OrderSummary tripCost={props.tripCost} options={props.options}/>
      </Col>
      {console.log('joł', props.countryCode)}
      <Button onClick={() => sendOrder(props.options, props.tripCost, props.name, props.id, props.countryCode)}>Order now!</Button>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  countryCode: PropTypes.string,
};

export default OrderForm;
