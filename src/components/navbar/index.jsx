import React from 'react'
import styled from 'styled-components'
import { BrandLogo } from '../brandlogo';
import { Button } from '../button';
import { Marginer } from '../marginer';
import { Link } from 'react-router-dom'

const NavBarContainer =styled.div`
        width:100%;
        height:65px;
        display:flex;
        align-items:center;
        padding:0 1.2em;
        justify-content:space-between;
        background-color:${({ useTransparent})=> useTransparent ? "transparent":"#264653"}
`;

const AccessiblityContainer = styled.div`
   height:100%;
   display:flex;
   align-items:center;
`;

const AnchorLinks = styled.a`
    font-size:14px;
    color:#fff;
    cursor:pointer;
    text-decoration:none; 
    outline:none;
    transition: all 200ms ease-in-out;

    &:hover{
        filter:contrast(0.6);
    }
`;

const Separator = styled.div`
    min-height:35%;
    width:1px;
    background-color:#fff;
`;



export function NavBar(props) {
    const { useTransparent } = props;
    return (
        <NavBarContainer useTransparent ={useTransparent}>
            <BrandLogo />
            <AccessiblityContainer>
                 <Link to ='/'>
                     <AnchorLinks> Specialist portal</AnchorLinks>
                </Link>
                <Marginer direction ='horizontal' margin ={14}/>              
                <Separator />
                <Marginer direction ='horizontal' margin ={14}/>
                <Link to ='/customer/access'>
                     <Button size={11}>Register</Button>
                </Link> 
                <Marginer direction ='horizontal' margin ={10}/>
                <AnchorLinks> Login </AnchorLinks>
            </AccessiblityContainer>
        </NavBarContainer>
    )
}

 
