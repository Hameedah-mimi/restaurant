import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className=" text-center mb-4s">
        <p>© Mimi's Restaurant 2026. All rights reserved</p>
        <div className="d-flex justify-content-center gap-3">
          <FaLinkedin className="icon" />
          <FaTiktok className="icon" />
          <FaFacebook className="icon" />
          <FaGithub className="icon" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
