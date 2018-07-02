import React, { Component } from 'react';
import BasicUserInfo from '../../containers/basicUserInfo';
import UserKyc from '../../containers/userKyc';
import BankAccounts from '../../containers/bankAccounts';
import Preview from '../../containers/previewPage';

class MultiStageForm extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			step: 1
		}
	}	
	
	updateStep = (direction) => {
		let { step } = this.state;
		if(direction === 'next') {
			this.setState({ step: step + 1 });
		} else {
			this.setState({ step: step - 1 });
		}
		
	}

	render() {
		switch (this.state.step) {
			case 1:
				return <BasicUserInfo 
						updateStep={this.updateStep}
						/>
			case 2:
				return <UserKyc
						updateStep={this.updateStep}
						/>
			case 3:
				return <BankAccounts 
						updateStep={this.updateStep}
						/>
			case 4:
				return <Preview 
						updateStep={this.updateStep}
						/>			
		}
	}
}

export default MultiStageForm