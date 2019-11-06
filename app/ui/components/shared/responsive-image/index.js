import { ResponsiveImageWrapper } from './style';

const ResponsiveImageContainer = props => {
  const { width, children } = props;

  return (
    <ResponsiveImageWrapper width={width}>{children}</ResponsiveImageWrapper>
  );
};

export default ResponsiveImageContainer;
