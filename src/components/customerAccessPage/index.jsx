import React from 'react'
import styled from 'styled-components'
import { AccountBox } from '../accountBox'
import { NavBar } from '../navbar'
import { InnerPageContainer, PageContainer } from '../pageContainer'

const StyledInnerContainer = styled(InnerPageContainer)`
    margin-top:4em;
`;

export function CustomerAccessPage(props) {
    return (
        <PageContainer>  
                <NavBar />
                <StyledInnerContainer>
                    <AccountBox />
                </StyledInnerContainer>
                
        </PageContainer>
    )
}

