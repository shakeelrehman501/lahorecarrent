import Image from "next/image";
import { feedbackCardItems } from "@/lib/data/constant";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  CarouselContent: React.ElementType;
  CarouselItem: React.ElementType;
  active: number;
}

function FeedbackCard({ CarouselContent, CarouselItem, active }: Props) {
  return (
    <>
      <CarouselContent className="flex items-center  my-10 mx-3  ">
        {feedbackCardItems.map((item, index) => {
          const isActive = index === active;
          return (
            <CarouselItem
              key={index}
              className="basis-[80%] px-4 
                  sm:px-6
                  md:basis-[55%] md:px-7
                  lg:basis-[50%] lg:px-8 
                  xl:basis-[40%]  
                  2xl:basis-[30%]  
                  "
            >
              <Card
                className={`relative transition-all duration-300 cursor-grab
                    ${isActive ? "scale-110 shadow-xl" : "opacity-90"}
                      text-xs w-full  p-4 flex 
                      sm:text-sm sm:p-5
                      lg:text-[16px] lg:p-6
                    `}
              >
                {isActive && (
                  <>
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-secondary/40" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-secondary/40" />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-secondary/40" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-secondary/40" />
                  </>
                )}

                <CardContent className="p-0">
                  <div className="space-y-8">
                    <div>
                      <h1 className="">{item.review}</h1>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 sm:gap-4 justify-center items-center">
                        <div className="w-5 h-5 p-4 bg-red-300 text-black rounded-full flex justify-center items-center">
                          <h1 className="font-semibold">
                            {item.firstCharacter}
                          </h1>
                        </div>
                        <div className="space-y-0.5">
                          <h1
                            className="font-semibold text-xs 
                            sm:text-[16px]"
                          >
                            {item.name}
                          </h1>
                        </div>
                      </div>
                      <div className="">
                        <Image
                          src="/others/ReviewStar.webp"
                          width={400}
                          height={400}
                          alt="Star"
                          loading="lazy"
                          className="w-14
                          sm:w-20
                          md:w-24
                          lg:w-30
                          xl:w-36
                          object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </>
  );
}

export default FeedbackCard;
