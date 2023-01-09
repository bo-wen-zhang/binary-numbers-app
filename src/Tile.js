import React from "react";

export default function Tile({binaryValue, onClickTile}) {
    return <button className="tile" onClick={onClickTile}><span className="front">{binaryValue}</span></button>;
}