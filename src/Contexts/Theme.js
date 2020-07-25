//using context to set colourtheme for lightmode, darkmode

import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: false,
        light: { high: '#555', mid: '#ddd', low: 'white', highlight: '#ccd637', trans: 'transparent',listcolor:'light' },
        dark: { high: '#ddd', mid: '#333', low: '#555', highlight: '#ccd637', trans: 'transparent', listcolor:'dark'  }
    }
    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;



// Input
// style={{background:theme.low, borderColor: theme.highlight, color:theme.high }} 

// reactcolor
// color={theme.color} 