import React from 'react';

const ChatToolbar = ({ backToChatList }) => {
  return (
    <div>
      <nav>
        <div className='d-flex justify-content-between paddingy1'>
          <i className='material-icons' onClick={backToChatList}>
            arrow_back
          </i>

          <a href='#'>
            <i className=' material-icons'>add</i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default ChatToolbar;
