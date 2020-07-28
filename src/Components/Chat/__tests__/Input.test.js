import React from 'react';
import { shallow, mount } from 'enzyme';

import Input from '../Input/Input';

describe('textarea', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<Input />);
  });

  it('shows the textarea', () => {
    expect(wrapped.find('.inputTextArea').length).toEqual(1);
  });

  it('shows the send button', () => {
    expect(wrapped.find('.sendMessageButton').length).toEqual(1);
  });

  it('shows the upload photo button', () => {
    expect(wrapped.find('.uploadPhotoButton').length).toEqual(1);
  });
});

describe('input some data input text area and click send button', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(<Input />);
  });

  it('');
});
