import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="bg-white overflow-hidden">

      {/* HERO */}
      <section>
        <Hero />
      </section>


      {/* LATEST COLLECTION */}
      <ScrollReveal direction="up">
        <section className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
          <LatestCollection />
        </section>
      </ScrollReveal>


      {/* KITCHEN STORY */}
      <ScrollReveal direction="left">
  <section className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 py-16">

    <div className="
      relative
      overflow-hidden
      bg-[#242424]
      min-h-[420px]
      flex
      items-center
    ">

      {/* ========================================= */}
      {/* BACKGROUND DECORATION */}
      {/* ========================================= */}

      <div className="
        absolute
        w-[450px]
        h-[450px]
        rounded-full
        border
        border-white/10
        -right-32
        -top-40
      "></div>

      <div className="
        absolute
        w-[280px]
        h-[280px]
        rounded-full
        bg-[#d97706]/10
        -right-20
        bottom-[-150px]
      "></div>


      {/* ========================================= */}
      {/* LEFT CONTENT */}
      {/* ========================================= */}

      <div className="
        relative
        z-20
        w-full
        lg:w-1/2
        px-7
        sm:px-12
        lg:px-16
        xl:px-20
        py-14
      ">

        {/* Label */}
        <div className="
          flex
          items-center
          gap-3
          mb-5
        ">

          <span className="
            w-10
            h-[2px]
            bg-[#d97706]
          "></span>

          <p className="
            text-[#f59e0b]
            text-xs
            uppercase
            tracking-[4px]
            font-semibold
          ">
            Zroy Enterprise
          </p>

        </div>


        {/* Heading */}
        <h2 className="
          prata-regular
          text-3xl
          sm:text-4xl
          lg:text-5xl
          xl:text-6xl
          text-white
          leading-[1.08]
        ">

          Built For Your
          <br />

          <span className="text-[#f59e0b]">
            Everyday Life.
          </span>

        </h2>


        {/* Description */}
        <p className="
          mt-5
          text-gray-300
          text-sm
          sm:text-base
          leading-7
          max-w-lg
        ">
          From sharp kitchen tools to smart bottles and handy
          everyday essentials, discover products designed to make
          life easier, faster and more convenient.
        </p>


        {/* Button */}
        <Link
          to="/collection"
          className="
            inline-flex
            items-center
            gap-3
            mt-8
            bg-[#d97706]
            hover:bg-[#f59e0b]
            text-white
            px-7
            py-3.5
            text-sm
            font-semibold
            tracking-wide
            transition-all
            duration-300
            group
          "
        >

          EXPLORE PRODUCTS

          <span className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          ">
            →
          </span>

        </Link>

      </div>


      {/* ========================================= */}
      {/* RIGHT PRODUCT CATEGORIES */}
      {/* ========================================= */}

      <div className="
        relative
        z-10
        hidden
        lg:flex
        w-1/2
        min-h-[420px]
        items-center
        justify-center
        gap-5
        pr-10
      ">


        {/* Knife */}
        <div className="
          group
          w-[150px]
          h-[210px]
          bg-[#f4eee5]
          flex
          flex-col
          items-center
          justify-center
          shadow-2xl
          rotate-[-5deg]
          hover:rotate-0
          hover:-translate-y-3
          transition-all
          duration-500
        ">

          <div className="
            text-6xl
            mb-5
            group-hover:scale-110
            transition-transform
            duration-500
          ">
            🔪
          </div>

          <p className="
            text-[#242424]
            font-semibold
            text-sm
          ">
            Kitchen Knives
          </p>

          <p className="
            text-gray-500
            text-xs
            mt-1
          ">
            Sharp • Reliable
          </p>

        </div>


        {/* Chopper */}
        <div className="
          group
          w-[170px]
          h-[235px]
          bg-[#d97706]
          flex
          flex-col
          items-center
          justify-center
          shadow-2xl
          z-10
          hover:-translate-y-3
          transition-all
          duration-500
        ">

          <div className="
            text-7xl
            mb-5
            group-hover:scale-110
            transition-transform
            duration-500
          ">
            🥕
          </div>

          <p className="
            text-white
            font-semibold
            text-sm
          ">
            Choppers
          </p>

          <p className="
            text-white/70
            text-xs
            mt-1
          ">
            Fast • Convenient
          </p>

        </div>


        {/* Bottle */}
        <div className="
          group
          w-[150px]
          h-[210px]
          bg-[#f4eee5]
          flex
          flex-col
          items-center
          justify-center
          shadow-2xl
          rotate-[5deg]
          hover:rotate-0
          hover:-translate-y-3
          transition-all
          duration-500
        ">

          <div className="
            text-6xl
            mb-5
            group-hover:scale-110
            transition-transform
            duration-500
          ">
            🥤
          </div>

          <p className="
            text-[#242424]
            font-semibold
            text-sm
          ">
            Bottles
          </p>

          <p className="
            text-gray-500
            text-xs
            mt-1
          ">
            Smart • Everyday
          </p>

        </div>

      </div>


      {/* ========================================= */}
      {/* MOBILE CATEGORY STRIP */}
      {/* ========================================= */}

      <div className="
        absolute
        bottom-5
        left-6
        right-6
        flex
        lg:hidden
        items-center
        justify-between
        gap-3
      ">

        <div className="
          bg-white/10
          backdrop-blur-sm
          px-3
          py-2
          text-white
          text-xs
        ">
          🔪 Knives
        </div>

        <div className="
          bg-white/10
          backdrop-blur-sm
          px-3
          py-2
          text-white
          text-xs
        ">
          🥕 Choppers
        </div>

        <div className="
          bg-white/10
          backdrop-blur-sm
          px-3
          py-2
          text-white
          text-xs
        ">
          🥤 Bottles
        </div>

      </div>

    </div>

  </section>
</ScrollReveal>


      {/* BEST SELLERS */}
      <ScrollReveal direction="up">
        <section className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
          <BestSeller />
        </section>
      </ScrollReveal>


      {/* POLICY */}
      <ScrollReveal direction="up">
        <section className="mt-16 bg-[#faf9f6]">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
            <OurPolicy />
          </div>
        </section>
      </ScrollReveal>


      {/* NEWSLETTER */}
      <ScrollReveal direction="up">
        <section className="
          max-w-[1500px]
          mx-auto
          px-4
          sm:px-8
          lg:px-12
          
        ">
          <NewsletterBox />
        </section>
      </ScrollReveal>

    </main>
  )
}

export default Home