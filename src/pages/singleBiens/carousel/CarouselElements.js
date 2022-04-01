import styled, { css } from "styled-components";
import { COLORS } from "../../../constantsStyles";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

export const CarouselWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${'' /* margin: 10px; */}
`;

export const ImagesSlide = styled.div`
    max-width: 700px;
`;

export const ImagesSlider = styled.div`
    display: flex;
    justify-content: center;
`;

export const Images = styled.img`
    width: 100%;
    height: 466px;
    object-fit: cover;
    box-shadow: rgb(0 0 0 / 50%) 0px 0.0625rem 0.1875rem 0px;
    border-radius: 8px;

    @media screen and (max-height: 680px) {
        height: 350px;
    }
`;

export const SliderButtons = styled.div`
     margin-top: 10px;
`;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    ${'' /* background: ${COLORS.mainBlue}; */}
    border-radius: 50px;
    padding: 10px;
    margin: 20px 1rem 20px ;
    user-select: none;
    transition: 0.3s;

    &:hover {
        background: ${COLORS.mainBlue};
        transform: scale(1.05);
    }
`;

export const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;

export const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`;