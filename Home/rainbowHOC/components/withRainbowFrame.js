import React from 'react';

let withRainbowFrame = colors => Comp => props =>
  colors.reduce((acc, color) => (<div style={{ padding: "20px", border: `5px solid ${color}` }}>{acc}</div>), (<div style={{ textAlign: "center" }}> <Comp {...props} /></div>))


export { withRainbowFrame };
