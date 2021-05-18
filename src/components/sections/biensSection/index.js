import React, { useEffect, useState } from 'react';
import sanityClient from "../../../client";
import BiensTop from './biensTop';
import BiensBottom from './biensBottom';
import { HousesContainer, HousesWrapper, HouseLink, HouseAnnonce } from "./BiensElements";

const Biens = () => {
    const [housesData, setHousesData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "biens"]{
            title,
            statut,
            slug,
            localisation,
            type,
            bathroom,
            chambres,
            garage,
            prix,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
            .then((data) => setHousesData(data))
            .catch(console.error);
    }, []);

    if (!housesData) return <div></div>;

    housesData.sort(function (a, b) {
        return a.statut - b.statut;
    });

    return (
        <HousesContainer id="biens" >
            <HousesWrapper >
                {housesData && housesData.map((house) => {
                    return (
                        <HouseLink to={`/biens/${house.slug.current}`} key={house.slug.current}>
                            <HouseAnnonce>
                                <BiensTop localisation={house.localisation}
                                    statut={house.statut}
                                    mainImageUrl={house.mainImage.asset.url}
                                    mainImageAlt={house.mainImage.asset.alt}
                                />
                                <BiensBottom
                                    title={house.title}
                                    garage={house.garage}
                                    type={house.type}
                                    bedroom={house.chambres}
                                    bathroom={house.bathroom}
                                    prix={house.prix}
                                />
                            </HouseAnnonce>
                        </HouseLink>
                    )
                })}
            </HousesWrapper>
        </HousesContainer>
    );
};

export default Biens;
