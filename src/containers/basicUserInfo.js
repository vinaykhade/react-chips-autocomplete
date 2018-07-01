import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BasicInfoForm from '../components/Form/BasicInfoForm';
import * as UserInfoActions from '../actions/basicUserInfoActions';

function mapStateToProps(state, ownProps) {
  const {
    basicUserInfoVault,
  } = state;
  
  return {
    basicUserInfoVault
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, UserInfoActions),
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicInfoForm);