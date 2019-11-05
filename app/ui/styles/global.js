import { createGlobalStyle } from 'styled-components';
import { normalize, fontFace } from 'polished';
import colors from './colors';
import { font } from './helpers';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  ${fontFace({
    fontFamily: 'Montserrat',
    fileFormats: ['ttf', 'woff'],
    fontWeight: '200',
    fontStyle: 'normal',
    fontFilePath: '/public/fonts/Montserrat-Light'
  })}

  ${fontFace({
    fontFamily: 'Montserrat',
    fileFormats: ['ttf', 'woff'],
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontFilePath: '/public/fonts/Montserrat-Regular'
  })}

  ${fontFace({
    fontFamily: 'Montserrat',
    fileFormats: ['ttf', 'woff'],
    fontWeight: 600,
    fontStyle: 'normal',
    fontFilePath: '/public/fonts/Montserrat-SemiBold'
  })}

  ${fontFace({
    fontFamily: 'Montserrat',
    fileFormats: ['ttf', 'woff'],
    fontWeight: 700,
    fontStyle: 'normal',
    fontFilePath: '/public/fonts/Montserrat-Bold'
  })}

  *,
  *::before,
  *::after {
    font: ${font()};
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    background-color: ${colors.ebonyClay};
  }

  body {
    color: #fff;
    background-color:  ${colors.ebonyClay};
  }

  a {
    color: ${colors.blue};
    text-decoration: none;
  }

  /**
   * Lock resizing in browser, to avoid issues
   * with vh units, such as dynamic location bar,
   * or dynamic bottom bar in ios safari
   */
  html,
  body,
  #__next {
    height: 100%;
    overflow: hidden;
  }
`;

export default GlobalStyle;
