"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdGTranslate } from "react-icons/md";
import Image from "next/image";
import logoAdi from "/public/img/logo.jpeg";
import { useLanguange } from "@/context/TranslateContext";
import { IoHome } from "react-icons/io5";
import { PiUserListFill } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCommentDots } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  const { setLanguage } = useLanguange();
  const { language } = useLanguange();

  const Active = (url) => {
    if (url === "/about") {
      return pathname.startsWith("/about") ? "active-navbar" : "";
    }
    return pathname === url ? "active-navbar" : "";
  };

  return (
    <div className="navbar-gw fixed-top">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-md-8 col-12">
              <div className="card-navbar">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <Image
                    src={logoAdi}
                    width={40}
                    height={40}
                    className="rounded-circle img-logo-navbar"
                    alt="adi supiansah"
                  />
                  <Link className={`nav-link ${Active("/")}`} href="/">
                    <IoHome className="block sm:hidden text-[23px]" />
                    <span className="hidden sm:block">
                      {language === "id" ? "Beranda" : "Home"}
                    </span>
                  </Link>

                  <Link
                    className={`nav-link ${Active("/about")}`}
                    href="/about"
                  >
                    <PiUserListFill className="block sm:hidden text-[23px]" />
                    <span className="hidden sm:block">
                      {language === "id" ? "Tentang" : "About"}
                    </span>
                  </Link>

                  <Link
                    className={`nav-link ${Active("/project")}`}
                    href="/project"
                  >
                    <GoProjectSymlink className="block sm:hidden text-[23px]" />
                    <span className="hidden sm:block">
                      {language === "id" ? "Proyek" : "Project"}
                    </span>
                  </Link>

                  <Link
                    className={`nav-link ${Active("/contact")}`}
                    href="/contact"
                  >
                    <IoLogoWhatsapp className="block sm:hidden text-[23px]" />
                    <span className="hidden sm:block">
                      {language === "id" ? "Kontak" : "Contact"}
                    </span>
                  </Link>

                  <Link
                    className={`nav-link ${Active("/comment")}`}
                    href="/comment"
                  >
                    <FaCommentDots className="block sm:hidden text-[23px]" />
                    <span className="hidden sm:block">
                      {language === "id" ? "Komentar" : "Comment"}
                    </span>
                  </Link>

                  <div className="relative">
                    <button
                      className=""
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      <MdGTranslate className="icon" />
                    </button>

                    {showDropdown && (
                      <div className="absolute top-10 right-0 bg-black shadow-md p-2 rounded animate__animated animate__fadeIn animate__faster">
                        <button
                          className="block w-full text-left p-2 btn-translate"
                          onClick={() => {
                            setLanguage("id");
                            setShowDropdown(false);
                          }}
                        >
                          Indonesia
                        </button>
                        <button
                          className="block w-full text-left p-2 btn-translate"
                          onClick={() => {
                            setLanguage("en");
                            setShowDropdown(false);
                          }}
                        >
                          English
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
