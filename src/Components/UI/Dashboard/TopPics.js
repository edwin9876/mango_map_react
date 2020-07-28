import React from 'react'


const IndiPicture = ({ picture }) => {
    return (
        <div>
            <img src={picture.url} alt="individual pics" className="icons30"/>
        </div>
    );
};


const TopPics = ({ pictures }) => {
    return (

        <div className="row d-flex justify-content-center margin1" id="topPic_container">
            {pictures && pictures.map(picture => {
                return (
                    <IndiPicture picture={picture} key={picture.id} />
                )
            })}
        </div>

    )
}

export default TopPics
