import { ListItem, ListItemAvatar, ListItemText, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"
import React, { useRef, useEffect } from "react";

import { gravatarPath } from '../gravatar'

const useStyles = makeStyles(() => ({
    inline: {
        display: 'inline',
    },
}));

const MessageItem = ({ name, text, isLastItem }) => {
    const ref = useRef(null)
    const classes = useStyles();
    const avatarPath = gravatarPath(name);

    useEffect(() => {
        if (isLastItem) {
            // TODO: scrollしたい
            ref.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [isLastItem])



    return (
        <ListItem alignItems="flex-start"
            divider={true}
            ref={ref}
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
