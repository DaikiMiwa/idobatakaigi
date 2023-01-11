import React, { useState} from 'react';

import Main from './Main';
import SignIn from "./SignIn"
import config from "../config.json"

export default () => {
    const [name, setName] = useState('')
    console.log({ name })
    if (config.signInEnabled && name === ''){
        console.log({ name })
        return <SignIn setName={setName}/>
    }else{
        console.log({ name })
        return <Main name={name} />
    }
};
