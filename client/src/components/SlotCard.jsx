import React from 'react'
import styled from 'styled-components'
import Avatar from "@mui/material/Avatar";
import { IconButton } from '@mui/material';
import FavouriteIcon from "@mui/icons-material/Favorite"
import car from "../images/car.png"

const Card = styled.div`
    position: relative;
    text-decoration: none;
    background-color:  ${({theme}) => theme.card};
    max-width: 220px;
    height: 150px;
    width: 80px;
    // display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    border-radius: 6px;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);

    &:hover {
        cursor: pointer;
        transform: translateY(-8px);
        transition: all 0.4s ease-in-out;
        box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
        filter: brightness(1.3);
    }
`;

const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // height: 150px;
    position: relative;
`;

const CardImg = styled.img`
    object-fit: cover;
    width: 70px;
    height: 120px;
    border-radius: 6px;
    box-shadow : 0 4px 30px rgba(0, 0, 0, 0.3);
    &:hover{
        box-shadow : 0 4px 30px rgba(0, 0, 0, 0.4);
    }

`;
const Favourite = styled(IconButton)`
    color: white;
    top: 8px;
    right: 6px;
    padding: 6px !important;
    border-radius: 50%;
    z-index: 100;
    display: flex;
    align-items: center;
    background: ${({theme}) => theme.text_secondary};
    color: white !important;
    position: absolute !important;
    backdrop-filter: blur(4px);
    box-shadow: 0 0 16px 6px #222423 !important;
`;

const Info = styled.div`
    display: flex;
    align-items: flex-end;
    font-weight: 450;
    padding: 14px 0px 0px 0px;
    width: 100%;
`;

const MainInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4px;
`;

const Title = styled.div`
    overflow: hidden;
    display: flex;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    color: ${({theme}) => theme.text_primary};
`;

const Descryption = styled.div`
    overflow: hidden;
    display: flex;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    color: ${({theme}) => theme.text_secondary};
`;

const CreatorInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: 6px;
`;

const Creator = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    // justify-content: space-between;

`;

const CreatorName = styled.div`
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${({theme}) => theme.text_secondary};
`;

const Views = styled.div`
    font-size: 10px;
    color: ${({theme}) => theme.text_secondary};
    width: max-content;
`;
// const Card = styled.div``;


const podcastCard = () => {
  return (
    <Card>
        <div>
        <Top>
            <Favourite>
                <FavouriteIcon style={{width: "16px", height: "16px"}}/>
            </Favourite>
            <CardImg src={car} />
            

        </Top>
        <Info>
            <MainInfo>
                <Title>Slot 1 </Title>
                {/* <Descryption>
                    {" "}
                    Lorem, ipsum dolor sit amet consectetur
                </Descryption> */}
                {/* <CreatorInfo>
                    <Creator>
                        <Avatar style={{width: "26px" , height: "26px"}}>S</Avatar>
                        <CreatorName>sumit</CreatorName>
                    </Creator>
                    <Views>12 views</Views>
                </CreatorInfo> */}
            </MainInfo>

        </Info>

        </div>




    </Card>
  )
}

export default podcastCard