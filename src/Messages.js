import React, {useState} from 'react';
import './Messages.css';

const Messages = (props)=>{
    return (
    <div className="bordered margined" onClick={props.dismiss}>
     {props.message}    
    </div>
    );
}

export default Messages