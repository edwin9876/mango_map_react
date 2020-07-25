import React from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const SearchBar = () => {
   
            return (
                <div >
                    <InputGroup>
                        <Input/>
                        <InputGroupAddon addonType="append">
                            <Button>Search</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>)
            }
 
export default SearchBar

