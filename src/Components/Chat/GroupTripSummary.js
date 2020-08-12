import React from 'react'
import { ThemeContext } from '../../Contexts/Theme';
import { ListGroup, ListGroupItem } from 'reactstrap';


const GroupTripSummary = () => {

    return (
        <ThemeContext.Consumer>
            {(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <div className='margin5'>
                    <ListGroup>
                      <ListGroupItem
                     
                        style={{ backgroundColor: theme.mid, borderColor: theme.highlight }}
                        className='justify-content-between d-flex'
                      >
                        <img
                          className='material-icons roundimg'
                          src='https://i.imgur.com/9TowUuJ.png'
                          alt='Avatar'
                        />
                        <h6
                          className='d-flex align-items-center'
                          style={{ color: theme.high }}
                        >
                         Lizard's back
                        </h6>
                        <h6
                          className='d-flex align-items-center blur'
                          style={{ color: theme.high }}
                        >
                         12.08.2019
                        </h6>
                      </ListGroupItem>
                    </ListGroup>
                  </div>
                )
            }}
        </ThemeContext.Consumer>

    )
}

export default GroupTripSummary
