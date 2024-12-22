import React from "react";
import styled from "styled-components";
import {Menu , PersonRounded} from "@mui/icons-material"; 
import { IconButton } from "@mui/material";
import Logo from "../images/download.png";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";


const NavbarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    // width: 100%;
    
    padding: 16px 40px;
    align-items: center;
    color: ${({ theme }) => theme.text_primary};
    gap: 30px;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);
    @media (max-width: 768px){
        height: 40px;
        padding: 16px;
        gap: 0px;
    }
`;

const ButtonDiv = styled.div`
    font-size: 14px;
    cursor: pointer;
    text-decoration : none;
    max-width : 70px;
    display: flex;
    align-items : center;
    color: ${({ theme }) => theme.secondary};
    border: 1px solid ${({ theme }) => theme.secondary};
    border-radius: 6px;
    padding: 8px 10px;
    gap: 8px;

`;

const IconBtn = styled(IconButton)`
    color: ${({ theme }) => theme.text_secondary} !important;

`;

const Elements = styled.div`
    padding: 4px 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    width: 100%;
    color: ${({ theme }) => theme.text_secondary};
`;

const NavBar = ({setMenuOpen , menuOpen, setDarkMode, darkMode}) => {

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <NavbarDiv>
            <IconBtn onClick={() => setMenuOpen(!menuOpen)}>
                <Menu/> 
            </IconBtn>
            <img src={Logo} alt="logo" style={{height: "50px" }}/>

            <Elements onClick={toggleDarkMode}>
                {darkMode ? <LightModeRounded /> : <DarkModeRounded />}
            </Elements>

            <ButtonDiv>
                <PersonRounded />
                {/* Login */}
            </ButtonDiv>
        </NavbarDiv>
    );
};

export default NavBar;
