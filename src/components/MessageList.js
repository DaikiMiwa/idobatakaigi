import React, { useState, useEffect } from "react";
import { List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import MessageItem from "./MessageItem"


import { messagesRef } from "../firebase"

const useStyles = makeStyles({
    root: {
        gridRow: 1,
        overflow: 'auto',
        width: "100%"
    },
})

const MessageList = () => {
    const classes = useStyles()
    const [messages, setMessages] = useState([])

    useEffect(() => {
        console.log('useEffect')
        messagesRef.
            orderByKey().
            limitToLast(15).
            on("value", (snapshot) => {
                const messages = snapshot.val();
                if (messages === null) return;
                const entries = Object.entries(messages)
                const newMessages = entries.map((entry) => {
                    const [key, nameAndText] = entry;
                    return { key, ...nameAndText }
                });
                console.log(newMessages);
                setMessages(newMessages);
            });
    }, [])

    const length = messages.length

    return (
        <List className={classes.root}>
            {messages.map(({ key, name, text }, index) => {
                const isLastItem = length === index + 1

                return <MessageItem key={key} name={name} text={text} isLastItem={isLastItem} />
            })
            }
        </List>
    )
}



export default MessageList
