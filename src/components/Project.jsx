"use client";
import React, { useState } from "react";
import Image from "next/image";
import sibalog from "/public/img/sibalog.png";
import disposisi from "/public/img/disposisibaglog.png";
import notadinas from "/public/img/notadinas.png";
import cardultah from "/public/img/card-ultah.png";
import frontendEcommerce from "/public/img/e-commerce.png";
import frontendRatingfilm from "/public/img/webrating-film.png";
import webportfolio from "/public/img/webportfolio.png";
import quransaya from "/public/img/quransaya.png";
import wallpaperhd from "/public/img/wallpaperhd.png";
import ChartGW from "./Chart";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import 'animate.css'

const Project = () => {
  const dataProject = [
    {
      id: 1,
      nama: "SIBALOG",
      deskripsi:
        "SIBALOG is an information system designed to manage logistics data efficiently in the Karimun Police logistics section.",
      commit: "5 December 2024",
      link: "https://sibalog.my.id",
      img: sibalog,
    },
    {
      id: 2,
      nama: "DISPOSISI BAGLOG",
      deskripsi:
        "This application is an initial version before the presence of the SIBALOG application.",
      commit: "13 June 2023",
      link: "https://disposisibaglog.kesug.com/login.php",
      img: disposisi,
    },
    {
      id: 3,
      nama: "NOTADINAS BAGLOG",
      deskripsi:
        "This application is an initial version before the presence of the SIBALOG application.",
      commit: "13 June 2023",
      link: "https://notadinaskeluarbaglog.great-site.net/",
      img: notadinas,
    },
    {
      id: 4,
      nama: "CARD BIRTHDAY",
      deskripsi: "Birthday cards made to order from clients.",
      commit: "8 January 2025",
      link: "https://muhammadmuammar.vercel.app/",
      img: cardultah,
    },
    {
      id: 5,
      nama: "FRONTEND WEB E-COOMERCE",
      deskripsi:
        "This application only includes Front-end without Back-end, according to client request.",
      commit: "25 March 2024",
      link: "https://ecomercce-api-store.vercel.app/",
      img: frontendEcommerce,
    },
    {
      id: 6,
      nama: "FRONTEND WEB RATING FILM",
      deskripsi:
        "A film rating application that utilizes the API from TMDB to display film data interactively.",
      commit: "19 April 2024",
      link: "https://atm-movies.vercel.app/",
      img: frontendRatingfilm,
    },
    {
      id: 7,
      nama: "PORTFOLIO",
      deskripsi:
        "Web-based portfolio application to display work and experience professionally.",
      commit: "2 February 2024",
      link: "https://adisupiansah.my.id/",
      img: webportfolio,
    },
    {
      id: 8,
      nama: "QURANSAYA",
      deskripsi:
        "This application is designed to make it easier for users to read and understand the Al-Quran digitally. With features such as surah reading, translation information, and audio, this application aims to be read anywhere and at any time",
      commit: "29 January 2025",
      link: "https://quransayame.vercel.app/",
      img: quransaya,
    },
    {
      id: 9,
      nama: "WALLPAPER HD",
      deskripsi: "This application was developed based on requests from clients as part of the Final Semester Examination (UAS) assignment for creating web-based applications. The data used in this application was obtained via the web scraping method, where the data was taken from the Wallpaperflare.com platform.",
      commit: "2 February 2025",
      link: "https://wallpaperhd.vercel.app",
      img: wallpaperhd
    }
  ];

  const [showText, setShowText] = useState({});

  const toggleReadMore = (id) => {
    setShowText((prev) => {
      return {
        ...prev,
        [id]: !prev[id],
      };
    });
  };

  return (
    <div className="project">
      <div className="container">
        <div className="row flex justify-center items-center">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <div className="title text-center animate__animated animate__fadeInDown animate__fast">
                  <h2>Past Project Experience</h2>
                  <span>Explore the projects Ive worked on so far</span>
                </div>
                <div className="card p-2 animate__animated animate__fadeInLeft animate__fast">
                  <ChartGW dataProject={dataProject} />
                </div>
              </div>
              {dataProject.map((data, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card animate__animated animate__zoomIn animate__fast">
                    <div className="card-body">
                      <Image
                        src={data.img}
                        alt="webportfolio"
                        className="card-img-top"
                      />
                      <h3 className="title-project mt-3 text-center fw-bold mb-3">{data.nama}</h3>
                      <p>
                        {showText[data.id]
                          ? data.deskripsi
                          : data.deskripsi.split(" ").slice(0, 3).join(" ") +
                            "..."}{" "}
                        <span
                          className="text-blue-500 cursor-pointer"
                          onClick={() => toggleReadMore(data.id)}
                        >
                          {showText[data.id] ? "Show Less" : "read more"}
                        </span>
                      </p>
                      <p>{data.commit}</p>
                      <Link href={data.link} target="_blank" className="flex text-blue-500">
                        view project <LuExternalLink className="icon mt-1 mx-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
