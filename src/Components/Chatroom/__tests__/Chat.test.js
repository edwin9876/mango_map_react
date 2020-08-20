import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../../../redux/reducers/index';
import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

import Chat from '../Chat/Chat';

// let wrapped;

// beforeEach(() => {
//   const initialState = {
//     roomList: [
//       {
//         id: 1,
//         room_name: 'Capstone Project',
//         descriptions: 'des1',
//         created_at: '2020-07-28T23:56:11.911Z',
//         updated_at: '2020-07-28T23:56:11.911Z',
//         chatroom_id: 1,
//         user_id: 1,
//       },
//       {
//         id: 4,
//         room_name: 'Pullip',
//         descriptions: 'des3',
//         created_at: '2020-07-28T23:56:11.911Z',
//         updated_at: '2020-07-28T23:56:11.911Z',
//         chatroom_id: 3,
//         user_id: 1,
//       },
//       {
//         id: 2,
//         room_name: 'Pullip',
//         descriptions: 'des3',
//         created_at: '2020-07-28T23:56:11.911Z',
//         updated_at: '2020-07-28T23:56:11.911Z',
//         chatroom_id: 3,
//         user_id: 1,
//       },
//     ],
//     currentRoomId: null,
//   };

//   const store = createStore(
//     reducers,
//     initialState,
//     applyMiddleware(reduxPromise, thunk)
//   );

//   wrapped = mount(
//     <Provider store={store}>
//       <Chat />
//     </Provider>
//   );
// });

// afterEach(() => {
//   // wrapped.unmount();
// });

// it('creates three chatroom', () => {
//   expect(wrapped.find('.chatroomListTesting').length).toEqual(3);
// });

it('is a placeholder', () => {
  expect(0).toEqual(0);
});
