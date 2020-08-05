import React from 'react'
import { ThemeContext } from '../../../Contexts/Theme'

const Toplogobox = () => {
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;

            return(
        <div  id="toplogobox" className="gray50 d-flex justify-content-center">
            <h4 className="bold">MANGO MAP</h4>
        </div>) }}
        </ThemeContext.Consumer>
    )
}

export default Toplogobox