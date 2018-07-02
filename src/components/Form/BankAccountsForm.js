import React, { Component } from 'react';
import * as R from 'ramda'
import { checkIfValidIFSC, checkIfPropExistsInObject } from '../../utils';


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
		this.setState({ account_num: '', ifsc_code:'', bank_name:'', holder_name:'', branch_name:'' });
	}

	render() {
		const { inputError, account_num, ifsc_code, bank_name, holder_name, branch_name } = this.state;
		return(
			<div>
				<form onSubmit={this.addBankRecord}>
					<div className="form-group">
						<label>Account Number</label>
						<input 
							name="account_num" 
							type="text" 
							defaultValue={account_num}
							onChange={this.handleInputChange} 
							required/>
						<span className="input-error"></span>
					</div>
					<div className="form-group">
						<label>IFSC Code</label>
						<input 
							name="ifsc_code" 
							type="text" 
							defaultValue={ifsc_code}
							onChange={this.handleInputChange} 
							required/>
						<span className="input-error">{inputError.ifscError}</span>
					</div>
					<div className="form-group">
						<label>Bank Name</label>
						<input 
							name="bank_name" 
							type="text" 
							defaultValue={bank_name}
							onChange={this.handleInputChange} 
							required/>
						<span className="input-error"></span>
					</div>
					<div className="form-group">
						<label>Branch Name</label>
						<input 
							name="branch_name" 
							type="text" 
							defaultValue={branch_name}
							onChange={this.handleInputChange} 
							required/>
						<span className="input-error"></span>
					</div>
					<div className="form-group">
						<label>Account Holder Name</label>
						<input 
							name="holder_name" 
							type="text" 
							defaultValue={holder_name}
							onChange={this.handleInputChange} 
							required/>
						<span className="input-error"></span>
					</div>
					<button type='submit'>Add</button>
				</form>
			</div>		
		)
	}
}

export default BankAccountsForm;