import { unit, fontSizes, breakpoints } from './variables';
import { css } from 'styled-components';

export const space = (multiplier = 1, baseUnit = unit) => {
  return multiplier * baseUnit + 'px';
};

export const font = ({
  size = 'small',
  weight = 400,
  family = 'Montserrat',
  lineHeight = 1.125
} = {}) => {
  const fontSize = fontSizes[size] || size;

  return `${weight} ${fontSize}px / ${lineHeight} ${family}`;
};

export const getBreakpointValue = (breakpointValue, unit = 'px') => {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue] + unit;
  } else if (parseInt(breakpointValue)) {
    return breakpointValue + unit;
  } else {
    console.warn('Not a valid breakpoint');
    return '0';
  }
};

export const media = {
  lessThan: breakpoint => (...args) => css`
    @media (max-width: ${getBreakpointValue(breakpoint)}) {
      ${css(...args)};
    }
  `,
  greaterThan: breakpoint => (...args) => css`
    @media (min-width: ${getBreakpointValue(breakpoint)}) {
      ${css(...args)};
    }
  `,
  between: (firstBreakpoint, secondBreakpoint) => (...args) => css`
    @media (min-width: ${getBreakpointValue(
        firstBreakpoint
      )}) and (max-width: ${getBreakpointValue(secondBreakpoint)}) {
      ${css(...args)};
    }
  `
};

export default {
  space,
  font,
  media
};
