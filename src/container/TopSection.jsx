import React from 'react'
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { BrandLogo } from '../components/brandlogo';
import { Button } from '../components/button';
import { Marginer } from '../components/marginer';
import { deviceSize } from '../components/responsive';
import TopSectionBackgroundImg from '../images/landing-page.jpg';
import WorkImg  from '../images/work.png';


const TopSectionContainer = styled.div`
    width:100%;
    height:800px;
    background:url(${TopSectionBackgroundImg});
    background-position:0px -150px;
    background-size:cover;
`;


const BackgrondFilter = styled.div`
    width:100%;
    height:100%;
    background-color:rgb(38,70,83, 0.9);
    display:flex;
    flex-direction:column;
`;

const TopSectionInnerContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`;

const StandoutImage = styled.div`
    width:37em;
    height:32em;

    img{
        height:100%;
        width:100%;
    }
`;

const LogoContainer = styled.div`
    align-items:flex-start;
    display:flex;
    flex-direction:column;
`;


const SloganText  = styled.div`
    margin:0;
    line-height:1.4;
    color:#fff;
    font-weight:500;
    font-size:25px;
    word-spacing:5px;
`;


function TopSection(props) {
    const { children } = props;
    const isMobile = useMediaQuery({maxWidth:deviceSize.mobile});
    return (
        <TopSectionContainer> 
                <BackgrondFilter> 
                    {children}
                    <TopSectionInnerContainer>
                        <LogoContainer>
                            <BrandLogo Logosize ={isMobile ? 20 : 65} titleSize ={isMobile ? 20: 55}/>
                            <Marginer direction='vertical' margin ={8} />
                            <SloganText> Find the right specialist</SloganText>
                            <SloganText> for the right job</SloganText>
                            <Marginer direction='vertical' margin ={15} />
                            <Button>Join now </Button>
                        </LogoContainer>
                        {isMobile && (
                             <StandoutImage>
                                 <img src ={WorkImg} alt ="Something amazing here"/>
                             </StandoutImage> 
                        )
                            
                        }
                    </TopSectionInnerContainer>   
                </BackgrondFilter>    
         </TopSectionContainer>
    )
}

export default TopSection;
