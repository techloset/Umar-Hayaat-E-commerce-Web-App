import React from "react";
import InfoBar from "./InfoBar";
import Navbar from "./Navbar";
import BrandBar from "./BrandBar";

export default function index() {
  return (
    <>
      <header>
        <InfoBar />
        <BrandBar/>
        <Navbar />
      </header>
    </>
  );
}
