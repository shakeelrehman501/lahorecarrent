
import React from 'react'
import FeedbackCarousel from './FeedbackCarousel';
import Heading from '@/components/myComponents/Heading';
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";


function Feedback() {
  
  return (
    <div className=" w-full  relative pb-6">
  
  <div className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.7) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.7) 1px, transparent 1px),
        radial-gradient(circle 500px at 100% 100%, rgba(139,92,246,0.05), transparent),
        radial-gradient(circle 500px at 100% 100%, rgba(59,130,246,0.05), transparent)
      `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
  />
  

    <AnimatedSection className="py-15">
        
      <div className="w-full mx-auto   flex justify-center items-center">
        <div className='z-10 px-2'>
        <Heading
          heading="What Our "
          gradientHeading="Clients Say"
          paragraph='Hear directly from our valued clients about their experiences, trust, and satisfaction with our services.'
        />
        </div>
      </div>
      <AnimatedItem type='slideUp' index={0} >
      <FeedbackCarousel/>
      </AnimatedItem>
    </AnimatedSection>
     
    </div>
  );
}
export default Feedback;
