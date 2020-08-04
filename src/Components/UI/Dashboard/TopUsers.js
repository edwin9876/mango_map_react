import React from 'react'
import { Row, Col, Container } from 'reactstrap'


const TopUsers = ({ user }) => {
    console.log(user)
    return (
        <div className="margin1x">
        <Container className="bgdark noBorder">
            <Row>
                <Col xs="3" m="2" l="1"><img src={user.profile_picture_url} alt="profilepic" className="icons20 rBorder" />
                    <p className="white100">{user.user_name}</p></Col>
            </Row>
        </Container>
    </div>

    )
}

export default TopUsers
