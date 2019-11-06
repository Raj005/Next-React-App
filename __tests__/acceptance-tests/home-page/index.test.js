import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import IndexPage from '../../../pages/index';

let mountedComponent;

beforeEach(() => {
  const mockStore = configureMockStore();
  const store = mockStore({
    cars: {
      data: []
    }
  });
  mountedComponent = mount(
    <Provider store={store}>
      <IndexPage />
    </Provider>
  );
});

describe('Home page', () => {
  it('should render without throwing an error', () => {
    expect(mountedComponent.find('div').text()).toBe('Mobile.de Home page');
  });
});
