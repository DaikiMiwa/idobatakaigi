import React from "react";
import { Grid } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/Styles'

const useStyles = makeStyles( {
    root:{
        margin: 26,
        gridRow: 2 ,
    },
})

const MessageInputField = ()=>
{
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid xs={1}>
                    <Avatar />
                </Grid>
                <Grid xs={10}>
                    入力
                </Grid>
                <Grid xs={1}>
                    ボタン
                </Grid>
            </Grid>
        </div>
    )
}

export default MessageInputField
