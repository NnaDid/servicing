import React from 'react'
import styled from 'styled-components';
import LogoImg from '../../images/logo/logo.png';

const BrandLogoContainer = styled.div`
    display:flex;
    align-items:center;
`;

const LogoImage = styled.div`
    width: ${({size})=>size ? size+"px":"1.8em"};
    height: ${({size})=>size ? size+"px":"1.8em"};

    img{
        width:100%;
        height:100%;
    }
`;

const LogoTitle = styled.h2`
    margin:0;
    font-size:${({ size })=> size ? size + "px":"35px"};
    color:#fff;
    font-weight:600;
    margin-left:7px;
`;


export function BrandLogo(props) {
    const { Logosize, titleSize } = props;
    return  (
        <BrandLogoContainer>
            <LogoImage size={Logosize}>
                <img src={LogoImg} alt="logo image"/>
            </LogoImage>
            <LogoTitle  size={titleSize}>Servycing</LogoTitle>
        </BrandLogoContainer>
    )
}
 
