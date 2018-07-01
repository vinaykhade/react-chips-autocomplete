import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { ProgressBar } from 'react-bootstrap';
import * as R from 'ramda';
import request from 'superagent';
import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UPLOAD_URL } from '../../constants/constants';

class UploadKycDoc extends Component {
	constructor(props) {
		super(props);
		this.state = {
			documentUploadProgressPercentage: 0
		};
	}

	handleImage = (imageFiles) => {

		let fd = new FormData();	
		fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
		fd.append('file', imageFiles[0]);

		request.post(CLOUDINARY_UPLOAD_URL)
				  .send(fd)
				  .on('progress', (e) => {
				  		this.setState({ documentUploadProgressPercentage: e.percent })
				  })	
				  .end((err, res) => {
				     if(res) {
				     	this.props.uploadKycDocument(res.body.url);
				     }

				     if(err) {
				     	console.log("Something went wrong")
				     }
				  });

	}

	render() {
		const { documentUploadProgressPercentage } = this.state;
		const { title, doc } = this.props;
		return(
			<div>
				<h3>{title}</h3>
				<Dropzone
	                onDrop={this.handleImage}
	                className='dropzone'
	                activeClassName='active-dropzone'
	                multiple={false}
	                accept='image/*'
	                >
			      <div>Drag and drop or click to select a 550x550px file to upload.</div>
			    </Dropzone>
			     {
			       documentUploadProgressPercentage > 0 && (<ProgressBar now={documentUploadProgressPercentage} label={`${documentUploadProgressPercentage}%`} />)
			     }
			     {
			    	!R.isEmpty(doc) && (<img src={doc} />)
			     }
		    </div>
	    )
	}
}

export default UploadKycDoc;