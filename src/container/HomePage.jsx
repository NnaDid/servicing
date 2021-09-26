import styled from "styled-components";
import { NavBar } from "../components/navbar";
import { InnerPageContainer, PageContainer } from "../components/pageContainer";
import { deviceSize } from "../components/responsive";
import { ServiceCard } from "../components/serviceCard";
import { Services } from "../components/services";
import TopSection from "./TopSection";


const ContentContainer = styled.div`
    width:100%;
    max-width:${ deviceSize.laptop}px;
    display:flex;
    flex-direction:column;

`;


export function HomePage(){
    return (
        <PageContainer>
             <TopSection >
                 <NavBar/>
             </TopSection>
             <InnerPageContainer>
                <ContentContainer> 
                    <Services />
                </ContentContainer>
             </InnerPageContainer>
       </PageContainer>
    )
}