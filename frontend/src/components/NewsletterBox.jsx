import React from "react";
import ScrollReveal from "./ScrollReveal";

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (

    <ScrollReveal direction="up">

      <section className="
        relative
        overflow-hidden
        bg-[#242424]
        text-white
      ">

        {/* ========================================= */}
        {/* BACKGROUND DECORATION */}
        {/* ========================================= */}

        <div className="
          absolute
          w-[400px]
          h-[400px]
          rounded-full
          border
          border-white/10
          -right-40
          -top-40
        "></div>

        <div className="
          absolute
          w-[250px]
          h-[250px]
          rounded-full
          bg-[#d97706]/10
          -left-20
          -bottom-32
        "></div>


        {/* ========================================= */}
        {/* CONTENT */}
        {/* ========================================= */}

        <div className="
          relative
          z-10
          px-6
          sm:px-12
          lg:px-20
          py-16
          sm:py-20
          lg:py-24
        ">

          <div className="
            max-w-3xl
            mx-auto
            text-center
          ">

            {/* Small Label */}

            <div className="
              flex
              items-center
              justify-center
              gap-3
              mb-5
            ">

              <span className="
                w-8
                h-[2px]
                bg-[#d97706]
              "></span>

              <p className="
                text-[#f59e0b]
                uppercase
                tracking-[4px]
                text-xs
                font-semibold
              ">
                Stay In The Loop
              </p>

              <span className="
                w-8
                h-[2px]
                bg-[#d97706]
              "></span>

            </div>


            {/* Heading */}

            <h2 className="
              prata-regular
              text-3xl
              sm:text-4xl
              lg:text-5xl
              leading-tight
            ">

              Upgrade Your
              <br />

              <span className="text-[#f59e0b]">
                Everyday.
              </span>

            </h2>


            {/* Description */}

            <p className="
              mt-5
              text-gray-400
              text-sm
              sm:text-base
              leading-7
              max-w-xl
              mx-auto
            ">
              Be the first to know about new products, exclusive
              offers and special deals from Zroy Enterprise.
            </p>


            {/* ========================================= */}
            {/* EMAIL FORM */}
            {/* ========================================= */}

            <form
              onSubmit={onSubmitHandler}
              className="
                max-w-xl
                mx-auto
                mt-9
                flex
                flex-col
                sm:flex-row
                gap-3
              "
            >

              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="
                  flex-1
                  h-14
                  px-5
                  bg-white
                  text-[#242424]
                  text-sm
                  outline-none
                  placeholder:text-gray-400
                  border
                  border-transparent
                  focus:border-[#d97706]
                  transition-all
                "
              />


              <button
                type="submit"
                className="
                  group
                  h-14
                  px-7
                  sm:px-9
                  bg-[#d97706]
                  hover:bg-[#f59e0b]
                  text-white
                  text-xs
                  sm:text-sm
                  font-semibold
                  tracking-wide
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition-all
                  duration-300
                "
              >

                GET UPDATES

                <span className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                ">
                  →
                </span>

              </button>

            </form>


            {/* Privacy */}

            <p className="
              mt-4
              text-[10px]
              sm:text-xs
              text-gray-500
            ">
              No spam. Just useful products, offers and updates.
            </p>

          </div>


          {/* ========================================= */}
          {/* BOTTOM BENEFITS */}
          {/* ========================================= */}

          <div className="
            max-w-4xl
            mx-auto
            mt-14
            pt-7
            border-t
            border-white/10
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-5
          ">

            <div className="
              flex
              items-center
              justify-center
              gap-3
            ">

              <span className="
                text-[#f59e0b]
                text-lg
              ">
                ✦
              </span>

              <p className="
                text-xs
                text-gray-400
              ">
                New Product Alerts
              </p>

            </div>


            <div className="
              flex
              items-center
              justify-center
              gap-3
            ">

              <span className="
                text-[#f59e0b]
                text-lg
              ">
                %
              </span>

              <p className="
                text-xs
                text-gray-400
              ">
                Exclusive Offers
              </p>

            </div>


            <div className="
              flex
              items-center
              justify-center
              gap-3
            ">

              <span className="
                text-[#f59e0b]
                text-lg
              ">
                ★
              </span>

              <p className="
                text-xs
                text-gray-400
              ">
                Zroy Special Deals
              </p>

            </div>

          </div>

        </div>

      </section>

    </ScrollReveal>
  );
};

export default NewsletterBox;