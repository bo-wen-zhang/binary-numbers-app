export default function Tile({binaryValue, onClickTile}) {
    return <button className="tile" onClick={onClickTile}>{binaryValue}</button>;
}