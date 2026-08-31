import React from "react";
import ScrollReveal from "./ScrollReveal";

const OurPolicy = () => {

  const benefits = [
    {
      number: "01",
      title: "QUALITY FIRST",
      description:
        "Every product is selected with quality, durability and everyday usability in mind.",
      icon: "✦",
    },
    {
      number: "02",
      title: "SMART & PRACTICAL",
      description:
        "Useful products designed to make cooking, organizing and everyday life easier.",
      icon: "◈",
    },
    {
      number: "03",
      title: "SECURE SHOPPING",
      description:
        "Shop with confidence through a simple, safe and reliable online experience.",
      icon: "✓",
    },
    {
      number: "04",
      title: "CUSTOMER FIRST",
      description:
        "We're committed to providing a smooth shopping experience from order to delivery.",
      icon: "♡",
    },
  ];


  return (

    <div className="py-20 sm:py-24">

      {/* ========================================= */}
      {/* SECTION HEADER */}
      {/* ========================================= */}

      <ScrollReveal direction="up">

        <div className="
          text-center
          max-w-2xl
          mx-auto
          mb-14
        ">

          <div className="
            flex
            items-center
            justify-center
            gap-3
            mb-4
          ">

            <span className="
              w-8
              h-[2px]
              bg-[#d97706]
            "></span>

            <p className="
              text-[#d97706]
              text-xs
              uppercase
              tracking-[4px]
              font-semibold
            ">
              Why Zroy
            </p>

            <span className="
              w-8
              h-[2px]
              bg-[#d97706]
            "></span>

          </div>


          <h2 className="
            prata-regular
            text-3xl
            sm:text-4xl
            lg:text-5xl
            text-[#242424]
            leading-tight
          ">

            Made For Your
            <br />

            <span className="text-[#d97706]">
              Everyday Needs.
            </span>

          </h2>


          <p className="
            mt-4
            text-sm
            sm:text-base
            text-gray-500
            leading-7
          ">
            At Zroy Enterprise, we believe everyday products should
            be useful, reliable and thoughtfully chosen.
          </p>

        </div>

      </ScrollReveal>


      {/* ========================================= */}
      {/* BENEFITS */}
      {/* ========================================= */}

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        border
        border-gray-200
        bg-white
      ">

        {benefits.map((item, index) => (

          <ScrollReveal
            key={index}
            delay={index * 100}
            direction="up"
          >

            <div className="
              group
              relative
              px-7
              sm:px-8
              py-10
              min-h-[250px]
              border-b
              sm:border-b
              lg:border-b-0
              lg:border-r
              last:border-0
              border-gray-200
              hover:bg-[#242424]
              transition-all
              duration-500
            ">

              {/* Number */}

              <div className="
                flex
                items-center
                justify-between
                mb-8
              ">

                <span className="
                  text-xs
                  font-semibold
                  tracking-[2px]
                  text-gray-400
                  group-hover:text-[#d97706]
                  transition-colors
                ">
                  {item.number}
                </span>


                <span className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#f7f5f0]
                  flex
                  items-center
                  justify-center
                  text-[#d97706]
                  text-lg
                  group-hover:bg-[#d97706]
                  group-hover:text-white
                  transition-all
                  duration-500
                ">
                  {item.icon}
                </span>

              </div>


              {/* Title */}

              <h3 className="
                text-sm
                font-bold
                tracking-[1.5px]
                text-[#242424]
                group-hover:text-white
                transition-colors
                duration-300
              ">
                {item.title}
              </h3>


              {/* Description */}

              <p className="
                mt-4
                text-sm
                leading-6
                text-gray-500
                group-hover:text-gray-300
                transition-colors
                duration-300
              ">
                {item.description}
              </p>


              {/* Bottom Accent */}

              <div className="
                absolute
                bottom-0
                left-7
                w-0
                h-[2px]
                bg-[#d97706]
                group-hover:w-16
                transition-all
                duration-500
              "></div>

            </div>

          </ScrollReveal>

        ))}

      </div>


      {/* ========================================= */}
      {/* BOTTOM BRAND STATEMENT */}
      {/* ========================================= */}

      <ScrollReveal direction="up">

        <div className="
          mt-10
          flex
          flex-col
          sm:flex-row
          items-center
          justify-center
          gap-3
          text-center
        ">

          <span className="
            text-[#d97706]
            text-lg
          ">
            ✦
          </span>

          <p className="
            text-xs
            sm:text-sm
            uppercase
            tracking-[2px]
            text-gray-500
          ">
            Smart products. Better living. — Zroy Enterprise
          </p>

          <span className="
            text-[#d97706]
            text-lg
          ">
            ✦
          </span>

        </div>

      </ScrollReveal>

    </div>

  );
};

export default OurPolicy;