import { connect } from 'react-redux'
import Button from 'components/Button/Button';
import * as actions from '../actions';

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(actions.add());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Button);
