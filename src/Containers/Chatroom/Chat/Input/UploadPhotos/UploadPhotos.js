import React, { Component } from 'react';
import axios from 'axios';
import uploadIcon from '../../../../../Icons/upload.png';
import './UploadPhotos.css';

class UploadPhotos extends Component {
  state = {
    selectedFile: null,
  };

  //https://www.npmjs.com/package/imagemin use it to compress

  fileUploadHandler = (event) => {
    event.preventDefault();
    this.setState(
      {
        selectedFile: event.target.files[0],
      },
      () => {
        const fd = new FormData();
        fd.append(
          'image_data',
          this.state.selectedFile,
          this.state.selectedFile.name
        );
        console.log(fd);
        // TODO: connect to redux to get user id and current roomId
        // Parameters should be (image, userId, roomId)
        axios.post(
          `https://localhost:8000/image/private`,
          {
            img: fd,
            userId: 1,
            roomId: 1,
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Accept: '*/*',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
        console.log('After');
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
