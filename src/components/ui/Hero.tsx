"use client";

import Image from "next/image";
import React from "react";
import book from "../../../public/book.png";
import { Button } from "./button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/yourbooks");
  };

  return (
    <div className="flex justify-between md:px-10 px-2 py-3 md:py-0 items-center mb-10 border-b">
      <div className="md:w-[50%] w-full">
        <h1 className="text-4xl font-bold text-primary">Book Wishlist</h1>
        <p className="text-sm my-3">
          Buy your favorite books to your wishlist with us. Discover new reads,
          track your literary desires, and keep all your must-haves in one
          place. Start building your dream library today!
        </p>
        <div>
          <Button variant={"outline"} onClick={handleRoute}>
            {" "}
            See your wishlist!{" "}
          </Button>
        </div>
      </div>

      <div className="hidden md:block">
        <Image src={book} width={400} height={400} alt="Book Image" />
      </div>
    </div>
  );
};

export default Hero;
