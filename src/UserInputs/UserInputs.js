import React from "react";

const userInput = (props)=>{
    return (
        <input type="text" onChange={props.change} placeholder={props.currentUsername}/>
    )
}

export default userInput;