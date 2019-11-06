import PropTypes from 'prop-types';

import {
  ResponsiveImageContainer,
  ModalImageComponent
} from '../../../../components/shared';
import { ImagesWrapper } from './style';

const RenderCarImages = props => {
  const { carImages } = props;

  return (
    <ImagesWrapper>
      {carImages.map((image, index) => (
        <ResponsiveImageContainer key={index} width={300}>
          <ModalImageComponent
            smallImageUrl={image.smallImageUrl}
            largeImageUrl={image.largeImageUrl}
          />
        </ResponsiveImageContainer>
      ))}
    </ImagesWrapper>
  );
};

RenderCarImages.propTypes = {
  carImages: PropTypes.array.isRequired
};

export default RenderCarImages;
