import { useState } from "react";
import Spline from "@splinetool/react-spline";
import Section from "./Section";
import curve from "../assets/Images/curve.png";
import Particles from "../assets/Reactbits/Particles";
import StarBorder from "../assets/Reactbits/StarBorder/StarBorder";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <Section
      className="relative pt-[19rem] -mt-[5.25] overflow-hidden h-screen"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      {/* Particles positioned behind everything */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffCC00", "#ffffff"]}
          particleCount={100}
          particleSpread={15}
          speed={0.05}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Spline robot - Full section coverage */}
      <div className="absolute inset-0 z-10">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}

        {hasError && (
          <div className="">
            <div className="p-4 text-center">
              <p>Failed to load 3D model. Please refresh or try again later.</p>
            </div>
          </div>
        )}

        {/* Spline container covering entire section */}
        <div
          className="w-full h-full"
          style={{
            visibility: isLoading ? "hidden" : "visible",
          }}
        >
          <Spline
            scene="https://prod.spline.design/dhcryT4Fp87ihtSj/scene.splinecode"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
          />
        </div>
      </div>

      {/* Content layer - Above the Spline robot */}
      <div className="container relative z-20 pointer-events-none">
        <div className="text-center max-w-[62rem] mx-auto mb-[2rem] md:mb-10 lg:mb-[2rem]">
          <h1 className="h1 mb-6">
            <span className="inline-block relative">
              Cicosy
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                alt="curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            We build intelligent systems tailored to your industry needs.
            Providing exceptional developer experiences for industry leading
            companies
          </p>

          {/* Enable pointer events only for interactive elements */}
          <div className="pointer-events-auto mt-5">
            <StarBorder
              as="button"
              className="custom-class"
              color="#FFCC00"
              speed="2s"
            >
              Get Started
            </StarBorder>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
