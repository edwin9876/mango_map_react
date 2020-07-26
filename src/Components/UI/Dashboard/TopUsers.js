import React from 'react'
import { Row, Col, Container } from 'reactstrap'


const IndiUser = ({ user }) => {
    return (
        <div className="margin1x">
            <Container className="bgdark noBorder">
                <Row>
                    <Col xs="3" m="4"><img src={user.profile_picture_url} alt="profilepic" className="icons20 rBorder" />
                        <p className="white100">{user.user_name}</p></Col>
                </Row>
            </Container>
        </div>
    );
};


const TopUsers = ({ users }) => {
    return (

        <div className="row" id="topUsers_container">
            {users && users.map(user => {
                return (
                    <IndiUser user={user} key={user.id} />
                )
            })}
        </div>

    )
}

export default TopUsers
