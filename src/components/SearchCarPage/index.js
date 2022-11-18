import React from "react";
import Footer from "../Footer";
import ListCars from "../ListCars";
import MainSection from "../MainSection";
import Nav from "../navbar";

function SearchCar() {
  return (
    <div>
      <Nav />
      <MainSection />
      <ListCars/>
      <Footer/>
    </div>
  );
}

export default SearchCar;
