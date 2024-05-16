import React from "react";
import About1 from "./../../assets/img/about-1.jpg";
import About2 from "./../../assets/img/about-2.jpg";
import About3 from "./../../assets/img/about-3.jpg";
import About4 from "./../../assets/img/about-4.jpg";
import Person1 from "./../../assets/img/person1.jpg";
import Person2 from "./../../assets/img/person2.jpg";
import Person3 from "./../../assets/img/person3.jpg";
import Person4 from "./../../assets/img/person4.jpg";
import Person5 from "./../../assets/img/person5.jpg";
import Person6 from "./../../assets/img/person6.jpg";
import { FaInstagram } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { IoMdCheckmark } from "react-icons/io";

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
            <img
              src={About1}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="self-end w-[265px] h-[315px] rotate-12">
            <img
              src={About2}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-[265px] h-[265px] -rotate-12">
            <img
              src={About3}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="self-end w-[265px] h-[275px] rotate-12">
            <img
              src={About4}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="about-section-reverse py-[80px] rotate-180"></div>
      <div className="bg-light-grey pb-20">
        <h2 className="text-4xl font-[Inter-700] text-center text-dark-blue mb-16">
          A team of exceptional people
        </h2>
        <div className="grid grid-cols-3 w-8/12 mx-auto gap-y-10 mb-14">
          <div className="flex flex-col items-center">
            <div className="mb-[23px]">
              <img
                src={Person1}
                alt="person1"
                className="w-[200px] h-[200px] object-cover rounded-full"
              />
            </div>
            <div className="text-center">
              <h4 className="font-[Inter-700] text-2xl mb-2">Sophia Johnson</h4>
              <p className="text-lg font-[Inter-400] text-majorelle mb-4">
                Chief Innovator
              </p>
              <div className="flex justify-center gap-3">
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <MdFacebook />
                </span>
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <FaInstagram />
                </span>
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <FaTwitter />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-[23px]">
              <img
                src={Person2}
                alt="person1"
                className="w-[200px] h-[200px] object-cover rounded-full"
              />
            </div>
            <div className="text-center">
              <h4 className="font-[Inter-700] text-2xl mb-2">Ethan Mitchell</h4>
              <p className="text-lg font-[Inter-400] text-majorelle mb-4">
                Head of HR
              </p>
              <div className="flex justify-center gap-3">
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <MdFacebook />
                </span>
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <FaInstagram />
                </span>
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <FaTwitter />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-[23px]">
              <img
                src={Person3}
                alt="person1"
                className="w-[200px] h-[200px] object-cover rounded-full"
              />
            </div>
            <div className="text-center">
              <h4 className="font-[Inter-700] text-2xl mb-2">Emma Lee</h4>
              <p className="text-lg font-[Inter-400] text-majorelle mb-4">
                Chief Innovation Officer
              </p>
              <div className="flex justify-center gap-3">
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <MdFacebook />
                </span>
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <FaInstagram />
                </span>
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <FaTwitter />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-[23px]">
              <img
                src={Person4}
                alt="person1"
                className="w-[200px] h-[200px] object-cover rounded-full"
              />
            </div>
            <div className="text-center">
              <h4 className="font-[Inter-700] text-2xl mb-2">Lucas Anderson</h4>
              <p className="text-lg font-[Inter-400] text-majorelle mb-4">
                UX Writing Lead
              </p>
              <div className="flex justify-center gap-3">
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <MdFacebook />
                </span>
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <FaInstagram />
                </span>
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <FaTwitter />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-[23px]">
              <img
                src={Person6}
                alt="person1"
                className="w-[200px] h-[200px] object-cover rounded-full"
              />
            </div>
            <div className="text-center">
              <h4 className="font-[Inter-700] text-2xl mb-2">Oliver Patel</h4>
              <p className="text-lg font-[Inter-400] text-majorelle mb-4">
                Chief of Cutlery
              </p>
              <div className="flex justify-center gap-3">
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <MdFacebook />
                </span>
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <FaInstagram />
                </span>
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <FaTwitter />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-[23px]">
              <img
                src={Person5}
                alt="person1"
                className="w-[200px] h-[200px] object-cover rounded-full"
              />
            </div>
            <div className="text-center">
              <h4 className="font-[Inter-700] text-2xl mb-2">Your Name</h4>
              <p className="text-lg font-[Inter-400] text-majorelle mb-4">
                Your Opportunity
              </p>
              <div className="flex justify-center gap-3">
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <MdFacebook />
                </span>
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <FaInstagram />
                </span>
                <span className="p-3 border-2 border-[#d6d4de] rounded-full">
                  <FaTwitter />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-majorelle font-[Inter-400] text-lg py-4 px-9 rounded-lg text-white">
            See open vacancies
          </button>
        </div>
      </div>
      <div className="container mx-auto py-[60px]">
        <div className="flex justify-center mb-12">
          <BiSolidQuoteSingleLeft className="text-5xl text-majorelle" />
          <BiSolidQuoteSingleLeft className="text-5xl -ml-5 text-majorelle" />
        </div>
        <h1 className="text-5xl font-[Inter-700] text-center text-dark-blue max-w-[830px] mx-auto leading-[60px]">
          Imagine the best product you’ve used, times it by ten, and you’ll have
          something similar
        </h1>
      </div>
      <div className="bg-majorelle py-[100px]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="w-[60%]">
              <h1 className="text-4xl font-[Inter-700] text-white leading-[50px] mb-10">
                Sign up for your free trial, with the world’s best product tool
              </h1>
              <ul className="flex gap-10">
                <li className="flex items-center gap-4">
                  <span className="w-6 h-6 flex justify-center items-center bg-primary-light rounded-lg">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <span className="font-[Inter-400] text-lg text-white">No obligation</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-6 h-6 flex justify-center items-center bg-primary-light rounded-lg">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <span className="font-[Inter-400] text-lg text-white">Free onboarding </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-6 h-6 flex justify-center items-center bg-primary-light rounded-lg">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <span className="font-[Inter-400] text-lg text-white">14 day free trial</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-6 h-6 flex justify-center items-center bg-primary-light rounded-lg">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <span className="font-[Inter-400] text-lg text-white">Full features</span>
                </li>
              </ul>
            </div>
            <div>
              <button className="bg-blue py-4 px-9 font-[Inter-400] text-lg text-white rounded-lg">
                Start your trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
