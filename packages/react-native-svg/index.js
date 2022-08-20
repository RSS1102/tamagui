const React = require('react')

const exports = {
  Circle: (p) => React.createElement('circle', p),
  ClipPath: (p) => React.createElement('clipPath', p),
  Defs: (p) => React.createElement('defs', p),
  Ellipse: (p) => React.createElement('ellipse', p),
  ForeignObject: (p) => React.createElement('foreignObject', p),
  G: (p) => React.createElement('g', p),
  Image: (p) => React.createElement('image', p),
  Line: (p) => React.createElement('line', p),
  LinearGradient: (p) => React.createElement('lineargradient', p),
  Marker: (p) => React.createElement('marker', p),
  Mask: (p) => React.createElement('mask', p),
  Path: (p) => React.createElement('path', p),
  Pattern: (p) => React.createElement('pattern', p),
  Polygon: (p) => React.createElement('polygon', p),
  Polyline: (p) => React.createElement('polyline', p),
  RadialGradient: (p) => React.createElement('radialgradient', p),
  Rect: (p) => React.createElement('rect', p),
  Shape: (p) => React.createElement('shape', p),
  Stop: (p) => React.createElement('stop', p),
  Svg: (p) => React.createElement('svg', p),
  Symbol: (p) => React.createElement('symbol', p),
  Text: (p) => React.createElement('text', p),
  TextPath: (p) => React.createElement('clipPath', p),
  TSpan: (p) => React.createElement('tSpan', p),
  Use: (p) => React.createElement('use', p),
}

Object.assign(module.exports, exports)
export default exports
