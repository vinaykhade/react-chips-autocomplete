import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { ProgressBar } from 'react-bootstrap';
import * as R from 'ramda';
import request from 'superagent';
import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UPLOAD_URL } from '../../constants/constants';
import styles from './styles.scss';

class UploadKycDoc extends Component {
	constructor(props) {
		super(props);
		this.state = {
			documentUploadProgressPercentage: 0,
			imageStatus: 'loading',
			showImageLoader: false
		};
	}

	handleImage = (imageFiles) => {

		const { documentType, uploadKycDocument, handleInputErrors } = this.props;
		let fd = new FormData();	
		fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
		fd.append('file', imageFiles[0]);

		request.post(CLOUDINARY_UPLOAD_URL)
				  .send(fd)
				  .on('progress', (e) => {
				  		this.setState({ 
				  			documentUploadProgressPercentage: e.percent,
				  			showImageLoader: true
				  			})
				  })	
				  .end((err, res) => {
				     if(res) {
				     	uploadKycDocument(res.body.url);
				     	handleInputErrors(documentType);
				     }

				     if(err) {
				     	console.log("Something went wrong")
				     }
				  });

	}

	handleImageLoaded = () => {
		this.setState({ 
			imageStatus: "loaded", 
			showImageLoader: false
		});
	}

	render() {
		const { documentUploadProgressPercentage, showImageLoader } = this.state;
		const { title, doc, inputError, documentType } = this.props;
		return(
			<div className={`col-md-6 ${styles.uploadContainer}`}>
				<h2 className={styles.title}>{title}</h2>
				<div className={styles.imageUploadBlock}>
					<div className="row">
						<div className="col-md-6">
							<Dropzone
				                onDrop={this.handleImage}
				                className={`dropzone col-md-6 ${styles.dropZoneInput}`}
				                activeClassName='active-dropzone'
				                multiple={false}
				                accept='image/*'
				                >
						      	<p>Drop Files Here</p>
						      	<p>or</p>
						      	<button>Upload</button>
						      	 {
							       	documentUploadProgressPercentage > 0 && (<ProgressBar now={documentUploadProgressPercentage} label={`${documentUploadProgressPercentage}%`} />)
							     }
						    </Dropzone>
						    <span className={styles.errorMsg}>{inputError}</span>
					    </div>
					    <div className={`col-md-6 ${styles.imagePreview}`}>
					     <label className={styles.formLabel}>Preview</label>	
					     {
					    	!R.isEmpty(doc) && (<img src={doc} onLoad={this.handleImageLoaded} />)
					     }
					     {
					     	showImageLoader && (<span>Loading ...</span>)
					     }
					    </div> 
				    </div>
			    </div>

		    </div>
	    )
	}
}

export default UploadKycDoc;