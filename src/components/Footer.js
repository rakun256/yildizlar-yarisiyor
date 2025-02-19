import React from "react";
import ytumLogo from "../images/ytumklogo.png";
import instaIcon from "../images/insta.png";
import linkedinIcon from "../images/linkedin.png";
import discordIcon from "../images/discord.png";
import xIcon from "../images/x.png";
import crossLogo from "../images/cross.png";
import skylab from "../images/skylab.png";
import weblab from "../images/weblab-color.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-32 border-b-8 border-dark-accentpurple">
      <div className="container mx-auto flex w-full justify-between items-center">
        {/* Sol - Sosyal Medya */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-dark-accentpurple font-bold mb-4 text-2xl">
            Bizi Takip Edin
          </p>
          <div className="grid grid-cols-3 gap-8">
            <a
              href="https://www.instagram.com/ytumk?igsh=eWZoeDFuZmYzM2Zl"
              className="w-12 h-12 flex items-center justify-center rounded"
            >
              <img src={instaIcon} alt="Instagram" className="w-12 h-12" />
            </a>
            <a href="https://www.linkedin.com/company/ytumk/" className="w-12 h-12 flex items-center justify-center rounded">
              <img src={linkedinIcon} alt="LinkedIn" className="w-12 h-12" />
            </a>
            <a href="https://x.com/ytumk" className="w-12 h-12 flex items-center justify-center rounded">
              <img src={xIcon} alt="X" className="w-12 h-12" />
            </a>
          </div>
        </div>

        {/* Orta - Sponsorlar */}
        <div className="flex flex-col items-center justify-center">
          {/* Büyük Cross */}
          <img
            src={crossLogo}
            alt="Cross Logo"
            className="w-32 h-32 mb-4 rounded-full"
          />
          {/* Küçük Cross Logolar */}
          <div className="flex space-x-4 justify-center items-center">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={crossLogo}
                alt="Cross Logo"
                className="w-16 h-16  rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Sağ - YTÜMK Logo */}
        <div className="flex items-center justify-end">
          <img
            src={ytumLogo}
            alt="YTÜMK Logo"
            className="w-32 h-32 rounded-full"
          />
        </div>
      </div>

      <div className="mt-16 text-center">
        <div className="flex justify-center space-x-8 mt-2">
          <a
            href="https://yildizskylab.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={skylab} alt="SkyLab" className="w-12 h-12" />
          </a>
          <a
            href="https://yildizskylab.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={weblab} alt="WebLab" className="w-12 h-12" />
          </a>
        </div>
        <p className="text-md mt-4">
          SKY LAB: Bilgisayar Bilimleri Kulübü WebLab tarafından
          geliştirilmiştir.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
