import React from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const SearchBar = (props) => {
   
            return (
                <div >
                    <InputGroup>
                        <Input value={props.value} onChange={props.handleSearch} className="sqBorder"/>
                        <InputGroupAddon addonType="append">
                            <Button onClick={props.handleSubmit} className="sqBorder noBorder green">Search</Button>
                            <Button onClick={props.handleCancel} className="sqBorder noBorder green">X</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>)
            }
 
export default SearchBar