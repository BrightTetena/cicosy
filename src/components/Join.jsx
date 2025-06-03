import SpotlightCard from "../assets/Reactbits/SpotlightCard/SpotlightCard";
import Section from "./Section"; 
import StarBorder from "../assets/Reactbits/StarBorder/StarBorder";


const Join = () => {
  return (
    <Section>
      <div className="container " >
        <SpotlightCard className="spotlight-card">
          {/* Content Container */}
          <div className="content-wrapper">
            {/* Left Content */}
            <div className="text-content">
              <h1 className="heading">Cicosy Open Source</h1>
              <p className="description">
                Experience the products in Cloud Computing, Storage, Networking, Security, Big Data, and Artificial Intelligence on Cicosy Cloud.
              </p>
            </div>
            
            {/* Right Content - Button */}
                    <StarBorder 
              as="button"
              className="custom-class"
              color="#FFCC00"
              speed="2s"
            >
              join Us
            </StarBorder>
          </div>
        </SpotlightCard>
      </div>
    </Section>
  );
}

export default Join;