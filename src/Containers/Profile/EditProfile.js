import React, { Component } from 'react';
import { ThemeContext } from '../../Contexts/Theme'
import { connect } from 'react-redux';

import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';



// class EditProfile extends Component {
//     static contextType = ThemeContext;

//     constructor(props) {
//         super(props);
//         this.state = {
//           userInfo: {
//             email: '',
//             password: '',
//             user_name: '',
//             description: '',
//             gender: '',
//             profile_picture_URL: '',
//           },
//           submitted: false,
//         };
//     }

          
//     async
  
//     componentWillUnmount() {
//       this.setState({
//         buttonId: null,
//         userInfo: {
//             email: '',
//             password: '',
//             user_name: '',
//             description: '',
//             gender: '',
//             profile_picture_URL: '',
//           },
//         submitted: false,
//       })
//     }

//     handleImageChange = (e) => {
//         let file = e.target.files[0];
//         let reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onloadend = () => {
//           this.setState({
//             userInfo: {
//               ...this.state.userInfo,
//               profile_picture_URL: reader.result.split('base64,')[1],
//             },
//           });
    
//           console.log(this.state);
//         };
//       };


//     handleSubmit = async (e) => {
//       e.preventDefault();
//       this.setState({ submitted: true })
//       const { user_name, email, password, gender  } = this.state.post
//       const userInfo = { ...this.state.userInfo };
//       const { dispatch } = this.props;
//       console.log(newBlog)
//       console.log(user_id)
//       if (user_name && email && password && gender){
//         await dispatch(editProfile(userInfo))
//         console.log(this.state)
//       }
//     }
//     handleChange = (e) => {
//         // console.log(this.state)
    
//         if (e.target.name == 'profile_picture_URL') {
//           this.handleImageChange(e);
//         }
//         console.log(this.state);
//         this.setState({
//           userInfo: { ...this.state.userInfo, [e.target.name]: e.target.value },
//         });
//       }


//     render() {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
    

//         return (
//             <div>
//             <Form
//             style={{ background: theme.low, color: theme.high }}
//             onSubmit={this.handleSubmit}
//             className='form-container'
//           >
//             {submitted && this.props.signedUpFail && (
//               <p className='text-danger'>Sign Up Fail</p>
//             )}
//             <FormGroup>
//               <Label htmlFor='user_name'>User Name</Label>
//               <Input
//                 type='text'
//                 id='user_name'
//                 name='user_name'
//                 onChange={this.handleChange}
//                 style={{
//                   background: theme.low,
//                   borderColor: theme.highlight,
//                   color: theme.high,
//                 }}
//               />
//               {submitted && !user_name && (
//                 <p className='text-danger'>* User Name is required</p>
//               )}
//             </FormGroup>
  
//             <FormGroup>
//               <Label htmlFor='gender'>Gender</Label>
//               <FormGroup>
//                 <FormGroup check inline>
//                   <Label check>
//                     <Input
//                       onChange={this.handleChange}
//                       type='radio'
//                       name='gender'
//                       value='male'
//                     />{' '}
//                     Male
//                   </Label>
//                 </FormGroup>
//                 <FormGroup check inline>
//                   <Label check>
//                     <Input
//                       onChange={this.handleChange}
//                       type='radio'
//                       name='gender'
//                       value='female'
//                     />{' '}
//                     Female
//                   </Label>
//                 </FormGroup>
//               </FormGroup>
//               {submitted && !gender && (
//                 <p className='text-danger'>* Gender is required</p>
//               )}
//             </FormGroup>
  
//             <FormGroup>
//               <Label htmlFor='email'>Email</Label>
//               <Input
//                 type='email'
//                 id='email'
//                 name='email'
//                 onChange={this.handleChange}
//                 style={{
//                   background: theme.low,
//                   borderColor: theme.highlight,
//                   color: theme.high,
//                 }}
//               />
//               {submitted && !email && (
//                 <p className='text-danger'>* Email is required</p>
//               )}
//             </FormGroup>
  
//             <FormGroup>
//               <Label htmlFor='password'>Password</Label>
//               <Input
//                 type='password'
//                 id='password'
//                 name='password'
//                 onChange={this.handleChange}
//                 style={{
//                   background: theme.low,
//                   borderColor: theme.highlight,
//                   color: theme.high,
//                 }}
//               />
//               {submitted && !password && (
//                 <p className='text-danger'>* Password is required </p>
//               )}
//             </FormGroup>
  
//             <FormGroup row>
//               <Label for='description' sm={2}>
//                 Description
//               </Label>
//               <Col sm={10}>
//                 <Input
//                   type='textarea'
//                   id='description'
//                   name='description'
//                   onChange={this.handleChange}
//                   style={{
//                     background: theme.low,
//                     borderColor: theme.highlight,
//                     color: theme.high,
//                   }}
//                 />
//               </Col>
//             </FormGroup>
  
//             <FormGroup>
//               <Label for='profile_picture_URL'>Profile Image</Label>
//               <Input
//                 type='file'
//                 id='profile_picture_URL'
//                 name='profile_picture_URL'
//                 onChange={this.handleChange}
//               />
//             </FormGroup>
  
//             <div className='justify-content-center d-flex Input-field'>
//               <button className='transparent_btn white-text ' id='login_btn'>
//                 {' '}
//                 Edit
//               </button>
//             </div>
//           </Form>
//             </div>
//         )
//     }
// }


// const mapStateToProps = (state) => {
//     return {
//       ...state.auth,
//     };
//   };

// export default EditProfile