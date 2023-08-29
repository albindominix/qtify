import { Accordion } from "@mui/material";
import "./App.css";
import Card from "./components/Card/Card";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import NavBar from "./components/NavBar/NavBar";
import NewAlbums from "./components/NewAlbums/NewAlbums";
import TopAlbums from "./components/TopAlbums/TopAlbums";

function App() {
  return (
    <>
      <NavBar />
      <HeroBanner />
      <TopAlbums />
      <NewAlbums />
      {/* <Accordion/> */}
    </>
  );
}

export default App;
