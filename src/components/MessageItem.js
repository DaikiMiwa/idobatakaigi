import { ListItem, ListItemAvatar, ListItemText, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import React from "react";

import { gravatarPath } from '../gravatar'

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    },
}));

const MessageItem = ({ name, text }) => {
    const classes = useStyles();
    const avatarPath = gravatarPath(name);
    return (
        <ListItem alignItems="flex-start"
            divider={true}
        >
            <ListItemAvatar>
                <Avatar src={avatarPath} />
            </ListItemAvatar>
            <ListItemText
                primary={name}
                secondary={
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        {text}
                    </Typography>
                }
            >
            </ListItemText >
        </ListItem >

    )
}

export default MessageItem
