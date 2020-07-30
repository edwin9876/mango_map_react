import React, { Component } from 'react'
import { ThemeContext } from '../../Contexts/Theme'
import ThemeToggle from '../../Components/UI/Layout/ThemeToggle'
import { Button, ButtonGroup, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { withRouter } from "react-router-dom";


class ProfileDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false,
            setDropdownOpen: false
        }
    }
    toggle = () => {
        const { dropdownOpen } = this.state;
        this.setState({
            dropdownOpen: !dropdownOpen,
        });
        console.log(this.state.dropdownOpen)
    };

    routeChangeSignout = () => {
        let path = `/signin`;
        this.props.history.push(path);
    }

    routeChangeEditprofile = () => {
        let path = `/profile/:id/edit`;
        this.props.history.push(path);
    }

    render() {

        let locationsLength
        let chatroomsLength
        let postsLength
        let favLength

        let userPic
        let userName
        let userGender
        if (this.props.locations) {

            locationsLength = this.props.locations.length
            chatroomsLength = this.props.chatrooms.length
            postsLength = this.props.posts.length
            favLength = this.props.favPosts.length

            userPic = this.props.user.profile_picture_url
            userName = this.props.user.user_name
            userGender = this.props.user.gender

        }
        console.log(this.props)
        // const numRows = membersToRender.length
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                console.log(this.props.user)

                return (
                    <div className="container noBorder" style={{ background: theme.low }}>
                        <Dropdown direction="down" isOpen={this.state.btnDropdown} toggle={() => { this.setState({ btnDropdown: !this.state.btnDropdown }); }} id="dropdownmenu">
                            <DropdownToggle className="green noBorder" caret>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={this.routeChangeSignout}> Sign out</DropdownItem>
                                <DropdownItem onClick={this.routeChangeEditprofile}> Edit Profile</DropdownItem>
                                <DropdownItem disabled><ThemeToggle /></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        <i className="material-icons justify-content-center d-flex micons15 blur">account_circle</i>
                        <h4 className=" bold justify-content-center d-flex">{userName}</h4>
                        <p className="justify-content-center d-flex blur bold">{userGender}</p>


                        <div className="d-flex justify-content-center" >
                            <ButtonGroup >
                                <Button onClick={this.props.filterLoc} color="secondary" className="margin1 sqBorder" >
                                    <h4 className="bold justify-content-center d-flex">{locationsLength}</h4>
                                    <p className="justify-content-center d-flex">Trips</p>
                                </Button>

                                <Button onClick={this.props.filterCha} color="secondary" className="margin1" >
                                    <h4 className="bold justify-content-center d-flex">{chatroomsLength}</h4>
                                    <p className="justify-content-center d-flex">Groups</p>
                                </Button>

                                <Button onClick={this.props.filterPos} color="secondary" className="margin1" >
                                    <h4 className="bold justify-content-center d-flex">{postsLength}</h4>
                                    <p className="justify-content-center d-flex">Posts</p>
                                </Button>

                                <Button onClick={this.props.filterFav} color="secondary" className="margin1 sqBorder">
                                    <h4 className="bold justify-content-center d-flex">{favLength}</h4>
                                    <p className="justify-content-center d-flex">Likes</p>
                                </Button>
                            </ButtonGroup>
                        </div>

                    </div>)
            }}
            </ThemeContext.Consumer>
        )
    }

}


export default withRouter(ProfileDetails)
