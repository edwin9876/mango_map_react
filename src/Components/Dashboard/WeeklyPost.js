import React from 'react'


const Weekly = () => {
    return (
        <div>


            <div className="row">

                <p className="center bold gray70">This week's best post</p>



                <div className="col s12 m12">
                    <div className="card darken-1">
                        <div className="card-content grey-text">
                            <h4 className="card-title">My best picture</h4>
                            <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action center ">
                            <a href="/blog/id" className="bold green-text ">View more</a>
                        </div>

                    </div>
                </div>
                <div className="col s12 m12 center-align"><a href='/blog/new'class=" waves-effect waves-light btn">add new blog</a></div>

            </div>

        </div>
    )
}

export default Weekly
