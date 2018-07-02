import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BankAccounts from '../components/BankAccountsRecord';
import * as BankAccountActions from '../actions/bankAccountActions';

function mapStateToProps(state, ownProps) {
  const {
    bankAccountsVault,
  } = state;
  
  return {
    bankAccountsVault
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, BankAccountActions),
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BankAccounts);