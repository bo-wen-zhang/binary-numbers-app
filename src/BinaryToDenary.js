import React, { useState } from 'react';
import ButtonRow from './ButtonRow';
import LabelRow from './LabelRow';
import Result from './Result';

export default function BinaryToDenary({decimalPlaceValues}) {
    const [binaryValues, setBinaryValues] = useState(Array.from(Array(8), () => 0));
    const [decimalResult, setDecimalResult] = useState(0);

    return (
    <React.Fragment>
      <div className="scale">
        <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'Center',
                        alignItems: 'Center',
                        height: '75vh',
        }}>
        <div style={{transform: 'scale(3)'}}>
          <LabelRow decimalPlaceValues={decimalPlaceValues}/>
          <ButtonRow binaryValues={binaryValues} decimalPlaceValues={decimalPlaceValues} setBinaryValues={setBinaryValues} setDecimalResult={setDecimalResult} decimalResult={decimalResult}/>
          <Result decimalResult={decimalResult}/>
        </div>
        </div>
      </div>

    </React.Fragment>
    )

}