import React from "react";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import ScrollReveal from "../components/ScrollReveal";

const Contact = () => {
  return (
    <div className="bg-white">

      {/* ============================================== */}
      {/* PAGE HEADER */}
      {/* ============================================== */}

      <ScrollReveal direction="up">

        <section className="
          max-w-[1500px]
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          pt-10
          sm:pt-14
        ">

          <div className="text-center">

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
              " />

              <p className="
                text-[#d97706]
                text-xs
                uppercase
                tracking-[4px]
                font-semibold
              ">
                Get In Touch
              </p>

              <span className="
                w-8
                h-[2px]
                bg-[#d97706]
              " />

            </div>


            <h1 className="
              prata-regular
              text-4xl
              sm:text-5xl
              lg:text-6xl
              text-[#242424]
            ">
              Contact <span className="text-[#d97706]">Zroy</span>
            </h1>


            <p className="
              max-w-2xl
              mx-auto
              mt-5
              text-sm
              sm:text-base
              text-gray-500
              leading-7
            ">
              Have a question about a product, order or anything else?
              We're here to help.
            </p>

          </div>

        </section>

      </ScrollReveal>


      {/* ============================================== */}
      {/* CONTACT SECTION */}
      {/* ============================================== */}

      <ScrollReveal direction="up">

        <section className="
          max-w-[1500px]
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          py-16
          sm:py-20
        ">

          <div className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            lg:gap-16
          ">


            {/* ======================================== */}
            {/* IMAGE */}
            {/* ======================================== */}

            <div className="
              relative
              h-[400px]
              sm:h-[500px]
              overflow-hidden
              bg-[#f5eee4]
            ">

              {/* Decorative Circle */}

              <div className="
                absolute
                w-[350px]
                h-[350px]
                sm:w-[500px]
                sm:h-[500px]
                rounded-full
                bg-[#ead8bd]
                -right-40
                -bottom-40
              " />


              <img
                src={assets.contact_img}
                alt="Contact Zroy Enterprise"
                className="
                  relative
                  z-10
                  w-full
                  h-full
                  object-cover
                "
              />


              {/* Floating Label */}

              <div className="
                absolute
                z-20
                left-5
                sm:left-8
                bottom-5
                sm:bottom-8
                bg-[#242424]
                text-white
                px-6
                py-5
              ">

                <p className="
                  text-[#f59e0b]
                  text-[10px]
                  uppercase
                  tracking-[3px]
                  font-semibold
                ">
                  Zroy Enterprise
                </p>

                <p className="
                  mt-1
                  text-sm
                  font-medium
                ">
                  We're Here To Help
                </p>

              </div>

            </div>


            {/* ======================================== */}
            {/* CONTACT INFORMATION */}
            {/* ======================================== */}

            <div className="
              flex
              flex-col
              justify-center
            ">

              <p className="
                text-[#d97706]
                text-xs
                uppercase
                tracking-[3px]
                font-semibold
                mb-5
              ">
                Let's Connect
              </p>


              <h2 className="
                prata-regular
                text-3xl
                sm:text-4xl
                lg:text-5xl
                text-[#242424]
                leading-tight
              ">

                We're Always
                <br />

                <span className="text-[#d97706]">
                  Happy To Help.
                </span>

              </h2>


              <p className="
                mt-6
                text-sm
                sm:text-base
                text-gray-600
                leading-7
                max-w-lg
              ">
                Whether you have a question about our products,
                your order or need assistance, feel free to reach
                out to the Zroy Enterprise team.
              </p>


              {/* CONTACT CARDS */}

              <div className="
                mt-8
                flex
                flex-col
                gap-4
              ">


                {/* PHONE */}

                <div className="
                  group
                  flex
                  items-center
                  gap-5
                  p-5
                  border
                  border-gray-200
                  hover:border-[#d97706]
                  transition-all
                  duration-300
                ">

                  <div className="
                    w-12
                    h-12
                    flex-shrink-0
                    bg-[#f7f3ed]
                    flex
                    items-center
                    justify-center
                    text-[#d97706]
                    text-lg
                    group-hover:bg-[#d97706]
                    group-hover:text-white
                    transition
                  ">
                    ☎
                  </div>


                  <div>

                    <p className="
                      text-[10px]
                      uppercase
                      tracking-[2px]
                      text-gray-400
                    ">
                      Call Us
                    </p>

                    <a
                      href="tel:+919624634498"
                      className="
                        block
                        mt-1
                        text-sm
                        font-medium
                        text-[#242424]
                        hover:text-[#d97706]
                        transition
                      "
                    >
                      +91 96246 34498
                    </a>

                  </div>

                </div>


                {/* EMAIL */}

                <div className="
                  group
                  flex
                  items-center
                  gap-5
                  p-5
                  border
                  border-gray-200
                  hover:border-[#d97706]
                  transition-all
                  duration-300
                ">

                  <div className="
                    w-12
                    h-12
                    flex-shrink-0
                    bg-[#f7f3ed]
                    flex
                    items-center
                    justify-center
                    text-[#d97706]
                    text-lg
                    group-hover:bg-[#d97706]
                    group-hover:text-white
                    transition
                  ">
                    @
                  </div>


                  <div>

                    <p className="
                      text-[10px]
                      uppercase
                      tracking-[2px]
                      text-gray-400
                    ">
                      Email Us
                    </p>

                    <a
                      href="mailto:contact@zroyenterprise.com"
                      className="
                        block
                        mt-1
                        text-sm
                        font-medium
                        text-[#242424]
                        hover:text-[#d97706]
                        transition
                      "
                    >
                     contact@zroyenterprise.com
                    </a>

                  </div>

                </div>


                {/* BUSINESS HOURS */}

                <div className="
                  group
                  flex
                  items-center
                  gap-5
                  p-5
                  border
                  border-gray-200
                  hover:border-[#d97706]
                  transition-all
                  duration-300
                ">

                  <div className="
                    w-12
                    h-12
                    flex-shrink-0
                    bg-[#f7f3ed]
                    flex
                    items-center
                    justify-center
                    text-[#d97706]
                    text-lg
                    group-hover:bg-[#d97706]
                    group-hover:text-white
                    transition
                  ">
                    ◷
                  </div>


                  <div>

                    <p className="
                      text-[10px]
                      uppercase
                      tracking-[2px]
                      text-gray-400
                    ">
                      Support Hours
                    </p>

                    <p className="
                      mt-1
                      text-sm
                      font-medium
                      text-[#242424]
                    ">
                      Monday – Saturday
                    </p>

                    <p className="
                      text-xs
                      text-gray-500
                      mt-1
                    ">
                      10:00 AM – 7:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

      </ScrollReveal>


      {/* ============================================== */}
      {/* QUICK HELP SECTION */}
      {/* ============================================== */}

      <section className="
        bg-[#faf9f6]
        py-16
        sm:py-20
      ">

        <div className="
          max-w-[1500px]
          mx-auto
          px-5
          sm:px-8
          lg:px-12
        ">

          <ScrollReveal direction="up">

            <div className="text-center mb-12">

              <p className="
                text-[#d97706]
                text-xs
                uppercase
                tracking-[4px]
                font-semibold
              ">
                Need Assistance?
              </p>

              <h2 className="
                prata-regular
                text-3xl
                sm:text-4xl
                text-[#242424]
                mt-3
              ">
                How Can We Help?
              </h2>

            </div>

          </ScrollReveal>


          <div className="
            grid
            grid-cols-1
            sm:grid-cols-3
            border
            border-gray-200
            bg-white
          ">


            {/* ORDER */}

            <ScrollReveal direction="up" delay={0}>

              <div className="
                group
                text-center
                px-6
                py-10
                border-b
                sm:border-b-0
                sm:border-r
                border-gray-200
                hover:bg-[#242424]
                transition-all
                duration-500
              ">

                <div className="
                  text-3xl
                  text-[#d97706]
                ">
                  01
                </div>

                <h3 className="
                  mt-5
                  text-sm
                  font-bold
                  tracking-[1.5px]
                  text-[#242424]
                  group-hover:text-white
                  transition
                ">
                  ORDER SUPPORT
                </h3>

                <p className="
                  mt-3
                  text-sm
                  text-gray-500
                  group-hover:text-gray-300
                  transition
                ">
                  Questions about your order or delivery?
                  We're here to assist.
                </p>

              </div>

            </ScrollReveal>


            {/* PRODUCT */}

            <ScrollReveal direction="up" delay={100}>

              <div className="
                group
                text-center
                px-6
                py-10
                border-b
                sm:border-b-0
                sm:border-r
                border-gray-200
                hover:bg-[#242424]
                transition-all
                duration-500
              ">

                <div className="
                  text-3xl
                  text-[#d97706]
                ">
                  02
                </div>

                <h3 className="
                  mt-5
                  text-sm
                  font-bold
                  tracking-[1.5px]
                  text-[#242424]
                  group-hover:text-white
                  transition
                ">
                  PRODUCT QUESTIONS
                </h3>

                <p className="
                  mt-3
                  text-sm
                  text-gray-500
                  group-hover:text-gray-300
                  transition
                ">
                  Need help choosing the right product?
                  Ask our team.
                </p>

              </div>

            </ScrollReveal>


            {/* GENERAL */}

            <ScrollReveal direction="up" delay={200}>

              <div className="
                group
                text-center
                px-6
                py-10
                hover:bg-[#242424]
                transition-all
                duration-500
              ">

                <div className="
                  text-3xl
                  text-[#d97706]
                ">
                  03
                </div>

                <h3 className="
                  mt-5
                  text-sm
                  font-bold
                  tracking-[1.5px]
                  text-[#242424]
                  group-hover:text-white
                  transition
                ">
                  GENERAL ENQUIRIES
                </h3>

                <p className="
                  mt-3
                  text-sm
                  text-gray-500
                  group-hover:text-gray-300
                  transition
                ">
                  Have another question? Get in touch
                  and we'll be happy to help.
                </p>

              </div>

            </ScrollReveal>

          </div>

        </div>

      </section>


      {/* ============================================== */}
      {/* NEWSLETTER */}
      {/* ============================================== */}

      <section className="
        max-w-[1500px]
        mx-auto
        px-5
        sm:px-8
        lg:px-12
        py-20
      ">

        <NewsletterBox />

      </section>

    </div>
  );
};

export default Contact;