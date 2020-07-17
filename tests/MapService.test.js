import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { MapContainer } from '../src/Containers/Map/Map';

configure({ adapter: new Adapter() });

describe('A test case for test case...', () => {
  it("Wouldn't it be nice if I am wealthy, then I don't have to wait so long", () => {
    let wrapper = shallow(<MapContainer />);
    console.log(wrapper);
    expect(wrapper.find(Marker).toHaveLength(11));
  });
});
