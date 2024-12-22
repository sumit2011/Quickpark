import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

import { BrowserRouter , Route ,Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites";
import Profile from "./pages/Profile";
import SlotDetails from "./pages/SlotDetails";
import DisplayAllSlots from "./pages/DisplayAllSlots";



const Container = styled.div`
  display : flex;
  background: ${({theme}) => theme.bgLight};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex : 3;
`;

function App() {
  // hooks
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      
      <BrowserRouter>
      <Container>
        {menuOpen && (
          <Sidebar
          menuOpen={menuOpen}
          setMenuOpen= {setMenuOpen}
          setDarkMode = {setDarkMode}
          darkMode = {darkMode}
          />

        )}
        
        <Frame>
          <Navbar
            menuOpen={menuOpen}
            setMenuOpen= {setMenuOpen}
            setDarkMode = {setDarkMode}
            darkMode = {darkMode}
          />

          <Routes>
            <Route path="/" exact element = {<Dashboard/>} />
            {/* <Route path="/search" exact element = {<Search/>} /> */}
            <Route path="/favourites" exact element = {<Favourites/>} />
            <Route path="/profile" exact element = {<Profile/>} />
            <Route path="/podcastd/:id" exact element = {<SlotDetails
          />} />
            <Route path="/showpodcasts/:type" exact element = {<DisplayAllSlots/>} />
          </Routes>
          
        
        </Frame>
        
        </Container>
      </BrowserRouter>

    </ThemeProvider>
    
    
  );
}

export default App;
