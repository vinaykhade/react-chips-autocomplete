import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Preview from '../components/Preview';

function mapStateToProps(state, ownProps) {
  const {
    basicUserInfoVault,
    userKycVault,
    bankAccountsVault
  } = state;
  
  return {
    basicUserInfoVault,
    userKycVault,
    bankAccountsVault
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, null),
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);