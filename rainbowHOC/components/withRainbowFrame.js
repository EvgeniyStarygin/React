import React from 'react';

// вариант с возвратом классового компонента
// function withColorBackground(color) {
//     return function(Comp) {
//       return props => (
//         <div style={{backgroundColor:color,border:"solid red 1px"}}>
//           <Comp {...props} />
//         </div>
//       );
//     };
// }

let withRainbowFrame = colors => Comp => props =>
  colors.reduce((acc, color) => (<div style={{ padding: "20px", border: `5px solid ${color}` }}>{acc}</div>), (<div style={{ textAlign: "center" }}> <Comp {...props} /></div>))


export { withRainbowFrame };
