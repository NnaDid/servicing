import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { ServiceCard } from '../serviceCard';

const ServicesContainer  = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`;

const Title = styled.h1`
    font-weight:900;
    color:#000;
    justify-content:flex-start;
`;

const ServicesWrapper =styled.div`
    display:flex;
    flex-wrap:wrap; 
`;

const WarningText = styled.h3`
    color:red;
    font-weight:800;
`;

export function Services(props) {
const [offeredServices, setServices] = useState([]);
const [isLoading, setLoading]        = useState(false);

const isServicesEmpty = !offeredServices || ( offeredServices && offeredServices.length===0);


const fetchServices = async ()=>{ 
    setLoading(true);
    const resp = await axios.get('http://localhost:9000/services')
                        .catch((err)=>(console.log(err)))
    if(resp){
        setServices(resp.data)
    }
    setLoading(false);
}

useEffect(() => {
    fetchServices();
}, [])


    return (
        <ServicesContainer>
            <Title> Most used services and More</Title>
            <ServicesWrapper>
                {isServicesEmpty && !isLoading && <WarningText> No Services published yet</WarningText>}
                {isLoading && <WarningText> loading...</WarningText>}
                {!isServicesEmpty && !isLoading && offeredServices.map((service,idx)=>(
                    <ServiceCard key ={idx} {...service}/>
                ))}
            
            </ServicesWrapper>
        </ServicesContainer>
    )
}

