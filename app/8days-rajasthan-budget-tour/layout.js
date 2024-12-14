export const metadata = {
  title: '8 Days Rajasthan Budget Tour Package | Rajasthan Tour Packages',
  description:
    'The beauty of Rajasthan in breaking the bank at our 8-Day Tour Package. Enjoy top destinations at a budget-friendly price. Book today at Rajasthan Tour Packages.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/8days-rajasthan-budget-tour',
  },
  openGraph: {
    title: '8 Days Rajasthan Budget Tour Package | Rajasthan Tour Packages',
    description:
      'The beauty of Rajasthan in breaking the bank at our 8-Day Tour Package. Enjoy top destinations at a budget-friendly price. Book today at Rajasthan Tour Packages.',
    url: 'https://www.rajasthantourpackages.in/8days-rajasthan-budget-tour',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: '8 Days Rajasthan Budget Tour Package | Rajasthan Tour Packages',
    description:
      'The beauty of Rajasthan in breaking the bank at our 8-Day Tour Package. Enjoy top destinations at a budget-friendly price. Book today at Rajasthan Tour Packages.',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
};

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}