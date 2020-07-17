import React, { Component } from 'react'
import ChatList from '../Chat/ChatList'


export default class BlogScreen extends Component {
    render() {
        return (

            <div>
                <h3 className="center bold gray50">Chats</h3>

                {/* <a className="btn-floating right pad5"><i className="material-icons">add</i></a> */}

                <ChatList />
                
            </div>
        )
    }
}
