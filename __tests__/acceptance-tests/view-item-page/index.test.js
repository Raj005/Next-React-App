import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import CarPage from '../../../pages/cars/[id]';

const mockData = {
  title: 'some title',
  htmlDescription: 'some description',
  images: [
    {
      uri: 'i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-F/$',
      set: 'fe4cfedffdffffffff'
    },
    {
      uri: 'i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-F/$',
      set: 'fe4cfedffdffffffff'
    },
    {
      uri: 'i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/GvsAAOxyZzlTcg-L/$',
      set: 'fe4cfedffdffffffff'
    },
    {
      uri: 'i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-F/$',
      set: 'fe4cfedffdffffffff'
    },
    {
      uri: 'i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/GpoAAOxyZzlTcg-F/$',
      set: 'fe4cfedffdffffffff'
    },
    {
      uri: 'i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/GpoAAOxyZzlTcg-F/$',
      set: 'fe4cfedffdffffffff'
    },
    {
      uri: 'i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/Z6UAAOxyCTtTcg-L/$',
      set: 'fe4cfedffdffffffff'
    }
  ]
};

let mountedComponent;

beforeEach(() => {
  const mockStore = configureMockStore();
  const store = mockStore({
    cars: {
      data: mockData
    }
  });
  mountedComponent = mount(
    <Provider store={store}>
      <CarPage />
    </Provider>
  );
});

describe('Car page', () => {
  it('should render cars images', () => {
    const totalCarImagesLength = mountedComponent.find('img.smallImage').length;
    expect(totalCarImagesLength).toBe(mockData.images.length);
  });

  it('should render title', () => {
    const titleElement = mountedComponent.find('div').at(0);
    const titleText = titleElement.text();
    expect(titleText).toBe(mockData.title);
  });

  it('should render description', () => {
    const descriptionElement = mountedComponent.find('div').at(1);
    const description = descriptionElement.text();
    expect(description).toBe(mockData.htmlDescription);
  });

  it('should render larger car modal on click', () => {
    const firstCarImage = mountedComponent.find('img.smallImage').first();
    firstCarImage.simulate('click');
    expect(
      mountedComponent.find('div.__react_modal_image__modal_container').length
    ).toBe(1);
  });

  it('should close larger car modal on click on close button (X)', () => {
    const firstCarImage = mountedComponent.find('img.smallImage').first();

    firstCarImage.simulate('click');

    const closeButton = mountedComponent
      .find(
        'div.__react_modal_image__modal_container .__react_modal_image__header a'
      )
      .at(2);
    closeButton.simulate('click');

    expect(
      mountedComponent.find('div.__react_modal_image__modal_container').length
    ).toBe(0);
  });
});
