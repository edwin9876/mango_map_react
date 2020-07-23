import React from 'react'


const IndiPicture = ({ picture }) => {
    return (
        <div>
            <img src={picture.url} alt="individual pics" className="col s4 m6 margin1vw"/>
        </div>
    );
};


const TopPics = ({ pictures }) => {
    return (

        <div className="row" id="topPic_container">
            {pictures && pictures.map(picture => {
                return (
                    <IndiPicture picture={picture} key={picture.id} />
                )
            })}
        </div>

    )
}

export default TopPics
