import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import ScrollReveal from "./ScrollReveal";

const BestSeller = () => {

  const { products } = useContext(ShopContext);

  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {

    const bestProduct = products.filter(
      (item) => item.bestseller
    );

    setBestSeller(bestProduct.slice(0, 6));

  }, [products]);


  return (

    <section className="py-20 sm:py-24">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <ScrollReveal direction="up">

        <div className="
          flex
          flex-col
          md:flex-row
          md:items-end
          md:justify-between
          gap-6
          mb-12
        ">

          <div>

            {/* Small Label */}

            <div className="
              flex
              items-center
              gap-3
              mb-4
            ">

              <span className="
                w-10
                h-[2px]
                bg-[#d97706]
              "></span>

              <p className="
                text-[#d97706]
                uppercase
                tracking-[4px]
                text-xs
                sm:text-sm
                font-semibold
              ">
                Customer Favourites
              </p>

            </div>


            {/* Heading */}

            <h2 className="
              prata-regular
              text-3xl
              sm:text-4xl
              lg:text-5xl
              text-[#242424]
              leading-tight
            ">

              Products People
              <br />

              <span className="text-[#d97706]">
                Love to Use.
              </span>

            </h2>


            {/* Description */}

            <p className="
              max-w-xl
              mt-4
              text-sm
              sm:text-base
              text-gray-500
              leading-7
            ">
              Explore our most popular everyday essentials,
              chosen by customers for their quality, convenience
              and practical design.
            </p>

          </div>


          {/* View All */}

          <Link
            to="/collection"
            className="
              group
              flex
              items-center
              gap-3
              text-sm
              font-semibold
              text-[#242424]
              border-b
              border-[#242424]
              pb-2
              w-fit
              hover:text-[#d97706]
              hover:border-[#d97706]
              transition-all
              duration-300
            "
          >

            VIEW ALL PRODUCTS

            <span className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            ">
              →
            </span>

          </Link>

        </div>

      </ScrollReveal>


      {/* ================================================= */}
      {/* PRODUCTS */}
      {/* ================================================= */}

      <div className="
        grid
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-6
        gap-4
        sm:gap-5
      ">

        {bestSeller.map((item, index) => (

          <ScrollReveal
            key={item._id || index}
            delay={index * 80}
            direction="up"
          >

            <div className="
              group
              relative
              bg-white
              border
              border-gray-200
              overflow-hidden
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-xl
            ">


              {/* ================================= */}
              {/* IMAGE AREA */}
              {/* ================================= */}

              <div className="
                relative
                bg-[#f7f5f0]
                aspect-[4/5]
                overflow-hidden
              ">

                {/* Bestseller Badge */}

                <div className="
                  absolute
                  top-3
                  left-3
                  z-20
                  bg-[#242424]
                  text-white
                  px-3
                  py-1.5
                  text-[9px]
                  sm:text-[10px]
                  uppercase
                  tracking-[1.5px]
                  font-semibold
                ">
                  Bestseller
                </div>


                {/* Product */}

                <div className="
                  w-full
                  h-full
                  flex
                  items-center
                  justify-center
                ">

                  <ProductItem
                    id={item._id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                  />

                </div>


                {/* Hover Overlay */}

                <div className="
                  absolute
                  inset-x-0
                  bottom-0
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform
                  duration-300
                  bg-[#242424]/95
                  text-white
                  py-3
                  text-center
                  text-xs
                  font-semibold
                  tracking-wide
                ">

                  VIEW PRODUCT →

                </div>

              </div>

            </div>

          </ScrollReveal>

        ))}

      </div>


      {/* ================================================= */}
      {/* EMPTY STATE */}
      {/* ================================================= */}

      {bestSeller.length === 0 && (

        <div className="
          py-16
          text-center
          text-gray-500
        ">

          <p className="text-sm">
            No bestseller products available.
          </p>

        </div>

      )}


      {/* ================================================= */}
      {/* BOTTOM MESSAGE */}
      {/* ================================================= */}

      {bestSeller.length > 0 && (

        <ScrollReveal direction="up">

          <div className="
            mt-12
            bg-[#242424]
            px-6
            sm:px-10
            py-7
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-5
          ">

            <div>

              <p className="
                text-[#f59e0b]
                text-xs
                uppercase
                tracking-[3px]
                font-semibold
              ">
                Zroy Enterprise
              </p>

              <p className="
                text-white
                text-lg
                sm:text-xl
                font-semibold
                mt-1
              ">
                Smart products for everyday living.
              </p>

            </div>


            <Link
              to="/collection"
              className="
                group
                flex
                items-center
                justify-center
                gap-3
                bg-[#d97706]
                hover:bg-[#f59e0b]
                text-white
                px-6
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300
                w-fit
              "
            >

              SHOP ALL

              <span className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              ">
                →
              </span>

            </Link>

          </div>

        </ScrollReveal>

      )}

    </section>
  );
};

export default BestSeller;