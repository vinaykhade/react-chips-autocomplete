import React, { Component } from 'react';
import BankAccountsForm from './Form/BankAccountsForm';
import * as R from 'ramda'
import styles from './Form/styles.scss';


class BankAccountsRecord extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputError: ''
		}
	}

	deleteBankRecord = (account_num) => {
		this.props.updateBankRecords(account_num);
	}

	handleNextStep = () => {
		const { bankAccountsVault, updateStep } = this.props;
		// if(R.isEmpty(bankAccountsVault)) {
		// 	this.setState({ inputError: 'Please Add Atleast One Bank Account Details'});
		// } else if(R.isEmpty(this.state.inputError)) {
			this.props.updateStep('next');
		// }
	}

	clearError = () => {
		this.setState({ inputError: ''});
	}

	render() {
		const { bankAccountsVault, updateStep } = this.props;
		const { inputError } = this.state;
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<BankAccountsForm 
							{...this.props} 
							previewError={inputError}
							clearError={this.clearError}
						/>
					</div>
					<div className={`col-md-6 ${styles.bankAccounts}`}>
						<label className={styles.formLabel}>Bank Accounts</label>
						{
							!R.isEmpty(bankAccountsVault) && (
								<ul className={styles.accountsList}>
									{
										bankAccountsVault.map((record, key) => {
											return(
												<li key={key}>
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
													<span className={styles.deleteBtn} onClick={() => this.deleteBankRecord(record.account_num)}>Delete</span>
												</li>		
											)
										})
									}
								</ul>
							)
						}
					</div>
				</div>	
				<span className={styles.previousBtn} onClick={ () => updateStep('previous')}>Previous</span>
				<span className={styles.nextBtn} onClick={this.handleNextStep}>Preview and Submit</span>
			</div>
		)
	}
}

export default BankAccountsRecord;