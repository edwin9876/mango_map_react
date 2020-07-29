import React from 'react'
import { Row,  Container, CardImg } from 'reactstrap'





const TopPics = ({ image }) => {

    return (

        <div className="margin1x">
            <Container className="bgdark noBorder">
                <Row>
                    <CardImg src={image.url} alt="individual pics" top width="100%" />
                </Row>
            </Container>
        </div>
    )
}

export default TopPics
