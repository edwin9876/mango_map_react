//using context to set colourtheme for lightmode, darkmode

import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { high: '#555', mid: '#ddd', low: 'white', highlight: '#ccd637', trans: 'transparent', listcolor: 'light',  highlight2: '#FFA041' ,highlight3: '#ebf28d'},
        dark: { high: '#ddd', mid: '#333', low: '#555', highlight: '#ccd637', trans: 'transparent', listcolor: 'dark',  highlight2: '#FFA041',highlight3: '#ebf28d' }
    }

    toggleTheme = (e) => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
    }

    dragTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme, dragTheme: this.dragTheme }}>
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