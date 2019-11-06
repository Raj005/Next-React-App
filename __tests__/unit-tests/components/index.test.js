import renderer from 'react-test-renderer';
import {
  Image,
  ResponsiveImageContainer,
  ModalImageComponent
} from '../../../app/ui/components/shared';

describe('Image component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Image />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ResponsiveImageContainer component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<ResponsiveImageContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ModalImageComponent component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<ModalImageComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
