import React, { Component } from 'react';
import axios from 'axios';
import uploadIcon from '../../../../../Icons/upload.png';
import './UploadPhotos.css';

class UploadPhotos extends Component {
  state = {
    selectedFile: null,
  };

  // https://www.npmjs.com/package/imagemin use it to compress
  fileUploadHandler = (event) => {
    event.preventDefault();
    this.setState(
      {
        selectedFile: event.target.files[0],
      },
      () => {
        let file = this.state.selectedFile;
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          let base64Img = reader.result.split('base64')[1];
          axios.post(
            `https://localhost:8000/image/private`,
            {
              img: base64Img,
              roomId: 1,
              userId: 1,
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Accept: '*/*',
                'Access-Control-Allow-Origin': '*',
              },
            }
          );
        };
      }
    );
  };

  render() {
    return (
      <>
        <label htmlFor='myInput'>
          <img style={{ height: '40px' }} src={uploadIcon} alt='upload icon' />
        </label>
        <input
          id='myInput'
          type='file'
          accept='image/*'
          onChange={this.fileUploadHandler}
          style={{ display: 'none' }}
        />
      </>
    );
  }
}

export default UploadPhotos;
