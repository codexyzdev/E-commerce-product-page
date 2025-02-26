import React, { useState, useContext } from "react";
import { StoreContext } from "./StoreContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { count, setCount } = useContext(StoreContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='p-4 bg-white border-b border-gray-200 md:pb-8 md:pt-6 custom:px-0'>
      <nav className='flex justify-between items-center relative'>
        <div className='flex items-center justify-between gap-4 md:gap-16'>
          <button
            className='pt-1 md:hidden cursor-pointer'
            onClick={toggleMenu}
          >
            <img src='/images/icon-menu.svg' alt='Menu Icon' />
          </button>
          <a href='/'>
            <img src='/images/logo.svg' alt='Logo' />
          </a>
          <ul className='hidden md:flex gap-4 relative'>
            <li>
              <a
                href='#'
                className='hover:pb-10 hover:border-orange hover:border-b-3'
              >
                Collections
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:pb-10 hover:border-orange hover:border-b-3'
              >
                Men
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:pb-10 hover:border-orange hover:border-b-3'
              >
                Women
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:pb-10 hover:border-orange hover:border-b-3'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='hover:pb-10 hover:border-orange hover:border-b-3'
              >
                Contact
              </a>
            </li>
          </ul>
          <div
            className={`md:hidden transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out fixed top-0 left-0 w-full h-full bg-black/75 z-10 `}
          >
            <ul className='w-8/12 h-full bg-white p-4 flex flex-col gap-4 font-bold'>
              <button
                className='pt-2 mb-6  cursor-pointer'
                onClick={toggleMenu}
              >
                <img src='/images/icon-close.svg' alt='Close Icon' />
              </button>
              <li>
                <a href='#'>Collections</a>
              </li>
              <li>
                <a href='#'>Men</a>
              </li>
              <li>
                <a href='#'>Women</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex items-center pt-1 gap-4'>
          <button
            className='cursor-pointer relative'
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            {count > 0 && (
              <span className='absolute -top-2 -right-2 bg-orange text-white w-4 h-4  rounded-full flex justify-center items-center text-[10px]'>
                {count}
              </span>
            )}

            <img src='/images/icon-cart.svg' alt='Cart Icon' />
          </button>
          <img
            className='size-6 md:size-9 cursor-pointer'
            src='/images/image-avatar.png'
            alt='Avatar'
          />
        </div>
        <div
          className={`cart-container absolute z-50
             w-full md:w-96 h-72 transition-transform duration-300 ease-in-out
             bg-white rounded-lg top-15 md:right-0 md:top-16 shadow-md overflow-hidden  ${
               isCartOpen ? "scale-100" : "scale-0"
             }`}
        >
          <h2 className='font-bold p-5 '>Cart</h2>
          <div className='bg-black/10 h-[1px]' />
          <div className=' p-5 h-56 w-full  overflow-y-auto flex flex-col justify-center items-center gap-4'>
            {count > 0 ? (
              <div className='flex flex-col gap-4 w-full'>
                <div className='flex justify-between items-center text-[14px] gap-4 w-full'>
                  <img
                    className='size-12 rounded-md'
                    src='/images/image-product-1-thumbnail.jpg'
                  />
                  <div className='flex justify-between items-center w-full'>
                    <div className='flex flex-col gap-1 '>
                      <span>Fall Limited Edition Sneakers</span>
                      <span className='flex gap-2'>
                        $125.00 x {count}{" "}
                        <div className='font-bold'>${125 * count}</div>
                      </span>
                    </div>
                    <button
                      onClick={() => setCount(0)}
                      className='cursor-pointer'
                    >
                      <img src='/images/icon-delete.svg' alt='' />
                    </button>
                  </div>
                </div>
                <button className='bg-orange font-bold py-3 rounded-md w-full flex justify-center items-center gap-2'>
                
                  <span>Checkout</span>
                </button>
              </div>
            ) : (
              <p className='font-semibold'>Your cart is empty</p>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
