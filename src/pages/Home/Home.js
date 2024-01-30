import React from "react";
import HeroSection from "./HeroSection";
import ProductsListing from "./ProductsListing";
import OffersSection from "./OffersSection";
import BenefitsBar from "./BenefitsBar";
import CustomerReviews from "./CustomerReviews";
import ContributedBrandsBar from "./ContributedBrandsBar";
import LatestNews from "./LatestNews";

export default function Home() {
  return (
    <>
      <div className="container">
        <HeroSection />
        <ProductsListing />
        <OffersSection />
        <BenefitsBar />
        <CustomerReviews/>
        <ContributedBrandsBar/>
        <LatestNews/>
      </div>
    </>
  );
}
