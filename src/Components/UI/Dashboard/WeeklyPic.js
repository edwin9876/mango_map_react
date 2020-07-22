import React from 'react'

const WeeklyPic = ({image}) => {
    return (
        <div className="row">
            <p className="center bold gray70 ">Most Liked Picture</p>

            <div className="col s12 m12" >
                <div className="card vw100">
                    <div className="card-image">
                            <img src={image.url} />
    <span className="card-title">{image.title}</span>
                    </div>
                    <div className="card-content">
    <p>{image.district_id}</p>
                    </div>

                </div>
            </div>
            
        </div>

    )
}

export default WeeklyPic
