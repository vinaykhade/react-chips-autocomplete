import React, { Component } from 'react';
import * as R from 'ramda'
import { isValidPanNumber, checkIfPropExistsInObject } from '../../utils';
import styles from './styles.scss';

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
	  		if(checkIfPropExistsInObject(this.state.inputError, 'userNameError')) {
  				this.setState({ inputError: R.omit(['userNameError'], this.state.inputError)});
  			}  	
	  		break;

	  	case 'userEmail' :
	  		this.props.updateUserEmail(inputValue)
	  		if(checkIfPropExistsInObject(this.state.inputError, 'userEmailError')) {
  				this.setState({ inputError: R.omit(['userEmailError'], this.state.inputError)});
  			}  	
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

	handleNextStep = () => {
		const { basicUserInfoVault : { userName, userEmail, userPanNo}, updateStep } = this.props;

		if(R.isEmpty(userName)) {
			const userNameError = 'Please Enter Your Name'
			this.setState({ inputError: { ...this.state.inputError, userNameError} });
		} else if(R.isEmpty(userEmail)) {
			const userEmailError = 'Please Enter Your Email'
			this.setState({ inputError: { ...this.state.inputError, userEmailError} });
		} else if(R.isEmpty(userEmail)) {
			const panError = 'Please Enter Your PAN'
			this.setState({ inputError: { ...this.state.inputError, panError} });
		} else if(R.isEmpty(this.state.inputError)) {
			this.props.updateStep('next');
		}
	}

	render() {
		const { basicUserInfoVault, updateStep } = this.props;
		const { inputError } = this.state;

		return(
			<div className="container">
				<h2 className={styles.title}>Basic Information</h2>
				<div className={`form-group ${styles.group}`}>
					<label className={styles.formLabel}>Name <span>*</span></label>
					<input 
						type="text"
						className={styles.formInput}
						name="userName"
						defaultValue={basicUserInfoVault.userName}
						placeholder="Enter Your Name"
						onChange={this.handleInputChange}
						required
					/>	
					<span className={styles.errorMsg}>{inputError.userNameError}</span>
				</div>	
				<div className={`form-group ${styles.group}`}>
					<label className={styles.formLabel}>Email <span>*</span></label>
					<input 
						type="email"
						className={styles.formInput}
						name="userEmail"
						defaultValue={basicUserInfoVault.userEmail}
						placeholder="Enter Your Email"
						onChange={this.handleInputChange}
						required
					/>
					<span className={styles.errorMsg}>{inputError.userEmailError}</span>	
				</div>	
				<div className={`form-group ${styles.group}`}>
					<label className={styles.formLabel}>Phone Number</label>
					<input 
						type="number"
						className={styles.formInput}
						name="userPhoneNum"
						defaultValue={basicUserInfoVault.userPhoneNum}
						maxLength="10"
						minLength="10"
						placeholder="Enter Your Phone Number"
						onChange={this.handleInputChange}
					/>	
				</div>	
				<div className={`form-group ${styles.group}`}>
					<label className={styles.formLabel}>Pan Number <span>*</span></label>
					<input 
						type="text"
						name="userPan"
						defaultValue={basicUserInfoVault.userPanNo}
						className={styles.formInput}
						placeholder="Enter Your PAN"
						onChange={this.handleInputChange}
						required
					/>	
					<span className={styles.errorMsg}>{inputError.panError}</span>
				</div>	
				<div className={`form-group ${styles.group}`}>
					<label className={styles.formLabel}>Company</label>
					<input 
						type="text"
						name="userCompany"
						defaultValue={basicUserInfoVault.userCompany}
						className={styles.formInput}
						placeholder="Enter Company Name"
						onChange={this.handleInputChange}
					/>	
				</div>	

				<div>
					<span className={styles.nextBtn} onClick={this.handleNextStep}>Save and Continue</span>
				</div>
			</div>

		)
	}
}


export default BasicInfoForm;

