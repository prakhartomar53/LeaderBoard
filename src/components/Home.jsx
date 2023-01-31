import React from "react";
import About from "./About";
import Leaderboard from "./Leaderboard";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Leaderboard />
      <About />
    </>
  );
}

export default Home;
