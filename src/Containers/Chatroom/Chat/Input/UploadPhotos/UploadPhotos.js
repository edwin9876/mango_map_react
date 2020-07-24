import React, { Component } from 'react';

import axios from 'axios';

class UploadPhotos extends Component {
  state = {
    selectedFile: null,
  };

  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  //https://www.npmjs.com/package/imagemin use it to compress

  fileUploadHandler = (event) => {
    event.preventDefault();
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios
      .post(
        'https://api.imgur.com/3/image',
        {
          //data
        },
        { headers: { Authorization: 'Client-ID c193a8bef20fb01' } }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <input type='file' onChange={this.fileSelectedHandler} />
        <button onClick={this.fileUploadHandler}>Upload</button>;
      </>
    );
  }
}

export default UploadPhotos;
