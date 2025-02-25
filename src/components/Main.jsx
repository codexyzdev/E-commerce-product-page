import { useState, useContext } from "react";
import { StoreContext } from "./StoreContext";
export default function Main() {
  const [currentImage, setCurrentImage] = useState(1);
  const { count, setCount } = useContext(StoreContext);
  const [items, setItems] = useState(0);
  const productImg = (num) => {
    const img = "/images/image-product-" + num + ".jpg";
    const thumbnail = "/images/image-product-" + num + "-thumbnail.jpg";
    return [img, thumbnail];
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev === 1 ? 4 : prev - 1));
  };
  const nextImage = () => {
    setCurrentImage((prev) => (prev === 4 ? 1 : prev + 1));
  };

  const addToCart = () => {
    setCount(count + items);
  };

  const removeItems = () => {
    if (items > 0) {
      setItems(items - 1);
    }
  };

  const addItems = () => {
    setItems(items + 1);
  };

  return (
    <main className='max-w-screen-lg mx-auto  lg:mt-20'>
      <section className='flex relative'>
        <img
          className='aspect-square'
          src={productImg(currentImage)[0]}
          alt=''
        />
        <button
          onClick={previousImage}
          className='absolute md:hidden  cursor-pointer flex justify-center items-center top-[50%] -translate-y-[50%] rounded-full bg-white size-10 left-4'
        >
          <img src='/images/icon-previous.svg' className='size-3' alt='' />
        </button>
        <button
          onClick={nextImage}
          className='absolute md:hidden cursor-pointer flex justify-center items-center top-[50%] -translate-y-[50%] rounded-full bg-white size-10 right-4'
        >
          <img src='/images/icon-next.svg' className='size-3' alt='' />
        </button>
      </section>
      <section className='p-4 pb-14'>
        <h2> Sneaker Company</h2>
        <h1 className='font-bold text-3xl pt-2 pb-4'>
          Fall Limited Edition Sneakers
        </h1>
        <p className='pb-4'>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className='flex justify-between items-center pb-4 '>
          <div className='flex items-center gap-4'>
            <span className='font-bold text-lg'>$125.00</span>
            <span className='text-xs text-white bg-black px-2 py-0.5 rounded-md'>
              50%
            </span>
          </div>
          <span className='line-through text-xs font-bold'>$250.00</span>
        </div>
        <div className='flex justify-between items-center mb-4 py-2 px-4 rounded-md bg-grayish-blue/10'>
          <button onClick={removeItems}>
            <img src='/images/icon-minus.svg' alt='' />
          </button>
          <span className='font-bold'>{items}</span>
          <button onClick={addItems}>
            <img src='/images/icon-plus.svg' alt='' />
          </button>
        </div>
        <button
          onClick={addToCart}
          className='bg-orange font-bold py-3 rounded-md w-full flex justify-center items-center gap-2'
        >
          <svg width='22' height='20' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
              fill-rule='nonzero'
            />
          </svg>
          <span>Add to cart</span>
        </button>
      </section>
    </main>
  );
}
