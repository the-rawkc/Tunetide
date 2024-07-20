import React from "react";
import { useSelector } from "react-redux"; // Add this line
import { Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router,} from "react-router-dom";
import HappyPage from "./components/emotions/HappyPage";
import SadPage from "./components/emotions/SadPage";
import EnergeticPage from "./components/emotions/EnergeticPage";
import CalmPage from "./components/emotions/CalmPage";

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from "./components";
import {
  Home,
  Search,
  Artists,
  ArtistDetails,
  SongDetails,
  Recent,
  Podcast,
} from "./pages";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

const MainPage = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#6e6ef9]">
        <Searchbar />

        <div className="px-6 h-[100vh] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/podcast" element={<Podcast />} />
              <Route path="/recent" element={<Recent />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
      <Route path="/genre/:genre" element={<HappyPage />} />
      <Route path="/genre/:genre" element={<SadPage />} />
      <Route path="/genre/:genre" element={<EnergeticPage />} />
      <Route path="/genre/:genre" element={<CalmPage />} />

              {/* <Route path="/sad" element={<SadPage />} />
        <Route path="/energetic" element={<EnergeticPage />} />
        <Route path="/calm" element={<CalmPage />} /> */}
              {/* <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} /> */}
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit w-[20.1rem]">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default MainPage;
