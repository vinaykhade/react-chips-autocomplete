import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import * as R from 'ramda'
import UploadKycDoc from 'components/Form/UploadKycDoc';

class UserKycFrom extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { userKycVault: { profilePic, aadhar, pan, passport } } = this.props;

		return(
				<div>
					<UploadKycDoc 
						title='Upload Photo'
						doc={profilePic}
						uploadKycDocument={this.props.updateUserPhoto}
						uploadImageToCloudinary={this.props.uploadImageToCloudinary}
					/>
					<UploadKycDoc 
						title='Upload AADHAR Card'
						doc={aadhar}
						uploadKycDocument={this.props.updateAadharCard}
						uploadImageToCloudinary={this.props.uploadImageToCloudinary}
					/>
					<UploadKycDoc 
						title='Upload PAN Card'
						doc={pan}
						uploadKycDocument={this.props.updatePanCard}
						uploadImageToCloudinary={this.props.uploadImageToCloudinary}
					/>
					<UploadKycDoc 
						title='Upload Passport'
						doc={passport}
						uploadKycDocument={this.props.updatePassportCopy}
						uploadImageToCloudinary={this.props.uploadImageToCloudinary}
					/>
				</div>
			)
	}
}

export default UserKycFrom;