import React from "react";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import ScrollReveal from "../components/ScrollReveal";

const About = () => {
  const reasons = [
    {
      number: "01",
      title: "QUALITY PRODUCTS",
      description:
        "Carefully selected products made for reliable everyday use.",
    },
    {
      number: "02",
      title: "SMART SELECTION",
      description:
        "Useful products chosen to solve real everyday needs.",
    },
    {
      number: "03",
      title: "EASY SHOPPING",
      description:
        "A simple shopping experience that helps you find what you need.",
    },
    {
      number: "04",
      title: "CUSTOMER FIRST",
      description:
        "We work to make every shopping experience simple and dependable.",
    },
  ];

  return (
    <div className="bg-white">

      {/* PAGE HEADER */}
      <ScrollReveal direction="up">
        <section className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14">

          <div className="text-center">

            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#d97706]"></span>

              <p className="text-[#d97706] text-xs uppercase tracking-[4px] font-semibold">
                Who We Are
              </p>

              <span className="w-8 h-[2px] bg-[#d97706]"></span>
            </div>

            <h1 className="prata-regular text-4xl sm:text-5xl lg:text-6xl text-[#242424]">
              About <span className="text-[#d97706]">Zroy</span>
            </h1>

            <p className="max-w-2xl mx-auto mt-5 text-sm sm:text-base text-gray-500 leading-7">
              Smart products, practical solutions and everyday essentials
              carefully selected to make modern living easier.
            </p>

          </div>

        </section>
      </ScrollReveal>


      {/* ABOUT ZROY */}
      <ScrollReveal direction="up">
        <section className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* IMAGE */}

            <div className="relative h-[420px] sm:h-[520px] overflow-hidden bg-[#f5eee4]">

              <div className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full bg-[#ead8bd] -left-32 -bottom-32"></div>

              <img
                src={assets.about_img}
                alt="Zroy Enterprise Products"
                className="relative z-10 w-full h-full object-cover"
              />

              <div className="absolute z-20 left-5 sm:left-8 bottom-5 sm:bottom-8 bg-[#242424] text-white px-6 py-5">

                <p className="text-[#f59e0b] text-[10px] uppercase tracking-[3px] font-semibold">
                  Zroy Enterprise
                </p>

                <p className="mt-1 text-sm font-medium">
                  Smart Products. Better Living.
                </p>

              </div>

            </div>


            {/* CONTENT */}

            <div className="flex flex-col justify-center">

              <p className="text-[#d97706] text-xs uppercase tracking-[3px] font-semibold mb-5">
                More Than Just Products
              </p>

              <h2 className="prata-regular text-3xl sm:text-4xl lg:text-5xl text-[#242424] leading-tight">
                Designed For
                <br />
                <span className="text-[#d97706]">
                  Everyday Life.
                </span>
              </h2>

              <p className="mt-6 text-gray-600 text-sm sm:text-base leading-7">
                At Zroy Enterprise, we believe the products you use every
                day should be practical, reliable and thoughtfully selected.
              </p>

              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
                From kitchen knives and choppers to bottles and everyday
                essentials, we bring together useful products that combine
                functionality with modern design.
              </p>


              {/* MISSION */}

              <div className="mt-8 pl-5 border-l-2 border-[#d97706]">

                <p className="text-xs uppercase tracking-[3px] font-semibold text-[#242424]">
                  Our Mission
                </p>

                <p className="mt-2 text-sm sm:text-base text-gray-500 leading-7">
                  To make everyday living simpler by offering products
                  that are useful, dependable and worth bringing home.
                </p>

              </div>


              {/* STATS */}

              <div className="grid grid-cols-3 gap-4 mt-10 pt-7 border-t border-gray-200">

                <div>
                  <p className="text-xl sm:text-2xl font-semibold text-[#242424]">
                    100%
                  </p>

                  <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[1px] text-gray-500">
                    Practical
                  </p>
                </div>

                <div>
                  <p className="text-xl sm:text-2xl font-semibold text-[#242424]">
                    Smart
                  </p>

                  <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[1px] text-gray-500">
                    Selection
                  </p>
                </div>

                <div>
                  <p className="text-xl sm:text-2xl font-semibold text-[#242424]">
                    Daily
                  </p>

                  <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[1px] text-gray-500">
                    Essentials
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>
      </ScrollReveal>


      {/* WHY ZROY */}

      <section className="bg-[#faf9f6] py-16 sm:py-20">

        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">

          <ScrollReveal direction="up">

            <div className="text-center max-w-2xl mx-auto mb-12">

              <p className="text-[#d97706] text-xs uppercase tracking-[4px] font-semibold mb-4">
                Why Choose Us
              </p>

              <h2 className="prata-regular text-3xl sm:text-4xl text-[#242424]">
                Why <span className="text-[#d97706]">Zroy?</span>
              </h2>

              <p className="mt-4 text-sm text-gray-500 leading-6">
                We focus on products that solve real everyday problems
                without unnecessary complexity.
              </p>

            </div>

          </ScrollReveal>


          {/* REASONS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200 bg-white">

            {reasons.map((item, index) => (

              <ScrollReveal
                key={item.number}
                direction="up"
                delay={index * 100}
              >

                <div className="
                  group
                  min-h-[240px]
                  px-7
                  py-9
                  border-b
                  sm:border-r
                  lg:border-b-0
                  border-gray-200
                  hover:bg-[#242424]
                  transition-all
                  duration-500
                ">

                  <span className="
                    text-[#d97706]
                    text-3xl
                    font-semibold
                  ">
                    {item.number}
                  </span>

                  <h3 className="
                    mt-7
                    text-sm
                    font-bold
                    tracking-[1.5px]
                    text-[#242424]
                    group-hover:text-white
                    transition-colors
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    mt-4
                    text-sm
                    text-gray-500
                    group-hover:text-gray-300
                    leading-6
                    transition-colors
                  ">
                    {item.description}
                  </p>

                </div>

              </ScrollReveal>

            ))}

          </div>

        </div>

      </section>


      {/* BRAND STATEMENT */}

      <ScrollReveal direction="up">

        <section className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 py-20">

          <div className="
            bg-[#242424]
            text-white
            text-center
            px-6
            sm:px-12
            lg:px-20
            py-14
            sm:py-20
          ">

            <p className="text-[#f59e0b] text-xs uppercase tracking-[4px] font-semibold">
              Zroy Enterprise
            </p>

            <h2 className="prata-regular text-3xl sm:text-4xl lg:text-5xl mt-4 leading-tight">
              Smart Products.
              <br />
              <span className="text-[#f59e0b]">
                Better Living.
              </span>
            </h2>

            <p className="max-w-xl mx-auto mt-5 text-sm sm:text-base text-gray-400 leading-7">
              From the kitchen to everyday life, we're here to bring
              practical products that make a difference.
            </p>

          </div>

        </section>

      </ScrollReveal>


      {/* NEWSLETTER */}

      {/* <section className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 pb-20">
        <NewsletterBox />
      </section> */}

    </div>
  );
};

export default About;