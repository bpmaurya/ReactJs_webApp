import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/bg1.svg";
import Comman from './Comman'
function Home() {
  return (
    <>
      <Comman
        name="Grow your business"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
}

export default Home;
