import React from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { ThemeContext } from '../../../Contexts/Theme'

const SearchBar = () => {
    return (
        <ThemeContext.Consumer>{(context) => {
            const { isLightTheme, light, dark } = context;
            const theme = isLightTheme ? light : dark;

            return (
                <div >
                    <InputGroup>
                        <Input/>
                        <InputGroupAddon addonType="append">
                            <Button  style={{background: theme.transparent}}>Search</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>)
        }}
        </ThemeContext.Consumer>
    )
}

export default SearchBar

