import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
  <section className="w-full overflow-hidden bg-[#f7f5f0]">

  <div className="max-w-[1600px] mx-auto">

    <div className="
      relative
      min-h-[650px]
      lg:min-h-[700px]
      grid
      grid-cols-1
      lg:grid-cols-2
      overflow-hidden
    ">

      {/* ================= LEFT CONTENT ================= */}
      <div className="
        relative
        z-20
        flex
        items-center
        px-6
        sm:px-10
        lg:px-16
        xl:px-24
        py-16
        lg:py-20
        bg-[#242424]
        text-white
      ">

        {/* Decorative Circle */}
        <div className="
          absolute
          w-[280px]
          h-[280px]
          rounded-full
          border
          border-white/10
          -top-32
          -left-32
        "></div>

        <div className="
          absolute
          w-[180px]
          h-[180px]
          rounded-full
          border
          border-[#d97706]/20
          bottom-[-80px]
          right-[-60px]
        "></div>


        <div className="relative max-w-2xl">

          {/* Brand Label */}
          <div className="flex items-center gap-3 mb-7">

            <span className="
              w-10
              h-[2px]
              bg-[#d97706]
            "></span>

            <p className="
              text-[#f59e0b]
              uppercase
              tracking-[4px]
              text-xs
              sm:text-sm
              font-semibold
            ">
              Zroy Enterprise
            </p>

          </div>


          {/* Main Heading */}
          <h1 className="
            prata-regular
            text-4xl
            sm:text-5xl
            md:text-6xl
            xl:text-7xl
            leading-[1.05]
            tracking-tight
          ">

            Smart Products.
            <br />

            <span className="text-[#f59e0b]">
              Better Living.
            </span>

          </h1>


          {/* Description */}
          <p className="
            mt-7
            text-gray-300
            text-sm
            sm:text-base
            lg:text-lg
            leading-7
            max-w-xl
          ">
            Discover premium kitchen and everyday essentials designed
            to make cooking, organizing and living simpler.
          </p>


          {/* Buttons */}
          <div className="
            flex
            flex-wrap
            gap-4
            mt-9
          ">

            <button
              className="
                group
                bg-[#d97706]
                hover:bg-[#f59e0b]
                text-white
                px-7
                sm:px-9
                py-4
                font-semibold
                text-sm
                tracking-wide
                transition-all
                duration-300
                flex
                items-center
                gap-3
              "
            >
              SHOP NOW

              <span className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              ">
                →
              </span>

            </button>


            <button
              className="
                border
                border-white/40
                hover:border-white
                hover:bg-white
                hover:text-[#242424]
                text-white
                px-7
                sm:px-9
                py-4
                font-semibold
                text-sm
                tracking-wide
                transition-all
                duration-300
              "
            >
              VIEW COLLECTION
            </button>

          </div>


          {/* ================= TRUST FEATURES ================= */}
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-5
            mt-12
            pt-7
            border-t
            border-white/15
          ">

            <div className="flex items-center gap-3">

              <div className="
                w-9
                h-9
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                text-[#f59e0b]
              ">
                ✓
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Quality
                </p>

                <p className="text-xs text-gray-400">
                  Tested Products
                </p>
              </div>

            </div>


            <div className="flex items-center gap-3">

              <div className="
                w-9
                h-9
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                text-[#f59e0b]
              ">
                ★
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Smart Choice
                </p>

                <p className="text-xs text-gray-400">
                  Everyday Essentials
                </p>
              </div>

            </div>


            <div className="flex items-center gap-3">

              <div className="
                w-9
                h-9
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                text-[#f59e0b]
              ">
                ⚡
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Easy Shopping
                </p>

                <p className="text-xs text-gray-400">
                  Fast & Simple
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= RIGHT PRODUCT AREA ================= */}
      <div className="
        relative
        min-h-[480px]
        lg:min-h-full
        bg-[#eee8dc]
        overflow-hidden
      ">

        {/* Large Background Circle */}
        <div className="
          absolute
          w-[380px]
          h-[380px]
          sm:w-[500px]
          sm:h-[500px]
          lg:w-[620px]
          lg:h-[620px]
          rounded-full
          bg-[#dfc9a8]
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
        "></div>


        {/* Decorative Ring */}
        <div className="
          absolute
          w-[430px]
          h-[430px]
          sm:w-[550px]
          sm:h-[550px]
          lg:w-[680px]
          lg:h-[680px]
          rounded-full
          border
          border-[#c6a77b]/40
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
        "></div>


        {/* Small Top Label */}
        <div className="
          absolute
          z-20
          top-8
          right-6
          sm:right-10
          lg:right-12
          bg-white
          px-5
          py-3
          shadow-xl
        ">

          <p className="
            text-[10px]
            uppercase
            tracking-[3px]
            text-gray-500
          ">
            Zroy Collection
          </p>

          <p className="
            text-sm
            font-bold
            text-[#242424]
            mt-1
          ">
            Kitchen • Home • Utility
          </p>

        </div>


        {/* PRODUCT IMAGE */}
        <img
          src={assets.hero_img}
          alt="Zroy Enterprise Kitchen Products"
          className="
            absolute
            z-10
            w-full
            h-full
            object-contain
            object-center
            p-5
            sm:p-8
            lg:p-10
            scale-[1.02]
            transition-transform
            duration-700
            hover:scale-[1.05]
          "
        />


        {/* ================= FLOATING CATEGORY CARD ================= */}

        <div className="
          absolute
          z-30
          bottom-7
          left-5
          sm:left-8
          lg:left-10
          bg-white
          shadow-2xl
          px-5
          py-4
          sm:px-7
          sm:py-5
        ">

          <p className="
            text-[10px]
            sm:text-xs
            uppercase
            tracking-[3px]
            text-gray-500
          ">
            Featured Products
          </p>

          <div className="
            flex
            items-center
            gap-4
            mt-2
          ">

            <span className="
              text-xl
              sm:text-2xl
            ">
              🔪
            </span>

            <div>
              <p className="
                font-bold
                text-[#242424]
                text-sm
                sm:text-base
              ">
                Knives • Choppers
              </p>

              <p className="
                text-xs
                text-gray-500
                mt-1
              ">
                Built for everyday use
              </p>
            </div>

          </div>

        </div>


        {/* ================= RIGHT SIDE MINI BADGE ================= */}

        <div className="
          absolute
          z-30
          right-5
          sm:right-8
          lg:right-10
          bottom-24
          sm:bottom-28
          bg-[#242424]
          text-white
          px-4
          py-3
          shadow-xl
          hidden
          sm:block
        ">

          <p className="
            text-[10px]
            uppercase
            tracking-widest
            text-gray-400
          ">
            Everyday Essentials
          </p>

          <p className="
            text-sm
            font-semibold
            text-[#f59e0b]
            mt-1
          ">
            Smart • Strong • Useful
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
  )
}

export default Hero