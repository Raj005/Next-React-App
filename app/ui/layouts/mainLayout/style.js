import styled from 'styled-components';
import { media, space } from '../../styles';

export const PageWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Page = styled.main`
  position: relative;
  flex: 1;
  padding: ${space(5)};
  min-height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  ${media.lessThan('tablet')`
    padding: ${space(3)} ${space(2)};
  `};
`;
