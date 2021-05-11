import React, { useState, useEffect } from 'react';
import sanityClient from "../../../client";
import { Card, CardText, EmailIcon } from "./EmailCardElements";

const EmailCard = () => {
    const [textData, setTextData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "infoPerso"]{
                email
        }`)
            .then((data) => setTextData(data[0]))
            .catch(console.error);
    }, []);

    if (!textData) return <div></div>;

    return (
        <Card>
            <EmailIcon />
            <CardText>{textData.email}</CardText>
        </Card>
    );
};

export default EmailCard;
