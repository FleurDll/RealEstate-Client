import React from 'react';
import { Card, CardText, EmailIcon } from "./EmailCardElements";

const EmailCard = () => {
    return (
        <Card>
            <EmailIcon />
            <CardText>amelie.dufour@happy-immo.fr</CardText>
        </Card>
    );
};

export default EmailCard;
