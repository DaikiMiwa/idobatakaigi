import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { pushMessage } from "../firebase"

const MessageField = ({name, setText, text})=>
{ 
    const [isComposed, setIsComposed] = useState(false)
    console.log({text})
    return (
        <TextField fullWidth={true} 
            onChange={(e)=>{
                setText( e.target.value )
            }}
            onKeyDown={(e) =>{ 
                const text = e.target.value
                if (e.key === "Enter" && !isComposed && text!==''){
                    pushMessage({name:"ハムさん", text})
                    e.preventDefault();
                    setText('')
                }
            }
            }
            onCompositionStart={ (e)=> { setIsComposed(true) } }
            onCompositionEnd={ (e)=> { setIsComposed(false) } }
            value={text}
        />
    )
}

export default MessageField
