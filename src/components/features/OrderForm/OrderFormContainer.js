import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';

const mapStateToProps = state => ({
  cost: state.trips.cost,
  options: getOrderOptions(state),

});
const mapDispatchToProps = dispatch => ({
  setOrderOption: () => dispatch(setOrderOption()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);

