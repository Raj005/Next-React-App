import styled from 'styled-components';
import { media } from '../../../styles';

export const ResponsiveImageWrapper = styled.div`
  cursor: pointer;
  position: relative;
  max-width: 100%;
  margin: 10px;
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
  ${media.lessThan('tablet')`
    width:100%;
  `};
  & .smallImage {
    width: 100%;
  }
`;
