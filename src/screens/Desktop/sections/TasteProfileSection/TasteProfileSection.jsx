import { InfoIcon, MinusIcon, PlusIcon, StarIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Separator } from "../../../../components/ui/separator";
import { UmfMgoModal } from "../../../../components/ui/umf-mgo-modal";

export const TasteProfileSection = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedPayment, setSelectedPayment] = useState("one-time");

  // Data for certifications
  const certifications = [
    { src: "/images/certifications.png" },
    { src: "/images/certifications-1.png" },
    { src: "/images/certifications-2.png" },
    { src: "/images/certifications-3.png" },
    { src: "/images/certifications-4.png" },
    { src: "/images/certifications-5.png" },
  ];

  // Data for size variants
  const sizeVariants = [
    {
      src: "/images/label---label-paints.png",
      selected: true,
      className: "border-[#e87722]",
    },
    {
      src: "/images/label---label-paints-4.svg",
      selected: false,
      className: "",
    },
    {
      src: "/images/label---label-paints-5.svg",
      selected: false,
      className: "",
    },
    {
      src: "/images/label---label-paints-6.svg",
      selected: false,
      className: "",
    },
    {
      src: "/images/label---label-paints-2.svg",
      selected: false,
      className: "",
    },
    {
      src: "/images/label---label-paints-1.svg",
      selected: false,
      className: "",
    },
    {
      src: "/images/label---label-paints-3.svg",
      selected: false,
      className: "",
    },
  ];

  // Data for UMF scale
  const umfScale = [
    { label: "UMF™ 10+", color: "#e87722" },
    { label: "UMF™ 15+", color: "#e10600" },
    { label: "UMF™ 20+", color: "#ce0f69" },
    { label: "UMF™ 24+", color: "#830065", active: true },
    { label: "UMF™ 26+", color: "#0085ca" },
    { label: "UMF™ 28+", color: "#3bad4e" },
    { label: "UMF™ 30+", color: "#203e96" },
  ];

  // Data for star ratings
  const stars = Array(5).fill(null);

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="w-full max-w-[650px] mx-auto space-y-4 sm:space-y-6 px-4 sm:px-0 translate-y-[-1rem] animate-fade-in opacity-0">
      {/* Product Header */}
      <header className="space-y-3 sm:space-y-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h1 className="font-normal text-[#313131] text-2xl sm:text-3xl lg:text-[40px] tracking-[0] leading-tight lg:leading-[48px]">
          Manuka Honey
        </h1>

        <div className="flex items-baseline gap-2">
          <div className="flex items-baseline">
            <span className="font-normal text-[#313131] text-2xl sm:text-3xl lg:text-[38.3px] tracking-[0] leading-8 lg:leading-10">
              UMF
            </span>
            <span className="font-normal text-[#313131] text-sm sm:text-base lg:text-lg tracking-[0] leading-[18px] ml-1">
              ™
            </span>
          </div>
          <span className="font-normal text-[#313131] text-3xl sm:text-4xl lg:text-[56.1px] leading-tight lg:leading-[52.8px] tracking-[0]">
            24+
          </span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="font-normal text-[#313131] text-2xl sm:text-3xl lg:text-[40px] tracking-[0] leading-8 lg:leading-10">
            MGO
          </span>
          <span className="font-normal text-[#313131] text-3xl sm:text-4xl lg:text-[50.7px] leading-tight lg:leading-[52.8px] tracking-[0]">
            1122+
          </span>
        </div>
      </header>

      {/* InfoIcon Button */}
      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <UmfMgoModal>
          <Button
            variant="ghost"
            className="inline-flex items-center gap-2 px-3 py-2.5 bg-[#66666626] rounded-[99px] h-auto focus:outline-none focus:ring-2 focus:ring-[#f1b434] focus:ring-offset-2 hover:bg-[#66666640] transition-colors"
            aria-label="Learn more about UMF and MGO"
          >
            <img
              className="w-4 h-[17px]"
              alt=""
              src="/images/svg.svg"
            />
            <span className="font-normal text-[#666666] text-xs sm:text-[13.9px] tracking-[0] leading-[25px]">
              What is UMF and MGO?
            </span>
          </Button>
        </UmfMgoModal>
      </div>

      {/* Product Title and Reviews */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <h2 className="font-normal text-[#313131] text-base sm:text-lg tracking-[0] leading-[23.9px]">
          The Optimiser
        </h2>

        <div className="flex items-center gap-3">
          <div className="flex items-center relative" role="img" aria-label="5 out of 5 stars">
            {stars.map((_, index) => (
              <StarIcon
                key={index}
                className="w-[18px] h-4 fill-current text-yellow-400"
                style={{ marginLeft: index > 0 ? "5px" : "0" }}
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="font-normal text-[#313131] text-xs tracking-[2.00px] leading-5">
            825 REVIEWS
          </span>
        </div>
      </div>

      {/* Product Description */}
      <p className="font-normal text-[#313131] text-sm sm:text-base lg:text-lg tracking-[0] leading-relaxed lg:leading-[27px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        For those times in life when quality comes first. This pure UMF™ 24+
        Manuka Honey is powerfully active, sourced from wild and rugged locations
        around Aotearoa New Zealand and great for almost all uses. It has a full,
        delicious flavour and your body will love you for it.
      </p>

      {/* Certifications */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-[40px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[70px] lg:h-[70px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${cert.src})` }}
            role="img"
            aria-label={`Certification ${index + 1}`}
          />
        ))}
      </div>

      {/* Size Selection */}
      <div className="space-y-4 sm:space-y-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
        <div className="space-y-2">
          <h3 className="font-normal text-[#313131] text-sm tracking-[1.50px] leading-[21px]">
            SIZE (SELECT ONE)
          </h3>
          <p className="font-normal text-[#313131] text-sm sm:text-base lg:text-lg tracking-[0] leading-[23.9px]">
            Variant: 125g | 4.4oz
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-[9px]">
          {sizeVariants.slice(0, 4).map((variant, index) => (
            <button
              key={index}
              onClick={() => setSelectedSize(index)}
              className={`w-full aspect-square max-w-[130px] mx-auto rounded-[25px] border bg-cover bg-center bg-no-repeat transition-colors focus:outline-none focus:ring-2 focus:ring-[#f1b434] focus:ring-offset-2 ${
                index === selectedSize ? "border-[#e87722] border-2" : "border-gray-200"
              }`}
              style={{ backgroundImage: `url(${variant.src})` }}
              aria-label={`Size option ${index + 1}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-[9px] max-w-[400px]">
          {sizeVariants.slice(4, 7).map((variant, index) => (
            <button
              key={index + 4}
              onClick={() => setSelectedSize(index + 4)}
              className={`w-full aspect-square max-w-[130px] mx-auto rounded-[25px] border bg-cover bg-center bg-no-repeat transition-colors focus:outline-none focus:ring-2 focus:ring-[#f1b434] focus:ring-offset-2 ${
                index + 4 === selectedSize
                  ? "border-[#e87722] border-2"
                  : "border-gray-200"
              }`}
              style={{ backgroundImage: `url(${variant.src})` }}
              aria-label={`Size option ${index + 5}`}
            />
          ))}
        </div>
      </div>

      {/* Payment Options */}
      <div className="space-y-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
        <h3 className="font-normal text-[#313131] text-sm tracking-[1.50px] leading-[18.6px]">
          PAYMENT OPTIONS (SELECT ONE)
        </h3>

        <Card className="bg-[#f2f2f2] rounded-[25px] border-0">
          <CardContent className="p-4 sm:p-7">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                onClick={() => setSelectedPayment("one-time")}
                className={`flex-1 h-auto sm:h-[65px] py-3 sm:py-0 rounded-[50px] border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f1b434] ${
                  selectedPayment === "one-time"
                    ? "bg-[#f1b434] text-white border-[#f1b434]"
                    : "bg-white text-[#313131] border-[#f1b434] hover:bg-gray-50"
                }`}
                aria-pressed={selectedPayment === "one-time"}
              >
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                  <div className="text-center">
                    <div className="text-sm sm:text-base leading-[17.6px]">One-time</div>
                    <div className="text-sm sm:text-base leading-[17.6px]">purchase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm sm:text-base leading-[17.6px]">$55.88</div>
                    <div className="text-sm sm:text-base leading-[17.6px]">USD</div>
                  </div>
                </div>
              </Button>

              <Button
                onClick={() => setSelectedPayment("subscribe")}
                className={`flex-1 h-auto sm:h-[65px] py-3 sm:py-0 rounded-[50px] border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f1b434] ${
                  selectedPayment === "subscribe"
                    ? "bg-[#f1b434] text-white border-[#f1b434]"
                    : "bg-white text-[#313131] border-[#f1b434] hover:bg-gray-50"
                }`}
                aria-pressed={selectedPayment === "subscribe"}
              >
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                  <div className="text-center">
                    <div className="text-sm sm:text-[15.9px] leading-[17.6px]">
                      Subscribe & save
                    </div>
                    <div className="text-sm sm:text-[15.9px] leading-[17.6px]">20%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm sm:text-base leading-[17.6px]">$44.70</div>
                    <div className="text-sm sm:text-base leading-[17.6px]">USD</div>
                  </div>
                </div>
              </Button>
            </div>

            <Button 
              variant="ghost" 
              className="mt-4 h-auto p-0 focus:outline-none focus:ring-2 focus:ring-[#f1b434] focus:ring-offset-2"
              aria-label="Learn more about subscriptions"
            >
              <InfoIcon className="w-4 h-4 mr-2" />
              <span className="font-normal text-[#313131] text-sm">
                What is a Subscription?
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
        <div className="space-y-2 sm:flex-shrink-0">
          <h3 className="font-normal text-[#313131] text-[13px] tracking-[0.40px] leading-[19.5px]">
            SELECT QUANTITY
          </h3>
          <div className="flex items-center bg-[#f1b434] rounded-[50px] border border-white w-fit">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleQuantityChange(-1)}
              className="w-10 sm:w-12 h-[47px] text-white hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#f1b434]"
              aria-label="Decrease quantity"
              disabled={quantity <= 1}
            >
              <MinusIcon className="w-4 h-4" />
            </Button>
            <div className="w-[30px] text-center">
              <span className="text-white text-base" aria-live="polite">
                {quantity}
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleQuantityChange(1)}
              className="w-10 sm:w-12 h-[47px] text-white hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#f1b434]"
              aria-label="Increase quantity"
            >
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <Button className="flex-1 h-[47px] bg-[#313131] text-white rounded-[41px] border border-[#313131] hover:bg-[#313131]/90 focus:outline-none focus:ring-2 focus:ring-[#f1b434] focus:ring-offset-2 transition-colors">
          <span className="font-normal text-sm sm:text-[15px] tracking-[1.00px] leading-[18px]">
            ADD TO CART
          </span>
        </Button>
      </div>

      {/* Beauty Bundle */}
      <Card className="bg-[#f2f2f2] rounded-3xl border-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms]">
        <CardContent className="p-5 space-y-6">
          <div className="flex items-center justify-center gap-3">
            <img
              className="w-6 h-6"
              alt="Frame"
              src="/images/frame-1484578602.svg"
            />
            <h3 className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-[#313131] text-xl text-center tracking-[0] leading-[normal]">
              Beauty Bundle
            </h3>
            <img
              className="w-6 h-6"
              alt="Frame"
              src="images/frame-1484578601.svg"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-start gap-1 flex-1">
              <div className="flex flex-col items-center gap-2.5 flex-1">
                <img
                  className="w-full h-[94.67px]"
                  alt="UMF 20+ Product"
                  src="/images/image-2.svg"
                />
                <h4 className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-[#313131] text-lg text-center tracking-[0] leading-[normal]">
                  UMF 20+
                </h4>
                <Select defaultValue="250g">
                  <SelectTrigger className="w-full rounded-[20px] border-[#cdcdcd] h-auto py-1 px-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="250g">250g</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-center w-[13px] h-[97px]">
                <span className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-[#313131] text-lg text-center leading-[normal]">
                  +
                </span>
              </div>

              <div className="flex flex-col items-center gap-2.5 flex-1">
                <img
                  className="w-full h-[94.67px] object-cover"
                  alt="UMF 24+ Product"
                  src="/images/image-3.svg"
                />
                <h4 className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-[#313131] text-lg text-center tracking-[0] leading-[normal]">
                  UMF 24+
                </h4>
                <Select defaultValue="250g">
                  <SelectTrigger className="w-full rounded-[20px] border-[#cdcdcd] h-auto py-1 px-3">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="250g">250g</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-center w-[13px] h-[97px]">
                <span className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-[#313131] text-lg text-center leading-[normal]">
                  +
                </span>
              </div>

              <div className="flex flex-col items-start gap-2.5 flex-1">
                <img
                  className="w-full h-[94.67px]"
                  alt="Wooden Spoon"
                  src="/images/image-152.svg"
                />
                <h4 className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-[#313131] text-lg text-center tracking-[0] leading-[normal] w-full">
                  Wooden Spoon
                </h4>
              </div>
            </div>

            <div className="flex flex-col w-[260px] items-center gap-3">
              <div className="flex items-baseline gap-2">
                <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-sm text-center tracking-[0] leading-[23.9px] line-through">
                  $478.75 USD
                </span>
                <span className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-[#313131] text-lg text-center tracking-[0] leading-[23.9px]">
                  $430.88 USD
                </span>
                <Badge className="bg-[#087f1a] text-white text-sm">
                  Save 10%
                </Badge>
              </div>

              <Button className="w-full bg-[#313131] text-white rounded-[50px] border border-[#313131] py-3.5 px-[79px] h-auto hover:bg-[#313131]/90">
                <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-base text-center tracking-[1.50px] leading-[17.6px]">
                  ADD BUNDLE TO CART
                </span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Colourclub Section */}
      <div className="space-y-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2000ms]">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-[39px] rounded-[19.77px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/images/colourclub-logo.svg)",
            }}
          />
          <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-sm tracking-[0] leading-[18.6px]">
            Colourclub members earn up to
          </span>
          <div className="bg-white rounded-[18.69px] px-2.5 py-1">
            <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#f39c12] text-lg leading-[23.9px] tracking-[0]">
              56
            </span>
          </div>
          <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-sm tracking-[0] leading-[18.6px]">
            reward points when buy this item.
          </span>
          <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-[13.8px] tracking-[0] leading-[18.6px]">
            Sign up or log in
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-sm tracking-[1.50px] leading-[18.6px]">
            DELIVERY
          </h3>
          <p className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-sm tracking-[0] leading-[18.6px]">
            FREE DELIVERY ON ORDERS OVER $30
          </p>
          <p className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-[13.9px] tracking-[0] leading-[18.6px]">
            ESTIMATED DELIVERY DATE:
            <br />
            Jun 9 - Jun 13 to
          </p>
        </div>
      </div>

      <Separator className="border-[#313131] border-t-[0.8px]" />

      {/* Afterpay Section */}
      <div className="space-y-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2200ms]">
        <h3 className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-sm tracking-[1.50px] leading-[18.6px]">
          AFTER PAY
        </h3>
        <div className="flex items-center gap-2">
          <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-sm tracking-[0] leading-[25.2px]">
            or 4 interest-free payments of $13.97 with
          </span>
          <img
            className="w-[90px] h-[22px]"
            alt="Afterpay logo"
            src="images/button---afterpay-logo---opens-a-dialog---svg.svg"
          />
          <Button variant="ghost" size="sm" className="p-0 h-auto">
            <img
              className="w-3.5 h-3.5"
              alt="Learn more"
              src="/images/button---learn-more-about-afterpay---opens-a-dialog---svg.svg"
            />
          </Button>
        </div>
      </div>

      <Separator className="border-[#313131] border-t-[0.8px]" />

      {/* UMF Scale and Taste Profile */}
      <div className="space-y-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2400ms]">
        <div className="space-y-4">
          <h3 className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-sm tracking-[1.50px] leading-[18.6px]">
            UMF™ SCALE
          </h3>

          <div className="grid grid-cols-7 gap-[5px]">
            {umfScale.map((item, index) => (
              <div
                key={index}
                className={`h-6 border-b-[0.8px] border-solid relative ${
                  item.active ? `bg-[${item.color}]` : ""
                }`}
                style={{ borderBottomColor: item.color }}
              >
                <span
                  className={`absolute -top-0.5 left-2 text-[13.2px] text-center tracking-[1.00px] leading-[14px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal ${
                    item.active ? `text-[${item.color}]` : "text-[#313131]"
                  }`}
                  style={{ color: item.active ? item.color : "#313131" }}
                >
                  {item.label}
                </span>
                {item.active && (
                  <div
                    className="absolute top-5 left-0 w-full h-[3px]"
                    style={{ backgroundColor: item.color }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-sm tracking-[1.50px] leading-[18.6px]">
            TASTE PROFILE
          </h3>

          <div className="relative">
            <img
              className="w-full h-px"
              alt="Taste profile scale"
              src="/imges/svg.svg"
            />
            <div className="flex justify-between mt-4">
              <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-[13.9px] tracking-[0] leading-[18.6px]">
                Clean & Intense
              </span>
              <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-[#313131] text-[13.3px] tracking-[0] leading-[18.6px]">
                Bold & Intense
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
