import React from 'react'
import styled from 'styled-components';
import {Link } from "react-router-dom";

import SlotCard from '../components/SlotCard';

const DashboardMain = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px){
  padding: 6px 10px;}
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.bg};
  border-radius: 10px;
  padding: 20px 30px;

`;

const Topic = styled.div`
  color: ${({theme}) => theme.text_primary};
  font-size : 24px;
  font-weight: 500;
  display: flex;
  // flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px){
    font-size: 18px;
  }

`;
const Span = styled.div`
  color: ${({theme}) => theme.secondary};
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 768px){
    font-size: 14px;
  }
`;

const Slots = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 18px 6px;
  
  @media (max-width: 550px){
    justify-content: center;
    overflow-x: scroll;
  }
`;



const Dashboard = () => {
  return (
    <DashboardMain>
      <FilterContainer>
        <Topic>
          Parking Area 1
          <Link to={'/showpodcasts/mostpoppular'} style={{textDecoration: "none"}}>
          <Span >Show all</Span>
          </Link>
        </Topic>
        
        <Slots>
          <SlotCard/>
          <SlotCard/>
          <SlotCard/>
          <SlotCard/>
          <SlotCard/>
          <SlotCard/>
          <SlotCard/>
          <SlotCard/>
         
          
        </Slots>
      </FilterContainer>

      <FilterContainer>
        <Topic>
          Parking Area 2
          <Link to={'/showpodcasts/comedy'} style={{textDecoration: "none"}}>
          <Span >Show all</Span>
          </Link>
        </Topic>
        <Slots>
          <SlotCard/>
          <SlotCard/>
          <SlotCard/>
        </Slots>
      </FilterContainer>
    </DashboardMain>
  )
}

export default Dashboard;