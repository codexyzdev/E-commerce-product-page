import Header from "./Header";
import Main from "./Main";
import { useContext } from "react";
import { StoreContext } from "./StoreContext";
export default function Container() {
  const {
    currentImage,
    productImg,
    previousImage,
    nextImage,
    changeImage,
    isDailogOpen,
    setIsDailogOpen,
  } = useContext(StoreContext);

  return (
    <>
      <dialog
        className={`bg-black/75 w-full h-full z-50 ${
          isDailogOpen ? "md:flex" : ""
        } justify-center items-center`}
      >
        <div className='flex flex-col gap-4'>
          <button
            onClick={() => setIsDailogOpen(false)}
            className='cursor-pointer self-end'
          >
            <img src='/images/icon-close.svg' alt='Close Icon' />
          </button>
          <div className='flex flex-col gap-4 w-[512px]'>
            <div className='relative'>
              <img className='w-lg rounded-md' src={productImg(currentImage)[0]} />
              <button
                onClick={previousImage}
                className='absolute  hover:scale-[1.1] transition-transform duration-300 ease-in-out   cursor-pointer flex justify-center items-center top-[50%] -translate-y-[50%] rounded-full bg-white size-10 -left-4'
              >
                <img
                  src='/images/icon-previous.svg'
                  className='size-3'
                  alt=''
                />
              </button>
              <button
                onClick={nextImage}
                className='absolute  hover:scale-[1.1] transition-transform duration-300 ease-in-out cursor-pointer flex justify-center items-center top-[50%] -translate-y-[50%] rounded-full bg-white size-10 -right-4'
              >
                <img src='/images/icon-next.svg' className='size-3' alt='' />
              </button>
            </div>
            <div className='flex justify-evenly '>
              <img
                className={`hover:opacity-60 cursor-pointer size-20
              ${
                currentImage == 1 ? "opacity-60 border-3 border-orange" : ""
              }  rounded-md`}
                src={productImg(1)[1]}
                onClick={() => changeImage(1)}
              />
              <img
                className={`hover:opacity-50 cursor-pointer size-20
            ${
              currentImage == 2 ? "opacity-50 border-3 border-orange" : ""
            }  rounded-md`}
                src={productImg(2)[1]}
                onClick={() => changeImage(2)}
              />
              <img
                className={`hover:opacity-60 cursor-pointer size-20
              ${
                currentImage == 3 ? "opacity-60 border-3 border-orange" : ""
              }  rounded-md`}
                src={productImg(3)[1]}
                onClick={() => changeImage(3)}
              />
              <img
                className={`hover:opacity-60 cursor-pointer size-20
              ${
                currentImage == 4 ? "opacity-60 border-3 border-orange" : ""
              }  rounded-md`}
                src={productImg(4)[1]}
                onClick={() => changeImage(4)}
              />
            </div>
          </div>
        </div>
      </dialog>
      <div className='max-w-6xl mx-auto'>
        <Header />
        <Main />
      </div>
    </>
  );
}
