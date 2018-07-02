import React, { Component } from 'react';
import * as R from 'ramda'
import styles from './Form/styles.scss';


class Preview extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showNotification: false
		}
	}

	calculateSubmissionScore = () => {
		const { basicUserInfoVault, userKycVault, bankAccountsVault, updateStep } = this.props;
		let score = 0;

		if(basicUserInfoVault.userName) {
			score ++
		}

		if(basicUserInfoVault.userEmail) {
			score ++
		}

		if(basicUserInfoVault.userPhoneNum) {
			score ++
		}

		if(basicUserInfoVault.userPanNo) {
			score ++
		}

		if(basicUserInfoVault.userCompany) {
			score ++
		}

		if(bankAccountsVault.length > 0) {
			score ++
		}

		if(userKycVault.profilePic) {
			score ++
		}

		if(userKycVault.aadhar) {
			score ++
		}

		if(userKycVault.pan) {
			score ++
		}

		if(userKycVault.passport) {
			score ++
		}
		return ((score/10) * 100).toFixed(0);

	}

	submitKycDetails = () => {
		const { basicUserInfoVault, userKycVault, bankAccountsVault, updateStep } = this.props;
		const profileCompletionPercentage = this.calculateSubmissionScore();
		this.setState({ showNotification: true, profileCompletionPercentage: profileCompletionPercentage });
		setTimeout(() => {
			this.setState({ showNotification: false });
		}, 10000)	
	}

	render() {
		const { basicUserInfoVault, userKycVault, bankAccountsVault, updateStep } = this.props;
		const { showNotification, profileCompletionPercentage } = this.state;
		return(
			<div className={`container ${styles.previewPage}`}>
				{
					showNotification && 
					<div className="alert alert-success">
					 <div>	
					  <strong>Success!</strong> Your KYC details have been submitted succesfully.
					  </div>
					  <div> 
					  	<strong>Profile Completed : {profileCompletionPercentage}%</strong>
					  </div>	

					</div>
				}
				
				<h2 className={styles.title}>Review and Submit KYC</h2>
				<div>
					<span className={styles.previousBtn} onClick={ () => updateStep('previous')}>Back</span>
					<span className={styles.nextBtn} onClick={this.submitKycDetails}>Submit</span>
				</div>
				<div className="row">
					<h3 className={styles.previewTitle}>Personal Information</h3>
					<div className="col-md-8">
						<div className={styles.accountDetails}>
							<label>Full Name</label>
							<span>{basicUserInfoVault.userName}</span>
						</div>

						<div className={styles.accountDetails}>
							<label>Email</label>
							<span>{basicUserInfoVault.userEmail}</span>
						</div>

						<div className={styles.accountDetails}>
							<label>Phone Number</label>
							<span>{basicUserInfoVault.userPhoneNum}</span>
						</div>

						<div className={styles.accountDetails}>
							<label>PAN</label>
							<span>{basicUserInfoVault.userPanNo}</span>
						</div>

						<div className={styles.accountDetails}>
							<label>Company</label>
							<span>{basicUserInfoVault.userCompany}</span>
						</div>
					</div>
				</div>
				<div className="row">
					<h3 className={styles.previewTitle}>Bank Details</h3>
					{
						!R.isEmpty(bankAccountsVault) && (
							<ul className={styles.previewBankRecord}>
								{
									bankAccountsVault.map((record, key) => {
										return(
											<li key={key} className="col-md-6">
												<div className={styles.bankDetails}>
													<div className={styles.accountDetails}>
														<label>IFSC CODE</label>
														<span>{record.ifsc_code}</span>
													</div>
													<div className={styles.accountDetails}>
														<label>BANK NAME</label>
														<span>{record.bank_name}</span>
													</div>
													<div className={styles.accountDetails}>
														<label>BRANCH NAME</label>
														<span>{record.branch_name}</span>
													</div>
													<div className={styles.accountDetails}>
														<label>ACCOUNT NUMBER</label>
														<span>{record.account_num}</span>
													</div>
													<div className={styles.accountDetails}>
														<label>ACCOUNT HOLDERS NAME</label>
														<span>{record.holder_name}</span>
													</div>
												</div>
											</li>		
										)
									})
								}
							</ul>
						)
					}
				</div>
				<div className="row">
					<h3 className={styles.previewTitle}>KYC Documents</h3>
					<div className='col-md-3'>
						<div className={styles.previewKycImage}>
						    <label className={styles.formLabel}>PHOTO</label>	
						    <img src={userKycVault.profilePic} />
					    </div>
				    </div> 
				    <div className='col-md-3'>
				    	<div className={styles.previewKycImage}>
						    <label className={styles.formLabel}>AADHAR CARD</label>	
						    <img src={userKycVault.aadhar} />
				   		 </div> 
				   	</div>	 
				    <div className='col-md-3'>
				    	<div className={styles.previewKycImage}>
						    <label className={styles.formLabel}>PAN CARD</label>	
						    <img src={userKycVault.pan} />
				    	</div> 
				    </div>	
				    <div className='col-md-3'>
				    	<div className={styles.previewKycImage}>
						    <label className={styles.formLabel}>PASSPORT</label>	
						    <img src={userKycVault.passport} />
				    	</div> 
				    </div>	
				</div>
			</div>
		)
	}
}

export default Preview;