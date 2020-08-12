import React, { Component } from 'react';
import { ThemeContext } from '../../../Contexts/Theme'
import { Button, ButtonGroup} from 'reactstrap'



class PopularSpots extends Component {
    static contextType = ThemeContext;

    constructor(props) {
        super(props)
        this.state = {}

    }

    handleClick =  (e) => {
        this.props.history.push(`/spot/${this.props.location.id}`);
      }


    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <ButtonGroup>
                <Button  
                style={{ background: theme.low, borderColor: theme.highlight, color: theme.high }} onClick={this.handleClick} outline size="sm" color="secondary" className="margin1xy overflow-auto" id="filter-btn">{this.props.location.en}</Button>
            </ButtonGroup>
        )


    }
}




export default PopularSpots