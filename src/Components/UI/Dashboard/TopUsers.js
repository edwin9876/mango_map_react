import React from 'react'
import { Row, Col, Container } from 'reactstrap'


const TopUsers = ({ user }) => {
    console.log(user)
    return (
        <div className="margin1x">
            <Container className="bgdark noBorder">
                <Row>
                    <Col xs="3" m="2" l="1">
                        {user.profile_picture_url && user.profile_picture_url.length >= 200 ?
                            <img src={`data:image/png;base64, ${user.profile_picture_url}`} alt="profilepic" className="icons20 rBorder" /> :
                            <img src={user.profile_picture_url} className="icons20 rBorder" id="profile_pic" />
                        }
                        <p className="white100">{user.user_name}</p></Col>
                </Row>
            </Container>
        </div>

    )
}

export default TopUsers
