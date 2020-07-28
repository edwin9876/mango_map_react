import React from 'react';

import { shallow } from 'enzyme';

import Chat from '../Components/Chat/ChatList';

it('renders the list of chatroom', () => {
  const wrapped = shallow(<Chat />);

  expect(wrapped.find(<div />).length.toEqual(4));
});
