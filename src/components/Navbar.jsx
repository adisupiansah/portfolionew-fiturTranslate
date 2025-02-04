"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiGoogletranslate } from "react-icons/si";
import Image from "next/image";
import logoAdi from "/public/img/logo.jpeg";
import { useLanguange } from "@/context/TranslateContext";

const Navbar = () => {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  const { setLanguage } = useLanguange();

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
                    Home
                  </Link>
                  <Link
                    className={`nav-link ${Active("/about")}`}
                    href="/about"
                  >
                    About
                  </Link>
                  <Link
                    className={`nav-link ${Active("/project")}`}
                    href="/project"
                  >
                    Project
                  </Link>
                  <Link
                    className={`nav-link ${Active("/contact")}`}
                    href="/contact"
                  >
                    Contact
                  </Link>
                  <div className="relative">
                    <button
                      className="btn"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      <SiGoogletranslate className="icon" />
                    </button>

                    {showDropdown && (
                      <div className="absolute top-10 right-0 bg-black shadow-md p-2 rounded">
                        <button
                          className="block w-full text-left p-2 hover:bg-gray-200"
                          onClick={() => {
                            setLanguage("id");
                            setShowDropdown(false);
                          }}
                        >
                          Bahasa Indonesia
                        </button>
                        <button
                          className="block w-full text-left p-2 hover:bg-gray-200"
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
