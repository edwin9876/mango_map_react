import React, { Component, useState } from 'react'
import { ThemeContext } from '../../Contexts/Theme'
import ThemeToggle from '../../Components/UI/Layout/ThemeToggle'
import { Button, ButtonGroup, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';


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

    render() {

        let locationsLength
        let chatroomsLength
        let postsLength
        // let favLength
        let userName
        let userGender
        if (this.props.locations) {

            locationsLength = this.props.locations.length
            chatroomsLength = this.props.chatrooms.length
            postsLength = this.props.chatrooms.length
            // favLength = this.props.favourites.length

            userName = this.props.user.user_name
            userGender = this.props.user.gender

        }

        // const numRows = membersToRender.length
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                console.log(this.props.user)

                return (
                    <div className="container noBorder" style={{ background: theme.low }}>
                        <Dropdown direction="" isOpen={this.state.btnDropdown} toggle={() => { this.setState({ btnDropdown: !this.state.btnDropdown }); }} id="dropdownmenu">
                            <DropdownToggle className="green noBorder" caret>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Sign out</DropdownItem>
                                <DropdownItem disabled><ThemeToggle /></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        <i className="material-icons justify-content-center d-flex micons15 blur">account_circle</i>
                        <h4 className=" bold justify-content-center d-flex">{userName}</h4>
                        <p className="justify-content-center d-flex blur bold">{userGender}</p>


                        <div className="d-flex justify-content-center" >
                            <ButtonGroup >
                                <Button color="secondary" className="margin1 sqBorder">
                                    <h4 className="bold justify-content-center d-flex">{locationsLength}</h4>
                                    <p className="justify-content-center d-flex">Trips</p>
                                </Button>

                                <Button color="secondary" className="margin1">
                                    <h4 className="bold justify-content-center d-flex">{chatroomsLength}</h4>
                                    <p className="justify-content-center d-flex">Groups</p>
                                </Button>

                                <Button color="secondary" className="margin1">
                                    <h4 className="bold justify-content-center d-flex">{postsLength}</h4>
                                    <p className="justify-content-center d-flex">Posts</p>
                                </Button>

                                <Button color="secondary" className="margin1 sqBorder">
                                    <h4 className="bold justify-content-center d-flex">1</h4>
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


export default ProfileDetails
