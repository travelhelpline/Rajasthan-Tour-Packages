import Breadcrumb from "@/components/Breadcrumb";
import TourPackages from "@/components/TourPackages";
import { _04DaysToursData } from "@/data/data";

export const metadata = {
  title: '04-days-rajasthan-tour-packages',
  description: "",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/04-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: '04-days-rajasthan-tour-packages',
    description: "",
    url: 'https://www.rajasthantourpackages.in/04-days-rajasthan-tour-packages',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
}
const FourDaysRajasthanTourPackages = () => {
  return (
    <>
      {/* bread crumb */}
      <Breadcrumb breadcrumbKey="_04Days" />
      {/* header */}
      <div className="container-fluid py-5 page-head-section">
        <div className="container">
          <h1 className="text-capitalize">
            04 days{" "}
            <span className="fw-normal d-block"> rajasthan tour packages</span>
          </h1>
        </div>
      </div>
      <div className="container packages py-2">
        <div className="row py-4 d-flex align-items-stretch px-2">
          {_04DaysToursData.map((pkg, index) => (
            <TourPackages key={index} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FourDaysRajasthanTourPackages;