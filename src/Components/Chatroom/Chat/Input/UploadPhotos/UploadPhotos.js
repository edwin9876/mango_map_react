import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { sendImage } from '../../../../../redux/actions/chatroom';

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
          axios
            .post(
              `https://localhost:8000/image/private`,
              {
                img: base64Img,
                currentRoomId: this.props.currentRoomId,
                chatroomUserId: this.props.chatroomUserId,
                userId: this.props.userId,
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                  Accept: '*/*',
                  'Access-Control-Allow-Origin': '*',
                },
              }
            )
            .then((response) => {
              console.log('Got the uploaded photo response');
              console.log(this.props);
              response
                ? this.props.sendImage(
                    response.data,
                    this.props.currentRoomId,
                    this.props.chatroomUserId
                  )
                : console.log('An error occurs, please upload later');
            });
        };
      }
    );
  };

  render() {
    return (
      <>
        <label htmlFor='myInput'>
          <i className='material-icons font5'>attach_file</i>
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

const mapStateToProps = (state) => {
  return {
    chatroomUserId: state.chatroom.chatroomUserId,
    currentRoomId: state.chatroom.currentRoomId,
    userId: state.chatroom.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendImage: (imageURL, roomId, chatroomUserId) =>
      dispatch(sendImage(imageURL, roomId, chatroomUserId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadPhotos);
