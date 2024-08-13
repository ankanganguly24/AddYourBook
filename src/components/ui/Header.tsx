"use client";
import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const handleRoute = () => {
    window.location.href = "/";
  };

  return (
    <header className="bg-primary text-white p-3 md:p-4 shadow-md">
      <div className="container md:mx-auto">
        <h1
          className="text-xl font-bold text-center md:text-left cursor-pointer"
          onClick={handleRoute}
        >
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;
