import React from "react";

interface FooterProps {
  year: number;
  text: string;
}

const Footer: React.FC<FooterProps> = ({ year, text }) => {
  return (
    <footer className="bg-secondary text-black p-4 mt-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {year} {text}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
