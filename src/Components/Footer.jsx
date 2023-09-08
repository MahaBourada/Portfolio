import React from "react";

const Footer = ({ show }) => {
  return (
    <footer className={`bottom-0 text-prussian-blue-950 font-secondary font-bold mt-14 p-2 ${show ? 'blur-sm' : 'blur-none'}`}>
      <h2 className="text-center text-base">Copyright &#169; 2023 Bourada Maha Marwa</h2>
    </footer>
  );
};

export default Footer;
