import React, { Component } from 'react';
import BankAccountsForm from './Form/BankAccountsForm';
import * as R from 'ramda'


class BankAccountsRecord extends Component {

	deleteBankRecord = (account_num) => {
		this.props.updateBankRecords(account_num);
	}

	render() {
		const { bankAccountsVault} = this.props;
		return(
			<div>
				<button>Add Bank Account Details</button>
				<BankAccountsForm {...this.props} />
					{
						!R.isEmpty(bankAccountsVault) && (
							<div>
								{
									bankAccountsVault.map((record, key) => {
										return(
											<div key={key}>
												<div>
													<label>IFSC CODE</label>
													<span>{record.ifsc_code}</span>
												</div>
												<div>
													<label>BANK NAME</label>
													<span>{record.bank_name}</span>
												</div>
												<div>
													<label>BRANCH NAME</label>
													<span>{record.branch_name}</span>
												</div>
												<div>
													<label>ACCOUNT NUMBER</label>
													<span>{record.account_num}</span>
												</div>
												<div>
													<label>ACCOUNT HOLDERS NAME</label>
													<span>{record.holder_name}</span>
												</div>
												<span onClick={() => this.deleteBankRecord(record.account_num)}>Delete</span>
											</div>		
										)
									})
								}
							</div>
						)
					}
			</div>
		)
	}
}

export default BankAccountsRecord;