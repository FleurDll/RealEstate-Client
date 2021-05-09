import React, { useState, useEffect } from 'react';
import sanityClient from "../../../client";
import EstimationCriteres from './estimationCriteres';
import PhoneCard from "../../cards/phoneCard";
import { EstimationContainer, EstimationWrapper, EstimationImage, ColumnLeft, ColumnRight, EstimationTitle, EstimationText, EstimationDescription, EstimationContactWrapper } from "./EstimationElements";

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
                imageEstimation {
                    asset->{
                        _id, 
                        url
                    }
                }
        }`)
            .then((data) => setTextData(data))
            .catch(console.error);
    }, []);

    if (!textData) return <div></div>;

    return (
        <EstimationContainer id="estimation">
            <EstimationWrapper>
                <ColumnLeft>
                    <EstimationImage src={textData[0].imageEstimation.asset.url} alt="image maison" />
                </ColumnLeft>
                <ColumnRight>
                    <EstimationTitle>{textData[0].text1}</EstimationTitle>
                    <EstimationText>
                        <EstimationDescription>{textData[0].text3}</EstimationDescription>
                        <EstimationCriteres text={textData[0].criteres1} />
                        <EstimationCriteres text={textData[0].criteres2} />
                        <EstimationCriteres text={textData[0].criteres3} />
                        <EstimationCriteres text={textData[0].criteres4} />
                    </EstimationText>
                    <EstimationContactWrapper>
                        <PhoneCard />
                    </EstimationContactWrapper>
                </ColumnRight>
            </EstimationWrapper>
        </EstimationContainer>
    );
};

export default Estimation;
