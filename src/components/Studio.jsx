import Section from "./Section";
import Heading from "./Heading";
import Tag from "./design/Foot";
import ShinyText from "../assets/Reactbits/ShinyText/ShinyText";
import Stack from "./design/Stack"
import PixelCard from "./design/PixelCard";
import SpotlightCard from "../assets/Reactbits/SpotlightCard/SpotlightCard"

import { service1, check, service4, service2 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons} from "../constants"
import { Gradient, } from "./design/Services"
import Generating from "./Generating";

const Studio = () => {
  const images = [
  { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
  { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
  { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
  { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
];

  return (
    <Section className="overflow-hidden " id="roadmap"> 
        <div className="container  md:pb-10">
            <Heading
            className="md:max-w-md lg:max-w-3xl mx-auto text-center mb-12"
            title="Cicosy AI Studio"
            tag="Information Technology Courses to expand your skills and boost your career & salary"
            
            />
           <div className=" relative">
            <div className="z-1  flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[42rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">

              <img className="w-full h-full object-cover md:object-right"
              width={800} 
              height={730}
              alt="AI Studio"
              src={service1} 
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto" >
              <h4 className="h4 mb-4">Cicosy AI</h4>
              <p className=""></p>
              <ShinyText text="Cicosy Unlocks THE potential of ai powered apllications" disabled={false} speed={3} className='custom-class body-2 mb-[3rem] ' />
              <ul className="body-2">{brainwaveServices.map((item, index) => (

<li className="flex item-start py-4 border-t border-n-6 " key={index}>
  
<img src={check}  />
<p className="ml-4">{item}</p>

  
</li>

              ))}</ul>
            </div>

  <Generating  className='absolute left-4 right-4 bottom-4 border border-n-1/10 lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2'/>
            
            </div>





           </div>


<div className="relative z-1 grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
 <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden ">
  <div className="flex flex-col h-full">
    {/* Image section */}
    <div className="flex-1 flex items-center justify-center">
      <img 
        src={service4} 
        alt="voicewave" 
        className="w-full  object-cover"
        width={650}
        height={420}
      />
    </div>
    
    {/* Text section */}
    <div className="p-8 bg-gradient-to-b from-n-8/0 to-n-8/90">
      <h4 className="h4 mb-4">Speech Intelligence</h4>
      <Tag tag="AI-Enhanced Audio for Enterprise Productivity" />
      <p className="">
       
      </p>
      <ShinyText text=" We deploy speech AI to empower voice-driven enterprise workflows, real-time transcription, emotion recognition, and multilingual support. This ensures a seamless conversational experience between humans and our systems, breaking down technical and linguistic barriers." disabled={false} speed={3} className='body-2 mb-[3rem]' />
    </div>
  </div>
</div>
<div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
<div className="py-12 px-3 xl:px-8">
<h4 className="h4 mb-4">Video Intelligence </h4>
<Tag
tag="AI-Driven Video Processing & Automation "
/>
<p className=""></p>
   <ShinyText text="We are building video AI tools that generate, analyze, and summarize video content for training,
   compliance, sales, and operational monitoring. By embedding video intelligence across our suite, we help enterprises scale knowledge-sharing, training, and customer engagement without expensive video production." disabled={false} speed={3} className='body-2 mb-[2rem] ' />
   <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25  md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
</div>

<div className="relative h-[20rem] bg-n-8/10 rounded-xl overflow-hidden md:h-[25rem]">
<iframe className="w-full object-cover" width="520" height="400" src="https://www.youtube.com/embed/NXpdyAWLDas?si=ftuYh7c4Keb3qNe1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</div>

  
<SpotlightCard className="relative min-h-[50rem] border border-n-1/10 rounded-3xl overflow-hidden">
  <div className="flex flex-col h-full">
    {/* Stack component in the upper portion - responsive container */}
    <div className="flex-1 flex items-center justify-center px-4 py-8">
    <div className="relative h-[20rem] bg-n-8/10 rounded-xl overflow-hidden md:h-[25rem] w-full">
        <img 
          className="w-full h-full object-cover rounded-xl"
          width="700" 
          height="400" 
          src={service2} 
          alt="" 
        />
      </div>
    </div>

    {/* Text content at the bottom */}
    <div className="p-6 sm:p-8 bg-gradient-to-b from-n-8/0 to-n-8/90">
    <h4 className="h4 mb-4">Natural Language Processing</h4>
      <Tag tag="AI-Powered Text Generation & Automation " />
      <p className="">
      
      </p>
      <ShinyText text=" We are deploying advanced Natural Language Processing (NLP) and Generation (NLG) models across our suite to automate communication, documentation, and intelligence extraction. From auto-generating financial reports to dynamically drafting contracts or sales proposals based on CRM insights, our text AI accelerates decision-making and minimizes human error." disabled={false} speed={3} className='custom-class body-2 mb-[3rem] text-sm sm:text-base' />
    </div>
  </div>
</SpotlightCard>



<Gradient/>

<SpotlightCard className="relative min-h-[50rem] border border-n-1/10 rounded-3xl overflow-hidden">
  <div className="flex flex-col h-full">
    {/* Stack component in the upper portion - responsive container */}
    <div className="flex-1 flex items-center justify-center px-4 py-8">
      <div className="w-full aspect-[5/4] max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px]">
        <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={{ 
            width: 280, // Base size for mobile
            height: 224 // Maintains 5:4 aspect ratio
          }}
          cardsData={images}
        />
      </div>
    </div>

    {/* Text content at the bottom */}
    <div className="p-6 sm:p-8 bg-gradient-to-b from-n-8/0 to-n-8/90">
      <h4 className="h4 mb-4">Computer Vision</h4>
      <Tag tag="AI-Generated Images for Enterprise Intelligence" />
  
<ShinyText text="  We leverage computer vision and generative AI to turn data into visual intelligence. Whether it's generating product images, analyzing factory environments, or detecting anomalies in warehouse operations, our Image AI capabilities enrich both back-office and customer-facing processes." disabled={false} speed={3} className='custom-class body-2 mb-[3rem] text-sm sm:text-base' />
    </div>
  </div>
</SpotlightCard>




</div>


        </div>
      
    </Section>
  )
}

export default Studio