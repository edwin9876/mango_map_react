import React, { Component } from 'react'
import { ThemeContext } from '../../../Contexts/Theme'
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class TripSummary extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props)
        this.state = {
        }

    }

    handleClick = async (e) => {
        console.log(this.props)
        this.props.history.push(`/trip/${this.props.location.id}`);
        

    }
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        console.log(this.props)
        return (

            <div>
                <Card className="margin5" style={{ background: theme.low, color: theme.high, borderColor: theme.high }}>
                    <CardBody>
                        <CardTitle className="bold d-flex justify-content-center">{this.props.location.en.toUpperCase()}</CardTitle>
                        <CardTitle className="bold d-flex justify-content-center">{this.props.location.cn}</CardTitle>
                        <CardSubtitle className="d-flex justify-content-center">{this.props.location.created_at.slice(0, 10)}</CardSubtitle><br />
                        <a className="d-flex justify-content-center"><Button onClick={this.handleClick} className="noBorder" style={{ background: theme.highlight }}>View more</Button></a>
                    </CardBody>
                </Card>

            </div>
        )



    }
}




export default TripSummary
