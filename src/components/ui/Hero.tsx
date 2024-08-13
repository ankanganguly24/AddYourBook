import Image from "next/image";
import React from "react";
import book from "../../../public/book.png";

const Hero = () => {
  return (
    <div className="flex justify-between px-10 items-center mb-10 border-b">
      <div className="w-[50%]">
        <h1 className="text-4xl font-bold text-primary mb-3">Book Wishlist</h1>
        <p className="text-sm">
          Buy your favorite books to your wishlist with us. Discover new reads,
          track your literary desires, and keep all your must-haves in one
          place. Start building your dream library today!
        </p>
      </div>

      <div>
        <Image src={book} width={400} height={400} alt="Book Image" />
      </div>
    </div>
  );
};

export default Hero;
