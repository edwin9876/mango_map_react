import React, { Component } from 'react'

export default class ChatList extends Component {
    state = {
        chatrooms: [
            { name: 'Thomas Burberry', preview: 'Message Preview' }, { name: 'Thomas Burberry', preview: 'Message Preview' }, { name: 'Thomas Burberry', preview: 'Message Preview' }, { name: 'Thomas Burberry', preview: 'Message Preview' }
        ]
    }


    render() {
        const { chatrooms } = this.state
        const chatroomList = chatrooms.length ?
            (chatrooms.map(chatroom => {
                return (
                    <div>
                        <li className="collection-item avatar ">
                            <i className="material-icons circle grey blur">star</i>
                            <span className="title bold">{chatroom.name}</span>
                            <p>
                               {chatroom.preview}
                    </p>
                            <a href="#!" className="secondary-content"><i className="material-icons blur">grade</i></a>
                        </li>
                    </div>)
            }))
            :
            (<div className="d-flex justify-content-center">No chats yet</div>)

            return(
                <ul className="collection">
               {chatroomList}
               </ul>
            )
    }
}
