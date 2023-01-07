import React from 'react';
import ColumnLabel from './ColumnLabel';

export default function LabelRow({decimalPlaceValues}) {
    const labels = [];
    for (let i=0; i<8; i++) {
        labels.push(<ColumnLabel value={decimalPlaceValues[i]}/>)
    }
    return (
        <React.Fragment>
            <div className="parent">
                {labels}
            </div>
        </React.Fragment>
    );
}