import React, { Component } from 'react';
import * as R from 'ramda'
import { checkIfValidIFSC, checkIfPropExistsInObject } from '../../utils';
import styles from './styles.scss';

class BankAccountsForm extends Component {

	state = {
		account_num: '',
		ifsc_code: '',
		bank_name: '',
		branch_name: '',
		holder_name: '',
		inputError: {}
	}

	handleInputChange = (event) => {

	  const inputValue = event.target.value;

	  switch(event.target.name) {
	  	case 'account_num' :
	  		this.setState({ account_num: inputValue});
	  		break;

	  	case 'branch_name' :
	  		this.setState({ branch_name: inputValue});
	  		break;	

	  	case 'holder_name' :
	  		this.setState({ holder_name: inputValue});
	  		break;	

	  	case 'bank_name' :
	  		this.setState({ bank_name: inputValue});
	  		break;	

	  	case 'ifsc_code' :
	  		if(checkIfValidIFSC(inputValue)) {
	  			this.setState({ ifsc_code: inputValue});
	  			if(checkIfPropExistsInObject(this.state.inputError, 'ifscError')) {
	  				this.setState({ inputError: R.omit(['ifscError'], this.state.inputError)});
	  			}  			
	  		} else {
	  			const ifscError = 'Please Enter Valid IFSC'
	  			this.setState({ inputError: { ...this.state.inputError, ifscError} });
	  		}
	  		
	  		break;		
	  }
	}

	addBankRecord = (event) => {
		event.preventDefault();
		const { account_num, ifsc_code, bank_name, holder_name, branch_name } = this.state;
		const payload = {
			account_num, 
			ifsc_code, 
			bank_name, 
			holder_name,
			branch_name
		}
		this.props.addBankAccount(payload);
		this.props.clearError();
		this.setState({ account_num: '', ifsc_code:'', bank_name:'', holder_name:'', branch_name:'' });
	}

	render() {
		const { inputError, account_num, ifsc_code, bank_name, holder_name, branch_name } = this.state;
		const { previewError } = this.props;
		return(
			<div>
				<h2 className={styles.title}>Bank Account Details</h2>
				<form onSubmit={this.addBankRecord}>
					<div className={`form-group ${styles.group}`}>
						<label className={styles.formLabel}>Account Number <span>*</span></label>
						<input 
							name="account_num" 
							type="text" 
							className={styles.formInput}
							defaultValue={account_num}
							onChange={this.handleInputChange} 
							required/>
						<span className="input-error"></span>
					</div>
					<div className={`form-group ${styles.group}`}>
						<label className={styles.formLabel}>IFSC Code <span>*</span></label>
						<input 
							name="ifsc_code" 
							type="text" 
							className={styles.formInput}
							defaultValue={ifsc_code}
							onChange={this.handleInputChange} 
							required/>
						<span className="input-error">{inputError.ifscError}</span>
					</div>
					<div className={`form-group ${styles.group}`}>
						<label className={styles.formLabel}>Bank Name <span>*</span></label>
						<input 
							name="bank_name" 
							type="text" 
							className={styles.formInput}
							defaultValue={bank_name}
							onChange={this.handleInputChange} 
							required/>
						<span className="input-error"></span>
					</div>
					<div className={`form-group ${styles.group}`}>
						<label className={styles.formLabel}>Branch Name <span>*</span></label>
						<input 
							name="branch_name" 
							type="text" 
							className={styles.formInput}
							defaultValue={branch_name}
							onChange={this.handleInputChange} 
							required/>
						<span className="input-error"></span>
					</div>
					<div className={`form-group ${styles.group}`}>
						<label className={styles.formLabel}>Account Holder Name <span>*</span></label>
						<input 
							name="holder_name" 
							type="text" 
							className={styles.formInput}
							defaultValue={holder_name}
							onChange={this.handleInputChange} 
							required/>
						<span className="input-error"></span>
					</div>
					<button type='submit' className={styles.addBtn}>Add</button>
					<span className={styles.errorMsg}>{previewError}</span>
				</form>
			</div>		
		)
	}
}

export default BankAccountsForm;