import React from 'react'
import styled from 'styled-components';
import SlotCard from '../components/SlotCard';;

const Container = styled.div`
  display: flex;
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  flex-direction: column;
  gap: 20px;
`;
const FavouriteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 18px 6px;
  @media (max-width: 550px){
    justify-content: center;
  }
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


const Favourites = () => {
  return (
    <Container>
      <Topic>Favourites</Topic>
      <FavouriteContainer>
        <SlotCard/>
        <SlotCard/>
        <SlotCard/>
      </FavouriteContainer>
    </Container>
  )
}

export default Favourites