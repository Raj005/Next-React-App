import { Image } from './style';

const ImageComponent = props => {
  const { src } = props;

  return <Image src={src} />;
};

export default ImageComponent;
