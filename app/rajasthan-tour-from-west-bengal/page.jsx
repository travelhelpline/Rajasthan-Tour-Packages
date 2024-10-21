"use client"
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import TourPackages from "@/components/TourPackages";
import { tourFromWestBengal } from "@/data/CitiesData";
import { westbengalFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { WestBengal } from "@/data/tourByCitiesData";
import { useState } from "react";
import { Carousel } from "react-bootstrap";

const RajasthanTourFromWestBengal = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };
  return (
    <>

      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromWestbengal" />

      {/* banner */}
      <div className="container-fluid home-banner destination-banner position-relative px-0">
        <Carousel fade pause={false} controls={false}>
          <Carousel.Item>
            <img
              src={allStatesImages.westBengal.westBengalBanner.src}
              alt="Home Banner"
            />
            <Carousel.Caption>
              <h1 className="text-capitalize">
                rajasthan tour from{' '}
                <span className="fw-bold text-capitalize">west bengal</span>
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* data */}
      <div className="container-fluid">
        <div className="container py-5">
          <div className="row px-2">
            <p className="home-para cities-para">
              <span
                className="home-para d-block"
                dangerouslySetInnerHTML={{ __html: tourFromWestBengal.intro }}
              ></span>
              {showMore && (
                <>
                  {tourFromWestBengal.showMoreContent.map((content, index) => (
                    <span
                      className="home-para d-block"
                      key={index}
                      dangerouslySetInnerHTML={{ __html: content }}
                    ></span>
                  ))}
                </>
              )}
              <button className="read-more-btn" onClick={handleReadMore}>
                {showMore ? <>Show Less</> : <>..Read More</>}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* packages */}
      <div className="container-fluid section-02 py-4">
        <div className="container packages py-2">
          <div className="row">
            <h2
              className="fw-normal text-capitalize"
              dangerouslySetInnerHTML={{ __html: tourFromWestBengal.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {WestBengal.slice(0, 3).map((pkg, index) => (
              <TourPackages key={index} pkg={pkg} />
            ))}
          </div>
        </div>
      </div>

      {/* faq's */}
      <div className="container-fluid px-0 section-03">
        <div className="container py-5">
          <div className="row">
            <h3 className="mb-4">
              Frequently <span className="fw-normal">Asked Questions</span>
            </h3>
            <Faq faqs={westbengalFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanTourFromWestBengal;
