import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
    border:none;
    outline:none;
    color:#fff;
    padding:5px 1.5em;
    font-size: ${({ size })=> size ? size +"px":"18px"};
    font-weight:500;
    border-radius:3px;
    background-color:#2A9D8F;
    cursor:pointer;
    transition:all 200ms ease-in-out;

    &:hover{
        background-color:#2A9D80;
    }

    &:focus{
        outline:none;
        background-color:#2A0D8F;
    } 
`;

export function Button(props) {
    const { size } = props;
    return  <ButtonWrapper size ={size}> {props.children}</ButtonWrapper>
}

