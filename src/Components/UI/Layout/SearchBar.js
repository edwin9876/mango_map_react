import React from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

const SearchBar = (props) => {
   
            return (
                <div >
                    <InputGroup>
                        <Input value={props.value} onChange={props.handleSearch} onClick={props.handleCancelBtn} className="sqBorder"/>
                        <InputGroupAddon addonType="append">
                            <Button onClick={props.handleSubmit} className="sqBorder noBorder green">Search</Button>
                            
                            {props.showCancel?
                            <Button onClick={props.handleCancel} className="sqBorder noBorder green">X</Button>
                            : null}
                            
                        </InputGroupAddon>
                    </InputGroup>
                </div>)
            }
 
export default SearchBar