import React, { useState, useEffect } from 'react';
import sanityClient from "../../../client";
import EstimationCriteres from './estimationCriteres';
import PhoneCard from "../../cards/phoneCard";
import EmailCard from "../../cards/emailCard";
import { EstimationContainer, EstimationWrapper, EstimationImage, ColumnLeft, ColumnRight, EstimationTitle, EstimationText, EstimationDescription, EstimationContactWrapper, EstimationProposition, EmailCardWrapper } from "./EstimationElements";

const Estimation = () => {
    const [textData, setTextData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "estimationText"]{
                text1,
                text3,
                criteres1,
                criteres2,
                criteres3,
                criteres4,
                contactPhrase,
                imageEstimation {
                    asset->{
                        _id, 
                        url
                    }
                }
        }`)
            .then((data) => setTextData(data[0]))
            .catch(console.error);
    }, []);

    if (!textData) return <div></div>;

    return (
        <EstimationContainer id="estimation">
            <EstimationWrapper>
                <ColumnLeft>
                    <EstimationImage src={textData.imageEstimation.asset.url} alt="image maison" />
                </ColumnLeft>
                <ColumnRight>
                    <EstimationTitle>{textData.text1}</EstimationTitle>
                    <EstimationText>
                        <EstimationDescription>{textData.text3}</EstimationDescription>
                        {textData.criteres1 && <EstimationCriteres text={textData.criteres1} />}
                        {textData.criteres2 && <EstimationCriteres text={textData.criteres2} />}
                        {textData.criteres3 && <EstimationCriteres text={textData.criteres3} />}
                        {textData.criteres4 && <EstimationCriteres text={textData.criteres4} />}
                    </EstimationText>
                    <EstimationProposition>{textData.contactPhrase}</EstimationProposition>
                    <EstimationContactWrapper>
                        <PhoneCard />
                        <EmailCardWrapper to="contact" smooth={true} duration={500} spy={true} exact="true" offset={-80} >
                            <EmailCard />
                        </EmailCardWrapper>
                    </EstimationContactWrapper>
                </ColumnRight>
            </EstimationWrapper>
        </EstimationContainer>
    );
};

export default Estimation;
