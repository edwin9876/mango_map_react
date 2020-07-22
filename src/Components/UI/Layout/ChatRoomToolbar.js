import React from 'react'

const ChatroomToolbar = () => {
  return (
    <div>

      <nav>
        <div className="nav-wrapper green">
          <ul className="left">
            <a href="/chat">
          <i class="material-icons">arrow_back</i></a>
          </ul>

          <ul className="right">
            <li>
              <a href="#"><i className=" material-icons">add</i></a>
            </li>
      
            <li>
              <a href="mobile.html"><i className="material-icons">more_vert</i></a>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default ChatroomToolbar
