import Heading from "./Heading";
import Section from "./Section";
import ShinyText from "../assets/Reactbits/ShinyText/ShinyText";
import Arrow from "../assets/svg/Arrow"
import { benefits } from "../constants/index";
import SpotlightCard from "../assets/Reactbits/SpotlightCard/SpotlightCard";
import {GradientLight} from "./design/Benefits";

const Home = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading 
          className="md:max-w-md lg:max-w-3xl mx-auto text-center mb-12"
          title="Cicosy AI Applications"
          tag="Cicosy AI provides over 40 turnkey Enterprise AI applications that meet the business-critical needs of global enterprises in manufacturing, financial services, government, utilities, oil and gas, chemicals, agribusiness, defense and intelligence, and more.

"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <SpotlightCard 
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] group"
              key={item.id}
            >
              <div className="relative z-3 flex flex-col h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <ShinyText className="body-2 mb-6  flex-1 custom-class" text={item.text} disabled={false} speed={3} />
              
                <div className="flex items-center pointer-events-auto">
                  <img 
                    className="cursor-pointer" 
                    src={item.iconUrl} 
                    width={48} 
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto cursor-pointer font-code text-xs font-bold uppercase tracking-wider">
                    Explore More
                  </p>
                  <Arrow/>
                </div>
              </div>
              
              {item.light && <GradientLight/>}
              
              <div className="absolute inset-0.5 bg-n-8" style={{clipPath: "url(#benefits)"}}>
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-40 z-1"> 
                  {item.imageUrl && ( 
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={380}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div> 
      </div>
    </Section>
  );
};

export default Home;