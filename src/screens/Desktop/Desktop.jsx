import React from "react";
import { ImageGallerySection } from "./sections/ImageGallerySection/ImageGallerySection";
import { ProductDetailsSection } from "./sections/ProductDetailsSection/ProductDetailsSection";
import { TasteProfileSection } from "./sections/TasteProfileSection/TasteProfileSection";

export const Desktop = () => {
  return (
    <main
      className="flex flex-col w-full max-w-[1440px] mx-auto items-start relative bg-[#fbf9f6] min-h-screen"
      data-model-id="1:3"
    >
      <section className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] w-full">
        <ProductDetailsSection />
      </section>

      <section className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] flex flex-col lg:flex-row items-start gap-4 lg:gap-2.5 relative w-full flex-1 px-4 sm:px-6 lg:px-0">
        <div className="w-full lg:flex lg:items-start lg:w-full bg-[#fbf9f6]">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] w-full lg:flex-1 mb-8 lg:mb-0">
            <ImageGallerySection />
          </div>
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] w-full lg:flex-1">
            <TasteProfileSection />
          </div>
        </div>
      </section>
    </main>
  );
};
