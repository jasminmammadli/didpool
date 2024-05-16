import React from "react";
import GirlHome from "./../../assets/img/home-girl.jpg";
import { IoMdCheckmark } from "react-icons/io";
function Home() {
  return (
    <div className="bg-light-grey py-[125px]">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-[530px]">
            <h5 className="text-majorelle font-[Inter-700] text-lg mb-6">
              The new way to work online
            </h5>
            <h1 className="font-[Inter-700] text-6xl leading-[60.8px] text-dark-blue relative mb-8">
              Get the important work done{" "}
              <span className="after:inline-block after:h-[20px] after:w-[41%] after:bg-majorelle after:absolute after:right-0 after:-bottom-3">
                <span className="z-50">faster</span>
              </span>
            </h1>
            <p className="font-[Inter-400] text-2xl mb-12">
              With didpool, you can get more productive work done in far less
              time than ever before.
            </p>
            <div>
              <button className="py-4 px-9 bg-majorelle text-white rounded-lg me-5">
                Sign up
              </button>
              <button className="py-4 px-9 border-2 border-dark-grey rounded-lg">
                Learn more
              </button>
            </div>
          </div>
          <div className="w-[40%] relative">
            <div className="py-[17px] px-5 absolute top-0 left-40 rounded-xl shadow-md z-50 bg-white w-[78%] flex">
              <div className="w-[73px] h-[73px] me-5">
                <img
                  src={GirlHome}
                  alt=""
                  className="w-full rounded-full border-4 border-blue"
                />
              </div>
              <div>
                <h4 className="font-[Inter-700] text-2xl">New task assigned</h4>
                <p className="font-[Inter-400] text-base text-majorelle">
                  Isabella assigned you a project
                </p>
              </div>
            </div>
            <div>
              <img
                src={GirlHome}
                alt=""
                className="w-full rounded-xl -scale-x-100"
              />
            </div>
            <div>
              <div>
                <span className="p-2 inline-block bg-primary-light rounded-full">
                  <IoMdCheckmark className="text-majorelle text-[34px]" />
                </span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
