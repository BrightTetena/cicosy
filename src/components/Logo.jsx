import React from 'react';
import Section from './Section';
import  zapf  from "../assets/Images/zapf.png";
import newworld from "../assets/Images/newworld.webp";
import Heading from './Heading';

const Logo = () => {
    const logos = [
        {
          src: zapf,
          alt: "Zapf"
        },
        {
          src: newworld,
          alt: "Reform"
        },
        {
          src: zapf,
          alt: "Tuple"
        },
        {
          src: zapf,
          alt: "SavvyCal"
        },
        {
          src: zapf,
          alt: "Statamic"
        },
        {
          src: zapf,
          alt: "Laravel"
        }
    ]; 

    return (
        <Section crosses className="text-white py-16">
            <div className='container overflow-hidden'>
                <Heading
                            className="md:max-w-md lg:max-w-3xl mx-auto text-center mb-12"
            title="Trusted by the best companies in the world"
                />

                <div className="relative overflow-hidden [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
                    <div className="flex animate-scroll group hover:[animation-play-state:paused]">
                        {/* First set */}
                        {logos.map((logo, index) => (
                            <div
                                key={`first-${index}`}
                                className="mx-10 flex-shrink-0 flex items-center justify-center"
                                style={{ width: '200px', height: '80px' }}
                            >
                                <img
                                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                                    src={logo.src}
                                    alt={logo.alt}
                                />
                            </div>
                        ))}
                        
                        {/* Second set (duplicate) */}
                        {logos.map((logo, index) => (
                            <div
                                key={`second-${index}`}
                                className="mx-8 flex-shrink-0 flex items-center justify-center"
                                style={{ width: '200px', height: '80px' }}
                            >
                                <img
                                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                                    src={logo.src}
                                    alt={logo.alt}
                                />
                            </div>
                        ))}
                        
                        {/* Third set (for extra smoothness) */}
                        {logos.map((logo, index) => (
                            <div
                                key={`third-${index}`}
                                className="mx-8 flex-shrink-0 flex items-center justify-center"
                                style={{ width: '200px', height: '80px' }}
                            >
                                <img
                                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                                    src={logo.src}
                                    alt={logo.alt}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100% / 3));
                    }
                }
                
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                    width: max-content;
                }
            `}</style>
        </Section>
    );
};

export default Logo;