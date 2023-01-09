import React, {useState} from "react";

export default function DenaryToBinary() {

    const [state, setState] = useState({
        value: 0
    })

    const handleChange = (e) => {
        const newValue = e.target.value;
        if (/^\d{1,3}$/.test(newValue)){
            setState({value: newValue})
        }
        else if (newValue === "") {
            setState({value: ""})
        }
    }

    return (
        <div className="center">
        <span>{"Enter Denary Number"}</span>
        <input type="text" placeholder={"0"} value={state.value} onChange={(e) => handleChange(e)} />
        </div>
    );
}