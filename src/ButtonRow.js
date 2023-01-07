import React from "react";
import Tile from './Tile';

export default function ButtonRow({binaryValues, decimalPlaceValues, setBinaryValues, setDecimalResult, decimalResult}) {

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

    const buttons = [];
    for (let i=0; i<8; i++) {
        buttons.push(<Tile binaryValue={binaryValues[i]} onClickTile={() => handleClick(i)}/>)
    }

    return (
        <React.Fragment>
            <div className="parent">
                {buttons}
            </div>
        </React.Fragment>
    );
}