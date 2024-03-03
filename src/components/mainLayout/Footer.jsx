import React from "react";
import { useLocation } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
function Footer() {
  let location = useLocation();

  return (
    <footer className="bg-dark-blue py-[60px]">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            {location.pathname == "/signin" ||
            location.pathname == "/signup" ? (
              <div>
                <h3 className="font-bold text-3xl mb-4 text-white">didpool</h3>
                <ul className="flex gap-3">
                  <li className="p-3 border-2 border-white rounded-[48px]">
                    <FaFacebook className="text-white text-2xl" />
                  </li>
                  <li className="p-3 border-2 border-white rounded-[48px]">
                    <FaTwitter className="text-white text-2xl" />
                  </li>
                  <li className="p-3 border-2 border-white rounded-[48px]">
                    <IoLogoLinkedin className="text-white text-2xl" />
                  </li>
                  <li className="p-3 border-2 border-white rounded-[48px]">
                    <FaInstagram className="text-white text-2xl" />
                  </li>
                </ul>
              </div>
            ) : (
              <ul>
                <li>
                  <h3 className="font-bold text-3xl mb-4 text-white">
                    didpool
                  </h3>
                </li>
                <li className="font-normal text-base mb-2 text-white">
                  Donec tempor luctus volutpat.
                </li>
                <li className="font-normal text-base mb-2 text-white">
                  Donec tempor luctus volutpat.
                </li>
                <li className="font-normal text-base mb-2 text-white">
                  Donec tempor luctus volutpat.
                </li>
              </ul>
            )}
          </div>
          <div className="flex gap-20">
            <div>
              <ul>
                <li>
                  <h5 className="font-bold text-lg mb-3 text-white">
                    Our Company
                  </h5>
                </li>
                <li className="font-normal text-base mb-2 text-white">
                  Our Team
                </li>
                <li className="font-normal text-base mb-2 text-white">
                  Company Vision
                </li>
                <li className="font-normal text-base mb-2 text-white">
                  Our History
                </li>
                <li className="font-normal text-base mb-2 text-white">
                  Investorys
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <h5 className="font-bold text-lg mb-3 text-white">
                    Our Resources
                  </h5>
                </li>
                <li className="font-normal text-base mb-2 text-white">
                  The Blog
                </li>
                <li className="font-normal text-base mb-2 text-white">
                  Downloads
                </li>
                <li className="font-normal text-base mb-2 text-white">
                  Change Log
                </li>
                <li className="font-normal text-base mb-2 text-white">
                  Slack Channel
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <h5 className="font-bold text-lg mb-3 text-white">
                    Our Product
                  </h5>
                </li>
                <li className="font-normal text-base mb-2 text-white">
                  New Features
                </li>
                <li className="font-normal text-base mb-2 text-white">
                  Roadmap
                </li>
                <li className="font-normal text-base mb-2 text-white">
                  Product Demo
                </li>
                <li className="font-normal text-base mb-2 text-white">
                  Pricing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
