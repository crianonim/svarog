import React from 'react';
import './Messages.css';

const Messages = (props)=>{
    const [type,msg] = parseMessage(props.message);
    return (
    <div className={" has-vmargin-med "+ (msg!=="" ?"":"invisible")}  onClick={props.dismiss}>
     <p className={"message message-type-"+type}>{msg}</p>    
    </div>
    );
}
const parseMessage = message => {
    if (!message) return ["",""];

    // if (!message) return ["","Empty"];
    let type="i";
    let msg=message;
    if (message[1]==="#"){
        type=message[0].toLowerCase();
        msg=message.substring(2);
    }
    return [type,msg]
}
export default Messages