import React from 'react'

const handleClick = (e) => {
    let id = {...this.state.id};
    id = e.target.id;
    this.setState({
        id
    })
}
const ProfilePanel = () => {
    return (
        <div>
            <div className="d-flex justify-content-center margin1">

                <div onClick={handleClick} id="TripSummary" className="card margin1 panels center">
                    <h5 className="bold">30</h5>
                    <p>Trips</p>
                </div>

                <div id="GroupSummary" className="card margin1 panels center">
                    <h5 className="bold">6</h5>
                    <p>Groups</p>
                </div>

                <div id="PostSummary" className="card margin1 panels center">
                    <h5 className="bold">2</h5>
                    <p>Postings</p>
                </div>

            </div>
        </div>
    )
}

export default ProfilePanel
