import React from "react";

export default function Result({decimalResult}) {
    return (
        <React.Fragment>
            <div className="parent">
                <div className="result">{decimalResult}</div>
            </div>
        </React.Fragment>
        
    );
}