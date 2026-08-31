import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (

    <footer className=" text-white mt-20">

      {/* ============================================== */}
      {/* MAIN FOOTER */}
      {/* ============================================== */}

      <div className="
        max-w-[1500px]
        mx-auto
        px-6
        sm:px-10
        lg:px-12
        xl:px-16
        pt-16
        sm:pt-20
        pb-10
      ">

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-[2.5fr_1fr_1fr_1.5fr]
          gap-12
          lg:gap-10
        ">


          {/* ========================================== */}
          {/* BRAND */}
          {/* ========================================== */}

          <div>

            <Link to="/">
              <img
                src={assets.logo}
                className="
                  w-32
                  sm:w-36
                  mb-6
                
                "
                alt="Zroy Enterprise"
              />
            </Link>


            <p className="
              text-gray-400
              text-sm
              leading-7
              max-w-md
            ">
              Smart, practical and reliable products designed
              to make your everyday life easier. Discover quality
              kitchen tools, bottles, choppers and everyday
              essentials from Zroy Enterprise.
            </p>


            {/* Brand Tagline */}

            <p className="
              mt-6
              text-[#f59e0b]
              text-xs
              uppercase
              tracking-[3px]
              font-semibold
            ">
              Smart Products. Better Living.
            </p>

          </div>


          {/* ========================================== */}
          {/* QUICK LINKS */}
          {/* ========================================== */}

          <div>

            <h3 className="
              text-sm
              font-semibold
              tracking-[2px]
              mb-6
            ">
              QUICK LINKS
            </h3>


            <ul className="
              flex
              flex-col
              gap-3
              text-sm
              text-gray-400
            ">

              <li>
                <Link
                  to="/"
                  className="
                    hover:text-[#f59e0b]
                    transition-colors
                  "
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/collection"
                  className="
                    hover:text-[#f59e0b]
                    transition-colors
                  "
                >
                  Shop All
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="
                    hover:text-[#f59e0b]
                    transition-colors
                  "
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="
                    hover:text-[#f59e0b]
                    transition-colors
                  "
                >
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>


          {/* ========================================== */}
          {/* SHOP */}
          {/* ========================================== */}

          <div>

            <h3 className="
              text-sm
              font-semibold
              tracking-[2px]
              mb-6
            ">
              SHOP
            </h3>


            <ul className="
              flex
              flex-col
              gap-3
              text-sm
              text-gray-400
            ">

              <li>
                <Link
                  to="/collection?category=Knives"
                  className="
                    hover:text-[#f59e0b]
                    transition-colors
                  "
                >
                  Kitchen Knives
                </Link>
              </li>

              <li>
                <Link
                  to="/collection?category=Choppers"
                  className="
                    hover:text-[#f59e0b]
                    transition-colors
                  "
                >
                  Choppers
                </Link>
              </li>

              <li>
                <Link
                  to="/collection?category=Bottles"
                  className="
                    hover:text-[#f59e0b]
                    transition-colors
                  "
                >
                  Bottles
                </Link>
              </li>

              <li>
                <Link
                  to="/collection"
                  className="
                    hover:text-[#f59e0b]
                    transition-colors
                  "
                >
                  Everyday Essentials
                </Link>
              </li>

            </ul>

          </div>


          {/* ========================================== */}
          {/* CONTACT */}
          {/* ========================================== */}

          <div>

            <h3 className="
              text-sm
              font-semibold
              tracking-[2px]
              mb-6
            ">
              GET IN TOUCH
            </h3>


            <ul className="
              flex
              flex-col
              gap-4
              text-sm
              text-gray-400
            ">

              <li>

                <p className="
                  text-xs
                  uppercase
                  tracking-[2px]
                  text-gray-500
                  mb-1
                ">
                  Phone
                </p>

                <a
                  href="tel:+919624634498"
                  className="
                    hover:text-[#f59e0b]
                    transition-colors
                  "
                >
                  +91 96246 34498
                </a>

              </li>


              <li>

                <p className="
                  text-xs
                  uppercase
                  tracking-[2px]
                  text-gray-500
                  mb-1
                ">
                  Email
                </p>

                <a
                  href="mailto:contact@zroyenterprise.com"
                  className="
                    hover:text-[#f59e0b]
                    transition-colors
                    break-all
                  "
                >
                  contact@zroyenterprise.com
                </a>

              </li>

            </ul>


            {/* Social Icons */}

            <div className="
              flex
              items-center
              gap-3
              mt-7
            ">

              <a
                href="#"
                className="
                  w-9
                  h-9
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  text-xs
                  hover:bg-[#d97706]
                  hover:border-[#d97706]
                  transition-all
                "
              >
                IG
              </a>

              <a
                href="#"
                className="
                  w-9
                  h-9
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  text-xs
                  hover:bg-[#d97706]
                  hover:border-[#d97706]
                  transition-all
                "
              >
                FB
              </a>

            </div>

          </div>

        </div>


        {/* ============================================== */}
        {/* FOOTER DIVIDER */}
        {/* ============================================== */}

        <div className="
          mt-14
          pt-7
          border-t
          border-white/10
          flex
          flex-col
          sm:flex-row
          items-center
          justify-between
          gap-4
        ">

          <p className="
            text-xs
            text-gray-500
            text-center
            sm:text-left
          ">
            © {new Date().getFullYear()} Zroy Enterprise.
            All Rights Reserved.
          </p>


          <div className="
            flex
            items-center
            gap-5
            text-xs
            text-gray-500
          ">

            {/* <Link
              to="/privacy-policy"
              className="
                hover:text-white
                transition-colors
              "
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="
                hover:text-white
                transition-colors
              "
            >
              Terms & Conditions
            </Link> */}

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;