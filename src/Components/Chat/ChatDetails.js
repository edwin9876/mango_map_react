import React from 'react'
import SearchBar from '../UI/Layout/SearchBar'


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
            <div className="container">

            </div>


            <div>
                <input id="typebox" type="text" />
            </div>
        </div>
    )
}

export default ChatDetails
