import { useState } from "react";
export default function Main() {
  const [currentImage, setCurrentImage] = useState(1);
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

  return (
    <main className="max-w-screen-lg mx-auto  lg:mt-20">
      <section className='flex relative'>
        <img className="aspect-square" src={productImg(currentImage)[0]} alt='' />
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
      <section className="p-4"></section>
    </main>
  );
}
