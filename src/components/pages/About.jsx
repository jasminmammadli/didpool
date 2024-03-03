import React from "react";
import About1 from "./../../assets/img/about-1.jpg";
import About2 from "./../../assets/img/about-2.jpg";
import About3 from "./../../assets/img/about-3.jpg";
import About4 from "./../../assets/img/about-4.jpg";
function About() {
  return (
    <div>
      <div className="about-section pt-16 pb-32">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="w-[45%]">
              <h2 className="text-dark-blue font-[Inter-700] text-[40px] leading-[48.41px] mb-9">
                We wanted to build a company that you will love to work with and
                connect to
              </h2>
              <p className="font-[Inter-400] text-lg leading-7">
                We’re doing things bigly, I mean really quite big. The way we
                operate is different from other companies because we disrupt. We
                break the code, we crack the code as well.
              </p>
            </div>
            <div className="w-[30%] h-96 girl-section rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto ">
        <div className="flex justify-between pt-[90px] pb-[75px]">
          <div className="w-[41%]">
            <h2 className="font-[Inter-700] text-4xl leading-[48.41px] mb-8">
              When we get to work we really make things happen fast and
              powerfully
            </h2>
            <p className="font-[Inter-400] text-lg leading-7 mb-14">
              I want to fly like an angel flare on a ten feet snare I want to
              dance until the sun comes up I want to fight your cousin.
            </p>
            <button className="px-9 py-4 bg-majorelle rounded-lg font-[Inter-400] text-lg text-white">
              Sign up
            </button>
          </div>
          <div className="w-[48%] grid grid-cols-2 gap-y-14">
            <div>
              <p className="text-majorelle font-[Inter-700] text-6xl mb-8">
                32
              </p>
              <p className="text-dark-blue font-[Inter-700] text-lg mb-3">
                Cups of coffee
              </p>
              <p className="text-base font-[Inter-400] text-dark-blue">
                Designing this section
              </p>
            </div>
            <div>
              <p className="text-majorelle font-[Inter-700] text-6xl mb-8">
                412
              </p>
              <p className="text-dark-blue font-[Inter-700] text-lg mb-3">
                Team members
              </p>
              <p className="text-base font-[Inter-400] text-dark-blue">
                Working right now
              </p>
            </div>
            <div>
              <p className="text-majorelle font-[Inter-700] text-6xl mb-8">
                17
              </p>
              <p className="text-dark-blue font-[Inter-700] text-lg mb-3">
                Languages spoken
              </p>
              <p className="text-base font-[Inter-400] text-dark-blue">
                On our table in the pub
              </p>
            </div>
            <div>
              <p className="text-majorelle font-[Inter-700] text-6xl mb-8">
                2,142
              </p>
              <p className="text-dark-blue font-[Inter-700] text-lg mb-3">
                Dollars spent today
              </p>
              <p className="text-base font-[Inter-400] text-dark-blue">
                On khachapuri imeruli
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-[80px]">
          <div className="w-[33%]">
            <h5 className="text-majorelle font-[Inter-700] text-lg mb-7">
              Not your typical startup story
            </h5>
            <h2 className="text-4xl font-[Inter-700] text-dark-blue leading-[48.41px]">
              Our story isn’t usual but it is extra ordinary learn about it.
            </h2>
          </div>
          <div className="flex flex-col gap-5 w-[50%] text-lg font-[Inter-400]">
            <p>
              We’re doing things bigly, I mean really quite big. The way we
              operate is different from other companies because we disrupt. We
              break the code, we crack the code as well.{" "}
            </p>
            <p>
              Get to know how we work, who we are and what we value on this all
              inclusive beautiful web page that we put together.
            </p>
            <p>
              With a new approach to product design, management and even human
              resources we’ve transformed the market of digital goods and
              created something that is really great if you understand why.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center w-[495px] mx-auto mt-12 mb-5">
        <h2 className="font-[Inter-700] text-4xl leading-[48.41px]">
          Work shouldn’t be boring
        </h2>
        <p className="font-[Inter-400] text-base leading-6">
          I want to fly like an angel flare on a ten feet snare I want to dance
          until the sun comes I want to fight your cousin.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-12 min-h-[70vh] pb-10">
          <div className="w-[265px] h-[265px] -rotate-12">
            <img src={About1} alt="" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="self-end w-[265px] h-[315px] rotate-12">
            <img src={About2} alt="" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="w-[265px] h-[265px] -rotate-12">
            <img src={About3} alt="" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="self-end w-[265px] h-[275px] rotate-12">
            <img src={About4} alt="" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
      <div className="about-section-reverse py-[50px] rotate-180"></div>
    </div>
  );
}

export default About;
