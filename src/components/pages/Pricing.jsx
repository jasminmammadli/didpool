import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
function Pricing() {
  const pricingData = [
    {
      title: "Project Features",
      categories: [
        {
          title: "Project swim lanes",
          starter: true,
          professional: true,
          expert: true,
          id: 1,
        },
        {
          title: "Unlimited roadmaps",
          starter: true,
          professional: true,
          expert: true,
          id: 2,
        },
        {
          title: "Feature updates",
          starter: false,
          professional: false,
          expert: true,
          id: 3,
        },
        {
          title: "Insight tables",
          starter: true,
          professional: true,
          expert: true,
          id: 4,
        },
        {
          title: "Customizable database",
          starter: false,
          professional: true,
          expert: true,
          id: 5,
        },
      ],
    },
    {
      title: "Collaboration",
      categories: [
        {
          title: "Feature voting",
          starter: true,
          professional: true,
          expert: true,
          id: 6,
        },
        {
          title: "Team creation",
          starter: false,
          professional: true,
          expert: true,
          id: 7,
        },
        {
          title: "Live chat",
          starter: false,
          professional: false,
          expert: true,
          id: 8,
        },
        {
          title: "Comment pane",
          starter: false,
          professional: true,
          expert: true,
          id: 9,
        },
        {
          title: "Meme repository",
          starter: false,
          professional: false,
          expert: true,
          id: 10,
        },
        {
          title: "Product voting",
          starter: false,
          professional: false,
          expert: true,
          id: 11,
        },
      ],
    },
    {
      title: "Analytics",
      categories: [
        {
          id: 12,
          title: "Feature tracking",
          starter: true,
          professional: true,
          expert: true,
        },
        {
          id: 13,
          title: "Reporting panel",
          starter: false,
          professional: true,
          expert: true,
        },
        {
          id: 14,
          title: "Chart downloads",
          starter: false,
          professional: false,
          expert: true,
        },
      ],
    },
  ];
  return (
    <>
      <div>
        <div className="pt-[106px] pb-[150px] pricing-section">
          <h6 className="text-base font-bold text-majorelle text-center mb-4">
            Smart plans for growing businesses
          </h6>
          <p className="font-bold text-6xl text-dark-green text-center">
            Our Pricing Plans
          </p>
        </div>
        <div className="container mx-auto">
          <div className="py-20 max-w-[560px]">
            <h2 className="font-bold text-[40px] text-dark-blue">
              Pricing plans for every team
            </h2>
            <p className="font-normal text-base leading-6 text-majorelle">
              Democracy. It’s what we see, it’s how we live and what we breathe.
              Here is a cup of tea, please won’t you drink it with me.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-5 mb-[90px]">
            <div className="group rounded-lg border-2 border-grey p-7 hover:bg-majorelle transition hover:border-0">
              <h5 className="font-bold text-blue text-xl mb-[33px]">Free</h5>
              <h3 className="font-bold text-majorelle text-3xl mb-[17px] group-hover:text-white">
                Free
              </h3>
              <p className="font-normal text-lg mb-8 text-majorelle leading-5 group-hover:text-white">
                Get the main benefits of quickly for this unbelievable offer
              </p>
              <button className="py-4 bg-majorelle rounded-lg font-normal text-white text-lg w-full mb-8 group-hover:bg-white group-hover:text-dark-blue">
                Get Started
              </button>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    All features
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400]  group-hover:text-white">
                    Unlimited projects
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    No payment needed
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    Free onboarding
                  </p>
                </li>
              </ul>
            </div>
            <div className="group transition rounded-lg border-2 border-grey p-7 hover:bg-majorelle hover:border-0">
              <h5 className="font-bold text-blue text-xl mb-[33px]">
                Business
              </h5>
              <h3 className="font-bold text-majorelle text-3xl mb-[17px] group-hover:text-white">
                $39.99
              </h3>
              <p className="font-normal text-lg mb-8 text-majorelle leading-5 group-hover:text-white">
                Premium features for growing businesses and companies
              </p>
              <button className="py-4 bg-majorelle rounded-lg font-normal text-white text-lg w-full mb-8 group-hover:bg-white group-hover:text-dark-blue">
                Get Started
              </button>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    All features
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    Unlimited projects
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    No payment needed
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    Free onboarding
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    No payment needed
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    Free onboarding
                  </p>
                </li>
              </ul>
            </div>
            <div className="group transition rounded-lg border-2 border-grey p-7 hover:bg-majorelle hover:border-0">
              <h5 className="font-bold text-blue text-xl mb-[33px]">Expert</h5>
              <h3 className="font-bold text-majorelle text-3xl mb-[17px] group-hover:text-white">
                $59.99
              </h3>
              <p className="font-normal text-lg mb-8 text-majorelle leading-5 group-hover:text-white">
                The ultimate collection of features for expert users
              </p>
              <button className="py-4 bg-majorelle rounded-lg font-normal text-white text-lg w-full mb-8 group-hover:bg-white group-hover:text-dark-blue">
                Get Started
              </button>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    All features
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    Unlimited projects
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    No payment needed
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    Free onboarding
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    All features
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    Unlimited projects
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    No payment needed
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    Free onboarding
                  </p>
                </li>
              </ul>
            </div>
            <div className="group transition rounded-lg border-2 border-grey p-7 hover:bg-majorelle hover:border-0">
              <h5 className="font-bold text-blue text-xl mb-[33px]">
                Enterprise
              </h5>
              <h3 className="font-bold text-majorelle text-3xl mb-[17px] group-hover:text-white">
                $199.99
              </h3>
              <p className="font-normal text-lg mb-8 text-majorelle leading-5 group-hover:text-white">
                Custom solutions for the world’s most demanding industries
              </p>
              <button className="py-4 bg-majorelle rounded-lg font-normal text-white text-lg w-full mb-8 group-hover:bg-white group-hover:text-dark-blue">
                Get Started
              </button>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    All features
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    Unlimited projects
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    No payment needed
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    Free onboarding
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    All features
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    Unlimited projects
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    No payment needed
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    Free onboarding
                  </p>
                </li>
                <li className="flex gap-4 items-center">
                  <span className="flex justify-center items-center w-4 h-4 bg-primary-light rounded-sm ">
                    <IoMdCheckmark className="text-xs text-majorelle" />
                  </span>
                  <p className="font-normal text-base font-[Inter-400] group-hover:text-white">
                    Free onboarding
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pricing-section-reverse py-[50px] rotate-180"></div>
        <div className="bg-light-grey py-[100px]">
          <div className="container mx-auto">
            <div className="mb-14">
              <h5 className="text-lg text-majorelle font-[Inter-700] mb-[17px]">
                Get the details you need to purchase
              </h5>
              <h2 className="text-4xl font-[Inter-700]">
                An overview of what’s included
              </h2>
            </div>
            <div className="pb-4">
              {pricingData.map((item, index) => (
                <table key={index} className="w-full">
                  <thead>
                    {index === 0 ? (
                      <tr>
                        <th className="w-3/6 text-left text-majorelle font-[Inter-700] text-lg py-3 px-7">
                          {item.title}
                        </th>
                        <th className="w-1/6 text-left text-dark-blue text-lg font-[Inter-700]">
                          Starter
                        </th>
                        <th className="w-1/6 text-left text-dark-blue text-lg font-[Inter-700]">
                          Professional
                        </th>
                        <th className="w-1/6 text-left text-dark-blue text-lg font-[Inter-700]">
                          Expert
                        </th>
                      </tr>
                    ) : (
                      <tr>
                        <th className="text-left text-majorelle py-3 px-7">
                          {item.title}
                        </th>
                      </tr>
                    )}
                  </thead>
                  <tbody>
                    {item?.categories?.map((item, index) => (
                      <tr
                        key={item.id}
                        className={index % 2 == 0 ? "bg-white" : ""}
                      >
                        <td className="text-left w-3/6 text-base font-[Inter-400] text-dark-blue py-3 px-7">
                          {item.title}
                        </td>
                        <td className="text-left w-1/6">
                          {item.starter && (
                            <span className="w-4 h-4 flex justify-center items-center rounded-full bg-blue">
                              <FaCheck className="text-[10px] text-white" />
                            </span>
                          )}
                        </td>
                        <td className="text-left w-1/6">
                          {item.professional && (
                            <span className="w-4 h-4 flex justify-center items-center rounded-full bg-blue">
                              <FaCheck className="text-[10px] text-white" />
                            </span>
                          )}
                        </td>
                        <td className="text-left w-1/6">
                          {item.expert && (
                            <span className="w-4 h-4 flex justify-center items-center rounded-full bg-blue">
                              <FaCheck className="text-[10px] text-white" />
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
            </div>
            <div className="flex justify-end">
              <button className="inline-block py-2.5 px-11 text-sm font-[Inter-400] bg-majorelle border-2 text-white rounded-lg hover:bg-white hover:text-majorelle transition hover:border-dark-grey me-8">
                Get Started
              </button>
              <button className="inline-block py-2.5 px-11 text-sm font-[Inter-400] bg-majorelle border-2 text-white rounded-lg hover:bg-white hover:text-majorelle transition hover:border-dark-grey me-8">
                Get Started
              </button>
              <button className="inline-block py-2.5 px-11 text-sm font-[Inter-400] bg-majorelle border-2 text-white rounded-lg hover:bg-white hover:text-majorelle transition hover:border-dark-grey me-8">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="text-center py-16">
          <p className="text-majorelle font-[Inter-700] text-lg mb-7">
            Stop wasting time, start saving it
          </p>
          <h1 className="text-[50px] font-[Inter-700] leading-[60px] w-[830px] mx-auto mb-[54px]">
          Sign up for your free trial, with the world’s best product tool
          </h1>
          <button className="inline-block py-4 px-9 bg-majorelle rounded-lg font-[Inter-400] text-lg text-white">Start your trial</button>
        </div>
      </div>
    </>
  );
}

export default Pricing;
