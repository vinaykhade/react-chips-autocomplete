import React, { Component } from 'react';
import BasicUserInfo from '../../containers/basicUserInfo';
import UserKyc from '../../containers/userKyc';
import BankAccounts from '../../containers/bankAccounts';

class MultiStageForm extends Component {
	constructor(props) {
		super(props)
	}


	render() {
		return(
			<div>
				<BasicUserInfo />
				<UserKyc />
				<BankAccounts />
			</div>
		)
	}
}

export default MultiStageForm