import React, {Component} from 'react';
import {ThemeContext} from '../../../Contexts/Theme'
import {CustomInput, FormGroup} from 'reactstrap'

export default class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render(){
        const { toggleTheme} = this.context;
        return(
            <div>

            <FormGroup>        
              <CustomInput onClick={toggleTheme}  type="switch" id="exampleCustomSwitch" name="customSwitch" label="Night Mode" />
              </FormGroup>
            </div>
          
        )
    }
}