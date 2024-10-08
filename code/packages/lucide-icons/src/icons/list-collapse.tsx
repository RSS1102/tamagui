import React from "react";
import PropTypes from 'prop-types';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text as _Text,
  Use,
  Defs,
  Stop } from
'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}>

      <Path d="m3 10 2.5-2.5L3 5" stroke={color} />
      <Path d="m3 19 2.5-2.5L3 14" stroke={color} />
      <Path d="M10 6h11" stroke={color} />
      <Path d="M10 12h11" stroke={color} />
      <Path d="M10 18h11" stroke={color} />
    </Svg>);

};

Icon.displayName = 'ListCollapse';

export const ListCollapse = React.memo<IconProps>(themed(Icon));