import { createContext, useState } from "react";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [count, setCount] = useState(0);
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
    <StoreContext.Provider value={{ count, setCount, currentImage, productImg, previousImage, nextImage }}>
      {children}
    </StoreContext.Provider>
  );
}
