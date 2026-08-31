import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import ScrollReveal from './ScrollReveal'

const LatestCollection = () => {

  const { products } = useContext(ShopContext)

  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0, 10))
  }, [products])

  return (

    <div className="py-16">

      {/* TITLE */}

      <ScrollReveal>

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
                w-9
                h-[2px]
                bg-[#d97706]
              "></span>

              <p className="
                text-[#d97706]
                uppercase
                tracking-[3px]
                text-xs
                sm:text-sm
                font-semibold
              ">
                Zroy Picks
              </p>

            </div>


            {/* Main Heading */}
            <h2 className="
              prata-regular
              text-3xl
              sm:text-4xl
              lg:text-5xl
              text-[#242424]
              leading-tight
            ">

              Our Most Wanted
              <br />

              <span className="text-[#d97706]">
                Essentials
              </span>

            </h2>


            <p className="
              mt-4
              text-sm
              sm:text-base
              text-gray-500
              max-w-xl
              leading-7
            ">
              Discover practical products made for everyday
              cooking, organizing and living.
            </p>

          </div>


        {/* View All Button */}
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


      {/* PRODUCTS */}

      <div className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        gap-x-4
        gap-y-10
      ">

        {latestProducts.map((item, index) => (

          <ScrollReveal
            key={index}
            delay={index * 80}
            direction="up"
          >

            <div className="
              group
              transition-all
              duration-500
              hover:-translate-y-2
            ">

              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />

            </div>

          </ScrollReveal>

        ))}

      </div>

    </div>
  )
}

export default LatestCollection