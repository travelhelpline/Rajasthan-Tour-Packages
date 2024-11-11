
import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import ReadMoreToggle from "@/components/ReadMore";
import TourCarousel from "@/components/TourCarousel";
import TourPackages from "@/components/TourPackages";
import { tourFromBangalore } from "@/data/CitiesData";
import { bangaloreFaq } from "@/data/faqData";
import { allStatesImages } from "@/data/imageData";
import { Bangalore } from "@/data/tourByCitiesData";

export const metadata = {
  title: 'Rajasthan Tour Package from Bangalore | Rajasthan Tour Packages',
  description: 'Learn the beauty of the Rajasthan tour package from Bangalore. Enjoy royal experiences, cultural sights, and luxury stays. Book your Rajasthan tour today.',
  keywords: ['Rajasthan Tour Package From Bangalore', 'Rajasthan Tour From Bangalore', 'Rajasthan Honeymoon Packages', 'honeymoon tour packages'],
  alternates: {
    canonical: "http://www.rajasthantourpackages.in/rajasthan-tour-from-banglore",
  },
  openGraph: {
    title: 'Rajasthan Tour Package from Bangalore | Rajasthan Tour Packages',
    description: 'Learn the beauty of the Rajasthan tour package from Bangalore. Enjoy royal experiences, cultural sights, and luxury stays. Book your Rajasthan tour today.',
    url: "http://www.rajasthantourpackages.in/rajasthan-tour-from-banglore",
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
};


const RajasthanTourFromBangalore = () => {
  const images = [
    { src: allStatesImages.bangalore.bangaloreBanner.src,
      alt: allStatesImages.bangalore.bangaloreBanner.alt,
      title: allStatesImages.bangalore.bangaloreBanner.title,
     },
  ];

  const content = [
    {
      duration: '',
      title: 'Rajasthan Tour From Bangalore',
    },
  ];
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="rajasthanTourFromBangalore" />
      {/* banner */}
      <div className="container-fluid home-banner days-banner-container destination-banner position-relative px-0">
        <TourCarousel images={images} content={content} />
      </div>
      {/* data */}
      <div className="container-fluid">
        <div className="container py-5">
          <div className="row px-2">
            <p className="home-para cities-para">
              <span
                className="home-para d-block"
                dangerouslySetInnerHTML={{ __html: tourFromBangalore.intro }}
              ></span>
              <ReadMoreToggle>
                <>
                  {tourFromBangalore.showMoreContent.map((content, index) => (
                    <span
                      className="home-para d-block"
                      key={index}
                      dangerouslySetInnerHTML={{ __html: content }}
                    ></span>
                  ))}
                </>
              </ReadMoreToggle>
              <span className="py-4 d-block"></span>
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
              dangerouslySetInnerHTML={{ __html: tourFromBangalore.package }}
            ></h2>
          </div>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {Bangalore.slice(0, 3).map((pkg, index) => (
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
            <Faq faqs={bangaloreFaq.questions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RajasthanTourFromBangalore;
