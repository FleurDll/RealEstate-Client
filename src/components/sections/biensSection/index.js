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

    const newList = [];

    if (!housesData) return <div></div>;

    housesData.forEach(house => {
        if (house.statut === "aVendre") {
            newList.splice(0, 0, house);
        } else if (house.statut === "sousCompromis") {
            newList.splice(1, 0, house);
        } else if (house.statut === "venduAuPrix") {
            newList.splice(2, 0, house);
        } else if (house.statut === "vendu") {
            newList.splice(3, 0, house);
        }
    });

    return (
        <HousesContainer id="biens" >
            <HousesWrapper >
                {newList && newList.map((house) => {
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
