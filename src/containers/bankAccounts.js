import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BankAccounts from '../components/Form/BankAccountsForm';
import * as BankAccountActions from '../actions/bankAccountActions';

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
    Object.assign({}, BankAccountActions),
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BankAccounts);