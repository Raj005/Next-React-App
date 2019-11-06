import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ViewItemPageWrapper } from '../../hocs';
import { mapStateToProps } from './reduxMethods';
import config from '../../../config';
import { Title, Description } from './style';
import { RenderCarImages } from './components';

class ViewItemPage extends React.Component {
  constructor(props) {
    super(props);
  }

  createImageUrl(imageUri, imageSize) {
    const {
      smallImageUrlExtension,
      largeImageUrlExtension,
      imageExtension,
      imageUrlProtocol
    } = config;
    const imageUrlExtension =
      imageSize === 'large' ? largeImageUrlExtension : smallImageUrlExtension;

    return `${imageUrlProtocol}://${imageUri}${imageUrlExtension}${imageExtension}`;
  }

  pluckCarImages(images) {
    return images.map(image => {
      return {
        smallImageUrl: this.createImageUrl(image.uri),
        largeImageUrl: this.createImageUrl(image.uri, 'large')
      };
    });
  }

  render() {
    const { car } = this.props;
    const carImages = this.pluckCarImages(car.images);
    return (
      <>
        <Title>{car.title}</Title>
        <Description>{car.htmlDescription}</Description>
        <RenderCarImages carImages={carImages} />
      </>
    );
  }
}

ViewItemPage.propTypes = {
  car: PropTypes.object.isRequired
};

export default ViewItemPageWrapper(connect(mapStateToProps)(ViewItemPage));
