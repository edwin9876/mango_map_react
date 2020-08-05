import React from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const SearchBar = (props) => {
   
            return (
                <div >
                    <InputGroup>
                        <Input onChange={props.handleSearch}className="sqBorder"/>
                        <InputGroupAddon addonType="append">
                            <Button onClick={props.handleSubmit} className="sqBorder noBorder green">Search</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>)
            }
 
export default SearchBar