import React from 'react'

const TripSummary = () => {
    return (

        <div className="col s12 m7 margin5">
            <div className="card horizontal">
                <div className="card-image">
                    <img src="https://lorempixel.com/100/190/nature/6"/>
      </div>
                    <div className="card-stacked">
                        <div className="card-content center">
                            <h5 id="trip_name">Trip to Sai Kung</h5>
                            <br/>
                            <p id="group_name">With Group2</p>
                            <p id="trip_date">10 March 2020</p>
                        </div>
                        <div className="card-action center bold">
                            <a href="/trip/:id">View more</a>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default TripSummary
