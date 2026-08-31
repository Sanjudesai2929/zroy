import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import ScrollReveal from "../components/ScrollReveal";

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [selectedPack, setSelectedPack] = useState("");
  const [selectedCapacity, setSelectedCapacity] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const product = products.find((item) => item._id === productId);

    if (product) {
      setProductData(product);

      if (product.image && product.image.length > 0) {
        setImage(product.image[0]);
      }

      if (product.packOf && product.packOf.length > 0) {
        setSelectedPack(product.packOf[0]);
      } else {
        setSelectedPack("");
      }

      if (product.capacity && product.capacity.length > 0) {
        setSelectedCapacity(product.capacity[0]);
      } else {
        setSelectedCapacity("");
      }
    }
  }, [productId, products]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(
        productData._id,
        "",
        selectedPack,
        selectedCapacity
      );
    }
  };

  const handleBuyNow = () => {
    addToCart(
      productData._id,
      "",
      selectedPack,
      selectedCapacity
    );

    navigate("/cart");
  };

  if (!productData) {
    return (
      <div className="min-h-[500px] flex items-center justify-center">
        <p className="text-gray-400">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="bg-white">

      {/* PRODUCT */}
      <ScrollReveal direction="up">
        <section className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 pb-16">

          {/* BREADCRUMB */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer hover:text-[#d97706]"
            >
              Home
            </span>

            <span>/</span>

            <span
              onClick={() => navigate("/collection")}
              className="cursor-pointer hover:text-[#d97706]"
            >
              Collection
            </span>

            <span>/</span>

            <span className="text-gray-600 truncate">
              {productData.name}
            </span>
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* IMAGE SECTION */}
            <div className="grid grid-cols-1 sm:grid-cols-[90px_1fr] gap-4">

              {/* THUMBNAILS */}
              <div className="order-2 sm:order-1 flex sm:flex-col gap-3 overflow-x-auto">

                {productData.image &&
                  productData.image.map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setImage(item)}
                      className={`flex-shrink-0 w-[75px] h-[85px] sm:w-[80px] sm:h-[90px] bg-[#f7f3ed] border overflow-hidden transition ${
                        image === item
                          ? "border-[#d97706]"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <img
                        src={item}
                        alt={productData.name}
                        className="w-full  object-contain "
                      />
                    </button>
                  ))}
              </div>

              {/* MAIN IMAGE */}
              <div className="order-1 sm:order-2 relative min-h-[400px] sm:min-h-[550px] bg-[#f7f3ed] overflow-hidden">

                <div className="absolute w-[280px] h-[280px] sm:w-[430px] sm:h-[430px] rounded-full bg-[#ead8bd] -right-24 -bottom-24" />

                <img
                  src={image}
                  alt={productData.name}
                  className="relative z-10 w-full  min-h-[400px] sm:min-h-[550px] object-contain p-8 sm:p-12 transition-transform duration-500 hover:scale-105"
                />

                {/* CATEGORY */}
                <div className="absolute z-20 top-5 left-5 bg-white px-4 py-2 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[2px] font-semibold text-[#d97706]">
                    {productData.category || "ZROY"}
                  </p>
                </div>
              </div>
            </div>

            {/* PRODUCT INFO */}
            <div className="flex flex-col">

              {/* BRAND */}
              <p className="text-[#d97706] text-xs uppercase tracking-[3px] font-semibold">
                ZROY ENTERPRISE
              </p>

              {/* PRODUCT NAME */}
              <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl text-[#242424] leading-tight mt-3">
                {productData.name}
              </h1>

              {/* RATING */}
              <div className="flex items-center gap-3 mt-5">

                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((item) => (
                    <img
                      key={item}
                      src={assets.star_icon}
                      alt="star"
                      className="w-3.5 h-3.5"
                    />
                  ))}

                  <img
                    src={assets.star_dull_icon}
                    alt="star"
                    className="w-3.5 h-3.5"
                  />
                </div>

                <span className="text-xs text-gray-400">
                  4.5
                </span>

                <span className="text-gray-300">|</span>

                <span className="text-xs text-gray-500">
                  122 Reviews
                </span>
              </div>

              {/* PRICE */}
              <div className="mt-7 pb-7 border-b border-gray-200">

                <p className="text-3xl sm:text-4xl font-semibold text-[#242424]">
                  {currency}
                  {productData.price}
                </p>

                <p className="text-xs text-gray-400 mt-2">
                  Inclusive of applicable taxes
                </p>
              </div>

              {/* DESCRIPTION */}
              <p className="mt-7 text-sm sm:text-base text-gray-600 leading-7">
                {productData.description}
              </p>

              {/* PACK */}
              {productData.packOf &&
                productData.packOf.length > 0 && (
                  <div className="mt-7">

                    <p className="text-sm font-semibold text-[#242424] mb-3">
                      Pack Size
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {productData.packOf.map((item, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setSelectedPack(item)}
                          className={`px-5 py-3 border text-sm transition ${
                            selectedPack === item
                              ? "bg-[#242424] text-white border-[#242424]"
                              : "border-gray-300 hover:border-[#242424]"
                          }`}
                        >
                          {item}
                        </button>
                      ))}

                    </div>
                  </div>
                )}

              {/* CAPACITY / SIZE */}
              {productData.capacity &&
                productData.capacity.length > 0 && (
                  <div className="mt-7">

                    <p className="text-sm font-semibold text-[#242424] mb-3">

                      {productData.category === "BOTTLE"
                        ? "Capacity"
                        : productData.category === "CHOPPER"
                        ? "Blade Size"
                        : productData.category === "KNIFE"
                        ? "Blade Length"
                        : "Available Size"}

                    </p>

                    <div className="flex flex-wrap gap-2">

                      {productData.capacity.map((item, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setSelectedCapacity(item)}
                          className={`px-5 py-3 border text-sm transition ${
                            selectedCapacity === item
                              ? "bg-[#242424] text-white border-[#242424]"
                              : "border-gray-300 hover:border-[#242424]"
                          }`}
                        >
                          {item}

                          {productData.category === "BOTTLE"
                            ? " ml"
                            : productData.category === "CHOPPER" ||
                              productData.category === "KNIFE"
                            ? " inch"
                            : ""}
                        </button>
                      ))}

                    </div>
                  </div>
                )}

              {/* QUANTITY */}
              <div className="mt-8">

                <p className="text-sm font-semibold mb-3">
                  Quantity
                </p>

                <div className="flex items-center border border-gray-300 w-[130px] h-[48px]">

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((prev) => Math.max(1, prev - 1))
                    }
                    className="w-10 h-full hover:bg-gray-100"
                  >
                    −
                  </button>

                  <span className="flex-1 text-center text-sm">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((prev) => prev + 1)
                    }
                    className="w-10 h-full hover:bg-gray-100"
                  >
                    +
                  </button>

                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 mt-7">

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 h-[52px] bg-[#242424] text-white text-sm font-semibold tracking-[1px] hover:bg-[#d97706] transition"
                >
                  ADD TO CART
                </button>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="flex-1 h-[52px] border border-[#242424] text-[#242424] text-sm font-semibold tracking-[1px] hover:bg-[#242424] hover:text-white transition"
                >
                  BUY NOW
                </button>

              </div>

              {/* FEATURES */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-7 border-t border-gray-200">

                <div>
                  <div className="w-9 h-9 flex items-center justify-center bg-[#f7f3ed] text-[#d97706] mb-3">
                    ✓
                  </div>

                  <p className="text-xs font-semibold">
                    Quality Product
                  </p>

                  <p className="text-[10px] text-gray-400 mt-1">
                    Carefully selected
                  </p>
                </div>

                <div>
                  <div className="w-9 h-9 flex items-center justify-center bg-[#f7f3ed] text-[#d97706] mb-3">
                    ↻
                  </div>

                  <p className="text-xs font-semibold">
                    Easy Returns
                  </p>

                  <p className="text-[10px] text-gray-400 mt-1">
                    7 day return policy
                  </p>
                </div>

                <div>
                  <div className="w-9 h-9 flex items-center justify-center bg-[#f7f3ed] text-[#d97706] mb-3">
                    🔒
                  </div>

                  <p className="text-xs font-semibold">
                    Secure Shopping
                  </p>

                  <p className="text-[10px] text-gray-400 mt-1">
                    Safe checkout
                  </p>
                </div>

              </div>

              {/* COD */}
              <div className="mt-7 bg-[#faf9f6] border border-gray-200 px-5 py-4">

                <p className="text-xs font-semibold text-[#242424]">
                  Cash on Delivery Available
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Pay conveniently when your order arrives.
                </p>

              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* DESCRIPTION */}
      <ScrollReveal direction="up">
        <section className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 pb-16">

          <div className="border-t border-gray-200 pt-12">

            <div className="flex items-center gap-3 mb-4">

              <span className="w-8 h-[2px] bg-[#d97706]" />

              <p className="text-[#d97706] text-xs uppercase tracking-[3px] font-semibold">
                Product Details
              </p>

            </div>

            <h2 className="prata-regular text-3xl sm:text-4xl text-[#242424]">
              About This Product
            </h2>

            <p className="max-w-4xl mt-6 text-sm sm:text-base text-gray-500 leading-7">
              {productData.description}
            </p>

          </div>
        </section>
      </ScrollReveal>

      {/* RELATED PRODUCTS */}
      <section className="bg-[#faf9f6] py-16">

        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">

          <RelatedProducts
            category={productData.category}
            subCategory={productData.subCategory}
          />

        </div>

      </section>

    </div>
  );
};

export default Product;