import React, { Component } from 'react';
import BasicUserInfo from '../../containers/basicUserInfo';

class MultiStageForm extends Component {
	constructor(props) {
		super(props)
	}


	render() {
		return(
			<div>
				<BasicUserInfo />
			</div>
		)
	}
}

export default MultiStageForm