import React, {useState} from "react";
import { Grid } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/Styles'
import { gravatarPath } from "../gravatar";
import MessageField from "./MessageFieldComponent";

const useStyles = makeStyles( {
    root:{
        margin: 26,
        gridRow: 2 ,
    },
})

const MessageInputField = ({ name })=>
{
    const classes = useStyles();
    const avatarPath = gravatarPath(name);

    const [text, setText] = useState('')

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid xs={1}>
                    <Avatar src={avatarPath}/>
                </Grid>
                <Grid xs={10}>
                    <MessageField name={name} setText={setText} text={text}/>
                </Grid>
                <Grid xs={1}>
                    ボタン
                </Grid>
            </Grid>
        </div>
    )
}

export default MessageInputField
