import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  cost: state.trips.cost,
  options: getOrderOptions(state),

});
const mapDispatchToProps = dispatch => ({
  setOrderOption: (value) => dispatch(setOrderOption(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);

