
import React from 'react'
import SearchBar from '../UI/Layout/SearchBar'



import Messages from '../../Containers/Chatroom/Chat/Messages/Messages';

const ChatDetails = () => {

    return (
        <div>


            <h5 className="center">Thomas Burberry</h5>


            <SearchBar />
            <div className="card-tabs margin1">

                <ul className="tabs tabs-fixed-width">
                    <li className="tab"><a href="#test6" className="bold black-text">Messages</a></li>
                    <li className="tab"><a href="#test4" className="bold black-text">TripBook</a></li>
                </ul>

            </div>

            <div className="center chatbox">

            </div>


            <div>
                <div className="container">
                    <img src="" alt="Avatar" />
                    <p>Hello. How are you today?</p>
                    <span className="time-right">11:00</span>
                </div>

                <div className="container darker">
                    <img src="" alt="Avatar" className="right" />
                    <p>Hey! I'm fine. Thanks for asking!</p>
                    <span className="time-left">11:01</span>
                </div>

                <div className="container">
                    <img src="" alt="Avatar" />
                    <p>Sweet! So, what do you wanna do today?</p>
                    <span className="time-right">11:02</span>
                </div>

                <div className="container darker">
                    <img src="" alt="Avatar" className="right" />
                    <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
                    <span className="time-left">11:05</span>
                </div>
                <input id="typebox" type="text" />
            </div>
        </div>
    )
}

export default ChatDetails
