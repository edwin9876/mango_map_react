import React, { Component } from 'react'
import ChatList from '../../Components/Chat/ChatList'
import ChatToolbar from '../../Components/UI/Layout/ChatToolbar'
import SearchBar from '../../Components/UI/Layout/SearchBar'


export default class BlogScreen extends Component {
    render() {
        return (

            <div className="mb10vh">
                <ChatToolbar />
                <SearchBar/>
                <ChatList />

            </div>
        )
    }
}
