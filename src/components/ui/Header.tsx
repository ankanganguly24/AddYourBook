"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/");
  };

  return (
    <header className="bg-primary text-white p-3 md:p-4 shadow-md">
      <div className="container md:mx-auto">
        <Link
          className="text-xl font-bold text-center md:text-left cursor-pointer"
          href={"/"}
        >
          {title}
        </Link>
      </div>
    </header>
  );
};

export default Header;
