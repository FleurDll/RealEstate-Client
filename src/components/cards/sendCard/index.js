import React from 'react';
import { Card, SendIcon, CardText } from "./SendCardElements"

const SendCard = () => {

    const handleClick = (e) => {
        e.preventDefault();
    };

    return (
        <Card onClick={handleClick}>
            <CardText>Envoyer</CardText>
            <SendIcon />
        </Card>
    );
};

export default SendCard;
