import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ImageGallerySection = () => {
  // Maine filenames ko aapke screenshot ke hisaab se theek kar diya hai
  const galleryImages = [
    {
      src: "/images/1-manuka-honey-web-24--5-png.png",
      alt: "Manuka Honey Product 1",
    },
    {
      src: "/images/2-manuka-honey-web-24-png.png",
      alt: "Manuka Honey Product 2",
    },
    {
      src: "/images/3-manuka-honey-web-24--1-png.png",
      alt: "Manuka Honey Product 3",
    },
    {
      src: "/images/4-24-product-tiles-250g--2000-x-2000-06-jpg.png",
      alt: "Manuka Honey Product 4",
    },
    {
      src: "/images/5-24-product-tiles-250g--2000-x-2000-06-jpg.png",
      alt: "Manuka Honey Product 5",
    },
    {
      src: "/images/6newzealandmanukahoneyumf24--06-136149-png.png",
      alt: "Manuka Honey Product 6",
    },
  ];

  return (
        <section className="w-full max-w-[585px] mx-auto relative px-4 sm:px-0">
      {/* Hero Image */}
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <img
          className="w-full h-64 sm:h-80 lg:h-[617px] object-cover rounded-lg"
          alt="Manuka Honey Product Container"
          src="/images/container-1.svg"
        />
      </div>

      {/* Gallery Grid */}
      <div className="mt-6 sm:mt-9 space-y-3 sm:space-y-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        {/* First Row */}
        <div className="grid grid-cols-2 gap-2 sm:gap-[10px]">
          <Card className="w-full aspect-[4/3] overflow-hidden">
            <CardContent className="p-0 h-full">
              <div
                className="w-full h-full bg-[#fbf9f6] bg-cover bg-center"
                style={{ backgroundImage: `url(${galleryImages[0].src})` }}
                role="img"
                aria-label={galleryImages[0].alt}
              />
            </CardContent>
          </Card>
          <Card className="w-full aspect-[4/3] overflow-hidden">
            <CardContent className="p-0 h-full">
              <div
                className="w-full h-full bg-[#fbf9f6] bg-cover bg-center"
                style={{ backgroundImage: `url(${galleryImages[1].src})` }}
                role="img"
                aria-label={galleryImages[1].alt}
              />
            </CardContent>
          </Card>
        </div>

        {/* Video/Media Section */}
        <div className="w-full h-48 sm:h-64 lg:h-[300px] overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
            <div className="w-full h-full bg-black">
              <div className="relative w-full h-full">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ backgroundImage: "url(/images/contain-2.png)" }}
                  role="img"
                  aria-label="Product video thumbnail"
                />

                <img
                  className="absolute w-full h-16 sm:h-20 lg:h-[99px] top-0 left-0"
                  alt=""
                  src="/images/contain-3.png"
                />

                <div className="absolute w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px] top-2 left-2 lg:top-[7px] lg:left-[7px] rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="New Zealand Honey Co. profile"
                    src="/images/contain-4.png"
                  />
                </div>

                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-2 sm:gap-4">
                  <button 
                    className="text-white text-xs sm:text-sm font-medium opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black px-2 py-1 rounded"
                    aria-label="Add to watch later"
                  >
                    Watch Later
                  </button>
                  <button 
                    className="text-white text-xs sm:text-sm font-medium opacity-90 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black px-2 py-1 rounded"
                    aria-label="Share video"
                  >
                    Share
                  </button>
                  <span className="text-white text-xs sm:text-sm font-medium opacity-90">
                    1/1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 gap-2 sm:gap-[10px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <Card className="w-full aspect-[4/3] overflow-hidden">
            <CardContent className="p-0 h-full">
              <div
                className="w-full h-full bg-[#fbf9f6] bg-cover bg-center"
                style={{ backgroundImage: `url(${galleryImages[2].src})` }}
                role="img"
                aria-label={galleryImages[2].alt}
              />
            </CardContent>
          </Card>
          <Card className="w-full aspect-[4/3] overflow-hidden">
            <CardContent className="p-0 h-full">
              <div
                className="w-full h-full bg-[#fbf9f6] bg-cover bg-center"
                style={{ backgroundImage: `url(${galleryImages[3].src})` }}
                role="img"
                aria-label={galleryImages[3].alt}
              />
            </CardContent>
          </Card>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-2 gap-2 sm:gap-[10px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <Card className="w-full aspect-[4/3] overflow-hidden">
            <CardContent className="p-0 h-full">
              <div
                className="w-full h-full bg-[#fbf9f6] bg-cover bg-center"
                style={{ backgroundImage: `url(${galleryImages[4].src})` }}
                role="img"
                aria-label={galleryImages[4].alt}
              />
            </CardContent>
          </Card>
          <Card className="w-full aspect-[4/3] overflow-hidden">
            <CardContent className="p-0 h-full">
              <div
                className="w-full h-full bg-[#fbf9f6] bg-cover bg-center"
                style={{ backgroundImage: `url(${galleryImages[5].src})` }}
                role="img"
                aria-label={galleryImages[5].alt}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
};