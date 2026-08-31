import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    setVisible(false);
  };

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/collection" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className=" top-0 z-[999] w-full  border-b border-black/10">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="h-[76px] flex items-center justify-between">

            {/* LOGO */}

            <Link to="/" className="flex-shrink-0">
              <img
                src={assets.logo}
                className="w-28 sm:w-32 "
                alt="Zroy Enterprise"
              />
            </Link>


            {/* DESKTOP NAV */}

            <nav className="hidden lg:flex items-center gap-9">

              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative py-2 text-[11px] tracking-[2px] font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-[#f59e0b]"
                        : "text-gray-300 hover:text-black"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}

                      <span
                        className={`absolute left-0 right-0 mx-auto -bottom-1 h-[2px] bg-[#d97706] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}

            </nav>


            {/* RIGHT ACTIONS */}

            <div className="flex items-center gap-5 sm:gap-6">

              {/* SEARCH */}

              <button
                type="button"
                onClick={() => {
                  setShowSearch(true);
                  navigate("/collection");
                }}
                className="group flex items-center justify-center"
              >
                <img
                  src={assets.search_icon}
                  className="w-[19px]  invert opacity-80 group-hover:opacity-100 transition"
                  alt="Search"
                />
              </button>


              {/* ACCOUNT */}

              <div className="group relative hidden sm:block">

                <button
                  type="button"
                  onClick={() => {
                    if (!token) {
                      navigate("/login");
                    }
                  }}
                >
                  <img
                    src={assets.profile_icon}
                    className="w-[19px]  invert opacity-80 group-hover:opacity-100 transition"
                    alt="Account"
                  />
                </button>


                {/* ACCOUNT DROPDOWN */}

                {token && (
                  <div className="absolute right-[-15px] top-full pt-5 hidden group-hover:block">

                    <div className="w-44 bg-black shadow-2xl border border-gray-100 p-2">

                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-[10px] uppercase tracking-[2px] text-gray-400">
                          My Account
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => navigate("/orders")}
                        className="w-full text-left px-4 py-3 text-sm text-gray-600 hover:bg-[#f7f5f0] hover:text-[#d97706] transition"
                      >
                        My Orders
                      </button>

                      <button
                        type="button"
                        onClick={logout}
                        className="w-full text-left px-4 py-3 text-sm text-gray-600 hover:bg-[#f7f5f0] hover:text-[#d97706] transition"
                      >
                        Logout
                      </button>

                    </div>

                  </div>
                )}

              </div>


              {/* CART */}

              <Link to="/cart" className="relative group">

                <img
                  src={assets.cart_icon}
                  className="w-[20px]  invert opacity-80 group-hover:opacity-100 transition"
                  alt="Cart"
                />

                <span className="absolute -right-2 -top-2 min-w-[17px] h-[17px] px-1 rounded-full bg-[#d97706] text-black text-[9px] font-bold flex items-center justify-center leading-none">
                  {getCartCount()}
                </span>

              </Link>


              {/* MOBILE MENU BUTTON */}

              <button
                type="button"
                onClick={() => setVisible(true)}
                className="lg:hidden flex items-center justify-center"
              >
                <img
                  src={assets.menu_icon}
                  className="w-[21px]  invert"
                  alt="Menu"
                />
              </button>

            </div>

          </div>
        </div>
      </header>


      {/* ================= MOBILE MENU ================= */}

      <div
        className={`fixed inset-0 z-[1000] bg-[#242424] transition-transform duration-500 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* MOBILE HEADER */}

        <div className="h-[76px] px-5 sm:px-8 flex items-center justify-between border-b border-black/10">

          <Link
            to="/"
            onClick={() => setVisible(false)}
          >
            <img
              src={assets.logo}
              className="w-28  invert"
              alt="Zroy Enterprise"
            />
          </Link>


          <button
            type="button"
            onClick={() => setVisible(false)}
            className="w-10 h-10 border border-black/20 flex items-center justify-center text-black text-2xl hover:bg-[#d97706] hover:border-[#d97706] transition"
          >
            ×
          </button>

        </div>


        {/* MOBILE NAVIGATION */}

        <div className="px-6 sm:px-10 pt-10">

          <p className="text-[#f59e0b] text-xs uppercase tracking-[4px] font-semibold mb-7">
            Zroy Enterprise
          </p>


          <nav className="flex flex-col">

            {navItems.map((item, index) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setVisible(false)}
                className={({ isActive }) =>
                  `group flex items-center justify-between py-5 border-b border-black/10 text-lg sm:text-xl font-medium tracking-[1px] transition ${
                    isActive
                      ? "text-[#f59e0b]"
                      : "text-gray-300 hover:text-black"
                  }`
                }
              >
                <span className="flex items-center gap-4">

                  <span className="text-xs text-gray-500 font-mono">
                    0{index + 1}
                  </span>

                  {item.name}

                </span>

                <span className="text-[#d97706] transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>

              </NavLink>
            ))}

          </nav>


          {/* MOBILE ACCOUNT */}

          <div className="mt-10 grid grid-cols-2 gap-3">

            <button
              type="button"
              onClick={() => {
                setVisible(false);

                if (token) {
                  navigate("/orders");
                } else {
                  navigate("/login");
                }
              }}
              className="border border-black/20 text-gray-300 py-4 text-xs tracking-[2px] font-semibold hover:bg-black hover:text-[#242424] transition"
            >
              {token ? "MY ORDERS" : "LOGIN"}
            </button>


            <Link
              to="/cart"
              onClick={() => setVisible(false)}
              className="bg-[#d97706] text-black py-4 text-xs tracking-[2px] font-semibold text-center hover:bg-[#f59e0b] transition"
            >
              CART ({getCartCount()})
            </Link>

          </div>


          {/* BRAND MESSAGE */}

          <div className="mt-16 pt-6 border-t border-black/10">

            <p className="text-gray-500 text-xs uppercase tracking-[3px]">
              Smart Products.
            </p>

            <p className="text-[#f59e0b] text-xs uppercase tracking-[3px] mt-2">
              Better Living.
            </p>

          </div>

        </div>

      </div>
    </>
  );
};

export default Navbar;