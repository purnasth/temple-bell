import React from 'react';
import ContactInfo from '../components/ui/ContactInfo';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="relative px-0 pb-0">
        <div className="grid grid-cols-4 gap-24 px-12">
          <div className="col-span-2 space-y-4">
            <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-4xl lg:leading-snug xl:text-5xl 2xl:leading-normal">
              A place by the lake
            </h3>
            <p className="text-sm md:text-base">
              Temple Bell Boutique Hotel & SPA is a sanctuary of tranquility and
              elegance in the heart of Lakeside, Pokhara. Our boutique hotel
              offers a harmonious blend of modern comfort and traditional charm.
            </p>
            <div>
              <button className="origin-left scale-90 border border-logo-maroon bg-logo-maroon px-8 py-2 text-light">
                Book Now
              </button>
            </div>
          </div>
          <div className="col-span-1 space-y-4">
            <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-4xl lg:leading-snug xl:text-5xl 2xl:leading-normal">
              Contact
            </h3>
            <p className="text-sm md:text-base">
              Do you have any questions about your visit with us? We are happy
              to help:
            </p>
            <div>
              <button className="origin-left scale-90 border border-logo-maroon px-8 py-2 font-semibold text-logo-maroon">
                Enquiry
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-4xl lg:leading-snug xl:text-5xl 2xl:leading-normal">
              Socials
            </h3>
            <ContactInfo align="items-start justify-start" />
          </div>
        </div>
        <div className="h-80 w-full bg-[url('https://dayatra.purnashrestha.com.np/assets/img/patterns/mountains.webp')] bg-contain bg-top bg-repeat-x opacity-20 mix-blend-multiply"></div>

        <section className="border-t border-dark/20 p-4 text-dark md:py-8">
          <div className="mt-6 flex flex-col items-center justify-center gap-4 px-8 text-sm md:gap-8 md:text-base xl:mt-0 xl:flex-row xl:justify-between xl:gap-12">
            <span>© 2024 Hotel Da Yatra Courtyard | All Rights Reserved </span>
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <span>
                Website by: &nbsp;
                <a
                  className="font-semibold"
                  href="https://www.longtail.info/"
                  target="_blank"
                >
                  Longtail e-media
                </a>
              </span>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
