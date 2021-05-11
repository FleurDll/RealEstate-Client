import React, { useState, useEffect } from 'react';
import sanityClient from "../../../client";
import { Card, CardText, MobileIcon } from "./PhoneCardElements";

const PhoneCard = () => {
    const [textData, setTextData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "infoPerso"]{
                phone
        }`)
            .then((data) => setTextData(data[0]))
            .catch(console.error);
    }, []);

    if (!textData) return <div></div>;

    return (
        <Card>
            <MobileIcon />
            <CardText>{textData.phone}</CardText>

        </Card>
    );
};

export default PhoneCard;
