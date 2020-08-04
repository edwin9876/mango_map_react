import React from 'react'
import { ThemeContext } from '../../../Contexts/Theme'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const WeeklyPic = ({ image }) => {
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;


            return (
                <div>
                    <Card style={{ background: theme.low, borderColor: theme.high }}>
                        <CardBody>
                            <CardImg top width="100%" src={image.url} alt="Card image cap" />
                            <CardTitle className="bold">{image.title}</CardTitle>
                            <CardSubtitle>{image.district_id}</CardSubtitle>
                        </CardBody>
                    </Card>
                </div>)
        }}
        </ThemeContext.Consumer>

    )
}

export default WeeklyPic
