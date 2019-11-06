import styled from 'styled-components';
import { fontSizes, font, media, space } from '../../styles';

export const Title = styled.div`
  display: flex;
  font: ${font({ size: 'heading', weight: 600 })};
  margin: 0 0 ${space(3)};

  ${media.lessThan('tablet')`
    font-size: ${fontSizes.large}px;
  `};
`;

export const Description = styled.div`
  display: flex;
  font: ${font({ size: 'medium', weight: 400 })};
  margin: 0 0 ${space(3)};

  ${media.lessThan('tablet')`
    font-size: ${fontSizes.medium}px;
  `};
`;
