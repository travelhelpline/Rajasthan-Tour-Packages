"use client"
import Breadcrumb from "@/components/Breadcrumb";
import TourPackages from "@/components/TourPackages";
import { agraTourPackagesData } from "@/data/data";
import { allStatesImages } from "@/data/imageData";
import useShowAll from "@/Utility/useShowAll";
import { Carousel } from "react-bootstrap";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const Agra = () => {
  // show all component
  const { visibleItems, showAll, toggleShowAll } =
    useShowAll(agraTourPackagesData);
  return (
    <>
      <Breadcrumb breadcrumbKey="agra" />
      {/* banner */}
      <div className="container-fluid home-banner destination-banner position-relative px-0">
        <Carousel fade pause={false} controls={false}>
          <Carousel.Item>
            <img src={allStatesImages.agra.agraBanner.src} alt="Home Banner" />
            <Carousel.Caption>
              <h1 className="text-capitalize">agra</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* packages */}
      <div className="container packages">
        <div className="row d-flex justify-content-center align-items-stretch my-5">
          <h2 className="text-capitalize">
            agra <span className="fw-normal">tour packages</span>
          </h2>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {visibleItems.map((pkg, index) => (
              <TourPackages key={index} pkg={pkg} />
            ))}
          </div>
          <div className="row d-flex w-100 justify-content-center align-items-center">
            <button
              onClick={toggleShowAll}
              className="more-btn bg-transparent d-flex justify-content-center align-items-center gap-2"
            >
              {showAll ? (
                <>
                  Show less <MdExpandLess />
                </>
              ) : (
                <>
                  View all <MdExpandMore />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agra;
