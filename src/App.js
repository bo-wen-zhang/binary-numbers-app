import React, { useState } from 'react';
// function App() {
//   return (
//     <div>
//       Hello World!
//     </div>
//   );
// }

function Tile({binaryValue, decimalValue, onClickTile}) {
  return <button className="tile" onClick={onClickTile}>{binaryValue}</button>;

}

export default function App() {
  const decimalPlaceValues = [128, 64, 32, 16, 8, 4, 2, 1];
  const [binaryValues, setBinaryValues] = useState(Array.from(Array(8), () => 0));
  const [decimalResult, setDecimalResult] = useState(0);

  function handleClick(index) {
    if (binaryValues[index] === 0) {
      binaryValues[index] = 1;
      setBinaryValues(binaryValues);
      const newResult = decimalResult + decimalPlaceValues[index];
      setDecimalResult(newResult);
    }
    else {
      binaryValues[index] = 0;
      setBinaryValues(binaryValues);
      const newResult = decimalResult - decimalPlaceValues[index];
      setDecimalResult(newResult);
    }
  }

  return (
    <React.Fragment>
      <div className="parent">
        <Tile binaryValue={binaryValues[0]} decimalValue={decimalPlaceValues[0]} onClickTile={() => handleClick(0)}/>
        <Tile binaryValue={binaryValues[1]} decimalValue={decimalPlaceValues[1]} onClickTile={() => handleClick(1)}/>
        <Tile binaryValue={binaryValues[2]} decimalValue={decimalPlaceValues[2]} onClickTile={() => handleClick(2)}/>
        <Tile binaryValue={binaryValues[3]} decimalValue={decimalPlaceValues[3]} onClickTile={() => handleClick(3)}/>
        <Tile binaryValue={binaryValues[4]} decimalValue={decimalPlaceValues[4]} onClickTile={() => handleClick(4)}/>
        <Tile binaryValue={binaryValues[5]} decimalValue={decimalPlaceValues[5]} onClickTile={() => handleClick(5)}/>
        <Tile binaryValue={binaryValues[6]} decimalValue={decimalPlaceValues[6]} onClickTile={() => handleClick(6)}/>
        <Tile binaryValue={binaryValues[7]} decimalValue={decimalPlaceValues[7]} onClickTile={() => handleClick(7)}/>
      </div>
      <div className="parent">
        {decimalResult}
      </div>
    </React.Fragment>
  );
}

