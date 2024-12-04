import Breadcrumb from "@/components/Breadcrumb";
import React from "react";

export const metadata = {
  title: 'Mewar Rajasthan 6 Days Tour | Rajasthan Tour Packages',
  description: "Enjoy a 6-day Mewar Tour to discover the royalties of Jodhpur, Jaisalmer, and other Mewar places. For your Mewar tour, contact Rajasthan Tour Packages.",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/6days-mewar-tour',
  },
  openGraph: {
    title: 'Mewar Rajasthan 6 Days Tour | Rajasthan Tour Packages',
    description: "Enjoy a 6-day Mewar Tour to discover the royalties of Jodhpur, Jaisalmer, and other Mewar places. For your Mewar tour, contact Rajasthan Tour Packages.",
    url: 'https://www.rajasthantourpackages.in/6days-mewar-tour',
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Mewar Rajasthan 6 Days Tour | Rajasthan Tour Packages',
    description: "Enjoy a 6-day Mewar Tour to discover the royalties of Jodhpur, Jaisalmer, and other Mewar places. For your Mewar tour, contact Rajasthan Tour Packages.",
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
}

const SixDaysMewarTourPackage = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="_6daysmewartour" />
      <div className="container-fluid py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">06 days mewar tour</h1>
        </div>
      </div>
    </>
  );
};

export default SixDaysMewarTourPackage;