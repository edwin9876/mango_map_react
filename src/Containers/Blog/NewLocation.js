// import React, { Component } from 'react';
// import { ThemeContext } from '../../Contexts/Theme'
// import { connect } from 'react-redux';

// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import {  } from '../../redux/actions/blog';



// class ConnectedNewLocation extends Component {
//   static contextType = ThemeContext;

//   constructor(props) {
//     super(props)
//     this.state = {
//       location: {
//        en: '',
//        cn: '',
//        description: '',
//        lat:'',
//        lng:''
//       },
//       categories: [],
//       images64: [],
//       submitted: false,
//     };
//   }
//   async componentDidMount() {
//     let { dispatch } = this.props

//     await dispatch()
//     console.log(this.props)
//     if () {
//       this.setState({
//         ...this.state,
    
//       })
//     }
//     console.log(this.state)
//   }

//   componentWillUnmount() {
//     this.setState({
//       location: {
//         en: '',
//         cn: '',
//         description: '',
//         lat:'',
//         lng:''
//        },
//       submitted: false,
//     })
//   }
//   handleSubmit = async (e) => {
//     e.preventDefault();
//     this.setState({ submitted: true })
//     const {en,cn,description } = this.state.post
//     const user_id = this.props.auth.user.id
//     const { dispatch } = this.props
//     const newLocation = this.state.location
//     let newLocation_id


//     if (en&&cn&&description && user_id) {
//       await dispatch(createPost(newLocation, user_id))
//     }

//   }


//   handleChange = (e) => {

//       this.setState({
//         location: {
//           ...this.state.location,
//           [e.target.name]: e.target.value
//         }
//       })

//     }

//   }

//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;

//     return (
//       <div>
//         <Form id="createPost" onSubmit={this.handleSubmit}  className="uploader margin5" encType="multipart/form-data">
//           <FormGroup>
//             <Label for="title" className="bold" >Location Name(English)</Label>
//             <Input style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} onChange={this.handleChange} type="text" name="en" placeholder="Title" />
//           </FormGroup>

//           <FormGroup>
//             <Label for="title" className="bold">Location Name(Chinese)</Label>
//             <Input style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} onChange={this.handleChange} type="text" name="cn" placeholder="Title" />
//           </FormGroup>

//           <FormGroup>
//             <Label for="body" className="bold">Description</Label>
//             <Input style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} onChange={this.handleChange} type="textarea" name="description" placeholder="Please explain about the location" rows="10" />
//           </FormGroup>


//           <div className="d-flex justify-content-center">
//             <Button style={{ backgroundColor: theme.highlight }} className="btn margin5 noBorder"
//               type="submit" name="action" >Add Location
//             </Button>
//           </div>


//         </Form>
//       </div>
//     )
//   }
// }


// const mapStateToProps = state => {
//   return {
//     ...state
//   }
// }

// const NewLocation = connect(mapStateToProps)(ConnectedNewLocation);

// export default NewLocation