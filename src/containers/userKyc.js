import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserKycForm from '../components/Form/UserKycForm';
import * as UserKycActions from '../actions/userKycActions';

function mapStateToProps(state, ownProps) {
  const {
    userKycVault,
  } = state;
  
  return {
    userKycVault
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, UserKycActions),
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserKycForm);