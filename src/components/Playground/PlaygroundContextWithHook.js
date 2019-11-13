// https://egghead.io/lessons/react-use-the-usecontext-hook-to-consume-context-in-function-components

import React, {useState, useContext} from "react";

import { UserContext } from '../../UserContext';


const Playground = () => {

    //managing local state using useState hook
    const [text, setText] = useState(""); 
    const [checked, setChecked] = useState(false);

    //using context via useContext hook
    const {user} = useContext(UserContext);
   

    const handleCheckboxToggle = e => {
        setChecked(e.target.checked);
    }

    return (
        <section>
            <h3>Playground component</h3>
            <p>Mirrors the input values</p>
            <p>hello {user}</p>
            <input 
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}>
            </input>
            <input 
            type="checkbox"
            value={checked}
            onChange={handleCheckboxToggle}>
            </input>
            <ul>
                <li>Input value: {text}</li>
                <li>Checkbox value: {checked.toString()}</li>
                <li>Current User: {user}</li>
            </ul>
        </section>  
    )

}


export default Playground;
