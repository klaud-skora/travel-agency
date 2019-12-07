import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions } from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  cost: state.trips.cost,
  options: getOrderOptions(state),
});


export default connect(mapStateToProps)(OrderForm);

