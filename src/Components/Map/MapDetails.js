import React from 'react'
import UserPicList from './UserPicList'

const MapDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="container section map-details">
            <div ClassName="card z-depth-0">
                <div ClassName="card-content d-flex justify-content-center align-content-center">
                    <img id="locationPic" className="margin5" src="https://hongkongliving.b-cdn.net/wp-content/uploads/2020/07/stand-up-paddle-in-stanley.jpg"
                        alt="locationPic"
                    />
                    <UserPicList />
                    <h4 className="gray50">Sai Kung Beach - {id}</h4>
                    <p>The Sai Kung District is one of the 18 districts of Hong Kong. Hong Kong itself is a special administrative region of China. The district comprises the southern half of Sai Kung Peninsula and Clear Water Bay Peninsula in the New Territories plus a strip to the east of Kowloon. If you’re dreaming of a tropical island weekend somewhere away in Southeast Asia but all you have is Hong Kong, don’t fret. Some of the most beautiful beaches in Sai Kung have clear blue waters and untouched sandy shores. Save yourself the plane ride and hop on a sampan instead to one these secret destinations.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <p>Related Posts</p>
                                       
                </div>
            </div>
        </div>
    )
}

export default MapDetails;
