import { Image } from "antd";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const footerLinks = {
  Product: ["Features", "Integrations", "Pricing", "Changelog"],
  Resources: ["Documentation", "Help Center", "Blog", "Case Studies"],
  Company: ["About Us", "Careers", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="bg-[#14091c] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand col */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-2">
            <Image src="/images/homeLogo.png" alt="logo" preview={false} />

            <p className="subTitleText text-[14px] leading-relaxed max-w-[300px] mt-8 ">
              Automated patient acquisition for private clinics. Built by a
              clinic owner — for clinic owners.
            </p>

            <div className="flex items-center gap-3 mt-8">
              <div className="border border-purple-800/40 bg-[#1a1230] p-4 shadow-[0_0_40px_rgba(255,236,179,0.10)] hover:shadow-[0_0_60px_rgba(255,236,179,0.15)] rounded-full cursor-pointer">
                <RiTwitterXFill className="secondColor hover:text-white/90 transition-colors" />
              </div>

              <div className="border border-purple-800/40 bg-[#1a1230] p-4 shadow-[0_0_40px_rgba(255,236,179,0.10)] hover:shadow-[0_0_60px_rgba(255,236,179,0.15)] rounded-full cursor-pointer">
                <FaLinkedinIn className="secondColor hover:text-white/90 transition-colors" />
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="secondColor text-[16px] font-bold uppercase tracking-[0.2em] mb-5">
                {section}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="subTitleText text-[14px] hover:text-white/90! transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="subTitleText text-[14px]">
            © 2026 Orbis Healthcare Platform. All rights reserved.
          </p>
          <div className="subTitleText text-[14px] flex flex-wrap gap-3">
            <span className="flex items-center gap-1">
              {" "}
              <Image
                src="/images/icons/footer.png"
                alt="flag"
                width={20}
                height={20}
                preview={false}
              />{" "}
              Built for Private Clinics
            </span>
            <span className="flex items-center gap-1">
              {" "}
              <Image
                src="/images/icons/footer.png"
                alt="flag"
                width={20}
                height={20}
                preview={false}
              />{" "}
              No Agencies
            </span>
            <span className="flex items-center gap-1">
              {" "}
              <Image
                src="/images/icons/footer.png"
                alt="flag"
                width={20}
                height={20}
                preview={false}
              />{" "}
              No NHS
            </span>
            <span className="flex items-center gap-1">
              {" "}
              <Image
                src="/images/icons/footer.png"
                alt="flag"
                width={20}
                height={20}
                preview={false}
              />{" "}
              100% Automated
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
