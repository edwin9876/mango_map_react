import React from 'react'
import { ThemeContext } from '../../../Contexts/Theme'
import { ListGroup, ListGroupItem } from 'reactstrap';

const GroupSummary = () => {
    return (

      <ThemeContext.Consumer>{(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;

        return(
        <div classNameName="margin5">
        <ListGroup>
        <ListGroupItem color={theme.listcolor} tag="a" href="/chat/:id" className="justify-content-between d-flex">
        <img className="material-icons roundimg"
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIMey7cyC1XcqtyFcJlNhz7yP4oT1kAahWPw&usqp=CAU'
        alt='Avatar'
      />
        <h4 className="d-flex align-items-center">Group1</h4>
        <h6 className="d-flex align-items-center blur">3.07.2020
        
        </h6>
    
        </ListGroupItem>

        <ListGroupItem color={theme.listcolor}  tag="a" href="/chat/:id" className="justify-content-between d-flex">
        <img className="material-icons roundimg"
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIMey7cyC1XcqtyFcJlNhz7yP4oT1kAahWPw&usqp=CAU'
        alt='Avatar'
      />
        <h4 className="d-flex align-items-center">Group2</h4>
        <h6 className="d-flex align-items-center blur">3.07.2020
       
        </h6>
    
        </ListGroupItem>
        <ListGroupItem color={theme.listcolor}  tag="a" href="/chat/:id" className="justify-content-between d-flex">
        <img className="material-icons roundimg"
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIMey7cyC1XcqtyFcJlNhz7yP4oT1kAahWPw&usqp=CAU'
        alt='Avatar'
      />
        <h4 className="d-flex align-items-center">Group3</h4>
        <h6 className="d-flex align-items-center blur">3.07.2020

        </h6>
    
        </ListGroupItem>
        </ListGroup>

           

        </div>) }}
        </ThemeContext.Consumer>
    )
}

export default GroupSummary
