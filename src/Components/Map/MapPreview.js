import React from 'react'
import UserPicList from './UserPicList'

function MapPreview() {
    return (
        <div className="d-flex justify-content-center">
        <div id="previewContainer">
            <h5 className="d-flex justify-content-center white100">Place Name</h5>
          <UserPicList/>
        </div>
        </div>
    )
}

export default MapPreview
