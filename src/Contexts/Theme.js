//using context to set colourtheme for lightmode, darkmode

import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { high: '#555', mid: '#ddd', low: 'white', highlight: '#ccd637', trans: 'transparent',listcolor:'light', img: 'https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
        dark: { high: '#ddd', mid: '#333', low: '#555', highlight: '#ccd637', trans: 'transparent', listcolor:'dark',img: 'https://i.pinimg.com/originals/eb/08/42/eb0842db86b37d4d6988854c4cb8e237.jpg'  }
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