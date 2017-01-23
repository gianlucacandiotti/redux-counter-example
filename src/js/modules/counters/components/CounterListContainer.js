import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import CounterList from 'components/CounterList/CounterList';
import { getAll } from '../selectors';
import * as actions from '../actions';

const mapDispatchToProps = (dispatch) => ({
  onRemove: (id) => {
    dispatch(actions.remove(id));
  },
  onIncrement: (id) => {
    dispatch(actions.increment(id));
  },
  onDecrement: (id) => {
    dispatch(actions.decrement(id));
  },
});

export default connect(
  createStructuredSelector({
    counters: getAll
  }),
  mapDispatchToProps,
)(CounterList);
