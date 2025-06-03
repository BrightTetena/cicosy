import Section from "./Section";
import Heading from "./design/Foot";
import { socials } from "../constants";
import ShinyText from '../assets/Reactbits/ShinyText/ShinyText'

const Footer = () => {

  const footerData = [
    {
      heading: "What's new",
      items: ["Billing", "CrowdHive", "Joina Online", "Joina Online", "CrowdHive", "Billing", "Joina Online", "CrowdHive", "Billing"],
    },
    {
      heading: "Cicosy Store",
      items: [
        "Finance & Accounting",
        "Supply Chain Management",
        "Sales & Marketing",
        "Human Capital Management",
        "Mining & Natural Resources",
        "Production Management",
      ],
    },
    {
      heading: "Education",
      items: [
        "Manufacturing",
        "Distribution",
        "Retail",
        "Services",
        "Mining & Natural Resources",
        "Transport & Logistics",
        "Agribusiness & Forestry",
      ],
    },
    {
      heading: "Business",
      items: [
        "Cicosy Cloud",
        "Cicosy Security",
        "Astute",
        "Cicosy 365",
        "Cicosy Power Platform",
        "Cicosy Teams",
        "Cicosy Industry",
        "Small Business",
      ],
    },
    {
      heading: "Developer & IT",
      items: [
        "Cicosy",
        "Developer Center",
        "Documentation",
        "Cicosy Tech Community",
        "Cicosy Marketplace",
        "App Source",
        "Visual Studio",
      ],
    },
    {
      heading: "Company",
      items: [
        "Careers",
        "About Cicosy",
        "Company News",
        "Privacy at Cicosy",
        "Investors",
        "Diversity & Inclusion",
        "Accessibility",
        "Sustainability",
      ],
    },
  ];

  return (
    <Section crosses className="! px-0 !py-10 ">
      <footer className="container relative z-2">    
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 lg:gap-12 xl:gap-16 py-16 lg:py-20">
          {footerData.map((section, index) => (
            <div key={index} className="min-w-0 flex-1"> 
              <Heading tag={section.heading} />
              <ul className="flex flex-col gap-4 text-sm lg:text-base mt-6 ">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="cursor-pointer" >
                    <ShinyText
                      text={item}
                      disabled={false}
                      speed={3}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section with copyright and social links */}
        <div className="px-4 py-6 sm:flex sm:items-center sm:justify-between border-t border-gray-200">
          <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
            <ShinyText
              text={`© ${new Date().getFullYear()} All Rights Reserved`}
              disabled={false}
              speed={3}
              className="caption text-n-4 lg:block"
            />
            <ul className="flex gap-5 flex-wrap">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  <img src={item.iconUrl} width={16} height={16} alt={item.title} />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;