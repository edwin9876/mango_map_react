import React from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const SearchBar = () => {
   
            return (
                <div >
                    <InputGroup>
                        <Input className="sqBorder"/>
                        <InputGroupAddon addonType="append">
                            <Button className="sqBorder noBorder green">Search</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>)
            }
 
export default SearchBar