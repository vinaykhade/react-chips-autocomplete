import React, { Component } from 'react';
import * as R from 'ramda'
import { isValidPanNumber, checkIfPropExistsInObject } from '../../utils';

class BasicInfoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputError: {}
		}
	}

	handleInputChange = (event) => {

	  const inputValue = event.target.value;

	  switch(event.target.name) {
	  	case 'userName' :
	  		this.props.updateUserName(inputValue)
	  		break;

	  	case 'userEmail' :
	  		this.props.updateUserEmail(inputValue)
	  		break;	

	  	case 'userPhoneNum' :
	  		this.props.updateUserPhone(inputValue)
	  		break;	

	  	case 'userPan' :
	  		if(isValidPanNumber(inputValue)) {
	  			this.props.updateUserPan(inputValue);
	  			if(checkIfPropExistsInObject(this.state.inputError, 'panError')) {
	  				this.setState({ inputError: R.omit(['panError'], this.state.inputError)});
	  			}  			
	  		} else {
	  			const panError = 'Please Enter Valid PAN'
	  			this.setState({ inputError: { ...this.state.inputError, panError} });
	  		}
	  		
	  		break;	
	  	case 'userCompany' :
	  		this.props.updateUserCompany(inputValue)
	  		break;		
	  }
	}

	render() {
		const { basicUserInfoVault } = this.props;
		const { inputError } = this.state;

		return(
			<form className="container">
				<div className="form-group">
					<label>Name</label>
					<input 
						type="text"
						className="form-control"
						name="userName"
						placeholder="Enter Your Name"
						onChange={this.handleInputChange}
					/>	
					<span className="input-error"></span>
				</div>	
				<div className="form-group">
					<label>Email</label>
					<input 
						type="email"
						name="userEmail"
						placeholder="Enter Your Email"
						onChange={this.handleInputChange}
					/>	
				</div>	
				<div className="form-group">
					<label>Phone Number</label>
					<input 
						type="number"
						name="userPhoneNum"
						maxLength="10"
						minLength="10"
						placeholder="Enter Your Phone Number"
						onChange={this.handleInputChange}
					/>	
				</div>	
				<div className="form-group">
					<label>Pan Number</label>
					<input 
						type="text"
						name="userPan"
						placeholder="Enter Your PAN"
						onChange={this.handleInputChange}
					/>	
					<span className="input-error">{inputError.panError}</span>
				</div>	

				<div className="form-group">
					<label>Company</label>
					<input 
						type="text"
						name="userCompany"
						placeholder="Enter Company Name"
						onChange={this.handleInputChange}
					/>	
				</div>	
			</form>

		)
	}
}


export default BasicInfoForm;

