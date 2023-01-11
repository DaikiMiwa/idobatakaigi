import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles( {
    root:{
        gridRow: 1 ,
    },
})

const MessageList = ()=>
{
    const classes = useStyles()
    return (
        <div className={classes.root}>MessageList</div>
    )
}

export default MessageList
