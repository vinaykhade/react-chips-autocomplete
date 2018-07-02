import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import * as R from 'ramda'
import UploadKycDoc from 'components/Form/UploadKycDoc';
import { checkIfPropExistsInObject } from '../../utils';
import styles from './styles.scss';

class UserKycFrom extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputError: {}
		}
	}

	handleNextStep = () => {
		const { userKycVault: { profilePic, aadhar, pan, passport }, updateStep } = this.props;

		// if(R.isEmpty(profilePic)) {
		// 	const profilePicError = 'Please Upload Your Photo'
		// 	this.setState({ inputError: { ...this.state.inputError, profilePicError} });
		// } else if(R.isEmpty(aadhar)) {
		// 	const aadharError = 'Please Upload Your AADHAR photo'
		// 	this.setState({ inputError: { ...this.state.inputError, aadharError} });
		// } else if(R.isEmpty(pan)) {
		// 	const panError = 'Please Upload Your PAN photo'
		// 	this.setState({ inputError: { ...this.state.inputError, panError} });
		// } else if(R.isEmpty(passport)) {
		// 	const passportError = 'Upload Your Passport photo'
		// 	this.setState({ inputError: { ...this.state.inputError, passportError} });
		// } else if(R.isEmpty(this.state.inputError)) {
			this.props.updateStep('next');
		// }
	}

	handleInputErrors = (doc) => {
	  switch(doc) {
	  	case 'profilePic' :
	  		if(checkIfPropExistsInObject(this.state.inputError, 'profilePicError')) {
  				this.setState({ inputError: R.omit(['profilePicError'], this.state.inputError)});
  			}  	
	  		break;
	  	case 'aadhar' :
	  		if(checkIfPropExistsInObject(this.state.inputError, 'aadharError')) {
  				this.setState({ inputError: R.omit(['aadharError'], this.state.inputError)});
  			}  	
	  		break;
	  	case 'pan' :
	  		if(checkIfPropExistsInObject(this.state.inputError, 'panError')) {
  				this.setState({ inputError: R.omit(['panError'], this.state.inputError)});
  			}  	
	  		break;
	  	case 'passport' :
	  		if(checkIfPropExistsInObject(this.state.inputError, 'passportError')) {
  				this.setState({ inputError: R.omit(['passportError'], this.state.inputError)});
  			}  	
	  		break;			
	  }
	}

	render() {
		const { userKycVault: { profilePic, aadhar, pan, passport }, updateStep } = this.props;
		const { inputError } = this.state;
		return(
				<div className="container">
					<div className="row">
						<UploadKycDoc 
							title='Upload Photo'
							doc={profilePic}
							documentType='profilePic'
							inputError={checkIfPropExistsInObject(inputError, 'profilePicError') ? inputError.profilePicError : ''}
							uploadKycDocument={this.props.updateUserPhoto}
							uploadImageToCloudinary={this.props.uploadImageToCloudinary}
							handleInputErrors={this.handleInputErrors}
						/>
						<UploadKycDoc 
							title='Upload AADHAR Card'
							doc={aadhar}
							documentType='aadhar'
							inputError={checkIfPropExistsInObject(inputError, 'aadharError') ? inputError.aadharError : ''}
							uploadKycDocument={this.props.updateAadharCard}
							uploadImageToCloudinary={this.props.uploadImageToCloudinary}
							handleInputErrors={this.handleInputErrors}
						/>
						<UploadKycDoc 
							title='Upload PAN Card'
							doc={pan}
							documentType='pan'
							inputError={checkIfPropExistsInObject(inputError, 'panError') ? inputError.panError : ''}
							uploadKycDocument={this.props.updatePanCard}
							uploadImageToCloudinary={this.props.uploadImageToCloudinary}
							handleInputErrors={this.handleInputErrors}
						/>
						<UploadKycDoc 
							title='Upload Passport'
							doc={passport}
							documentType='passport'
							inputError={checkIfPropExistsInObject(inputError, 'passportError') ? inputError.passportError : ''}
							uploadKycDocument={this.props.updatePassportCopy}
							uploadImageToCloudinary={this.props.uploadImageToCloudinary}
							handleInputErrors={this.handleInputErrors}
						/>
					</div>
					<div>
					<span className={styles.previousBtn} onClick={ () => updateStep('previous')}>Previous</span>
					<span className={styles.nextBtn} onClick={this.handleNextStep}>Save and Continue</span>
				</div>
				</div>
			)
	}
}

export default UserKycFrom;