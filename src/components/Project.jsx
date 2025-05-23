"use client";
import React, { useState, useEffect } from "react";
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
import saloka from "/public/img/saloka.png";
import registrasiIndihome from "/public/img/registrasi-indihome.png";
import adminRegistrasiIndihome from "/public/img/adminregistrasi-indihome.png";
import CustomerComment from "/public/img/customer_comment.png";
import ChartGW from "./Chart";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import "animate.css";
import { useLanguange } from "@/context/TranslateContext";
import { translateText } from "@/libs/Translate";

const Project = () => {
  const { language } = useLanguange();
  const [showText, setShowText] = useState({});
  const [translated, setTransLated] = useState([]);

  const dataProject = [
    {
      id: 1,
      nama: "SIBALOG",
      deskripsi:
        "SIBALOG is an information system designed to monitor logistics data efficiently in the Karimun Police logistics section and facilitate the retrieval of letter numbers.",
      commit: "5 December 2024",
      link: "https://sibalog.vercel.app",
      img: sibalog,
    },
    {
      id: 2,
      nama: "DISPOSISI BAGLOG",
      deskripsi:
        "This application is an initial version before the presence of the SALOKA application.",
      commit: "13 June 2023",
      link: "https://disposisibaglog.kesug.com/login.php",
      img: disposisi,
    },
    {
      id: 3,
      nama: "NOTADINAS BAGLOG",
      deskripsi:
        "This application is an initial version before the presence of the SALOKA application.",
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
      deskripsi:
        "This application was developed based on requests from clients as part of the Final Semester Examination (UAS) assignment for creating web-based applications. The data used in this application was obtained via the web scraping method, where the data was taken from the Wallpaperflare.com platform.",
      commit: "2 February 2025",
      link: "https://wallpaperhd.vercel.app",
      img: wallpaperhd,
    },
    {
      id: 10,
      nama: "SALOKA",
      deskripsi:
        "SALOKA is an administration system designed to manage logistics data efficiently in the Karimun Police logistics section.",
      commit: "5 March 2025",
      link: "https://saloka.vercel.app",
      img: saloka,
    },
    {
      id: 11,
      nama: "REGISTRASI INDIHOME",
      deskripsi:
        "The IndiHome registration website was created based on direct orders from the IndiHome sales team in the Riau Islands Province, Karimun Regency, as part of the final project material for a thesis compiled by one of the sales.",
      commit: "25 April 2025",
      link: "https://registrasi-indihome.vercel.app/",
      img: registrasiIndihome,
    },
    {
      id: 12,
      nama: "ADMIN REGISTRASI INDIHOME",
      deskripsi:
        "This IndiHome registration admin website is designed to manage data of prospective customers who wish to subscribe to IndiHome services. This website is directly integrated with the IndiHome registration website system, so that both function as one unit in the customer management and registration process.",
      commit: "25 April 2025",
      link: "https://adminregistrasi-indihome.vercel.app/",
      img: adminRegistrasiIndihome,
    },
    {
      id: 13,
      nama: "CUSTOMER COMMENT",
      deskripsi:
        "This website is an assessment of customers, colleagues who have worked with me.",
      commit: "5 May 2025",
      link: "https://komentar-portfolio.vercel.app",
      img: CustomerComment,
    },
  ];

  const translatedAllText = async (data, setData, page) => {
    try {
      const translatedData = await Promise.all(
        data.map(async (item) => ({
          ...item,
          nama:
            language === "id"
              ? await translateText("nama", "id", `${page}.${item.id}`)
              : item.nama,
          deskripsi:
            language === "id"
              ? await translateText("deskripsi", "id", `${page}.${item.id}`)
              : item.deskripsi,
          commit:
            language === "id"
              ? await translateText("commit", "id", `${page}.${item.id}`)
              : item.commit,
        }))
      );
      setData(translatedData);
    } catch (error) {
      console.error("Translation component experience error:", error);
      setData(data); // Fallback ke data original
    }
  };

  useEffect(() => {
    const translateAll = async () => {
      translatedAllText(dataProject, setTransLated, "project");
    };
    translateAll();
  }, [language]);

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
                  <h2>
                    {language === "id"
                      ? "Pengalaman proyek sebelumnya"
                      : "Past project experience"}
                  </h2>
                  <span>
                    {language === "id"
                      ? "Jelajahi proyek yang telah saya kerjakan sejauh ini"
                      : "Explore the projects I've worked on so far"}
                  </span>
                </div>
                <div className="card p-2 animate__animated animate__fadeInLeft animate__fast">
                  <ChartGW dataProject={dataProject} />
                </div>
              </div>
              {translated.map((data) => (
                <div className="col-md-6" key={data.id}>
                  <div className="card animate__animated animate__zoomIn animate__fast">
                    <div className="card-body">
                      <Image
                        src={data.img}
                        alt="webportfolio"
                        className="card-img-top"
                      />
                      <h3 className="title-project mt-3 text-center fw-bold mb-3">
                        {data.nama}
                      </h3>
                      <p>
                        {showText[data.id]
                          ? data.deskripsi
                          : data.deskripsi.split(" ").slice(0, 3).join(" ") +
                            "..."}{" "}
                        <span
                          className="text-blue-500 cursor-pointer"
                          onClick={() => toggleReadMore(data.id)}
                        >
                          {language === "id"
                            ? showText[data.id]
                              ? "Tampilkan Lebih Sedikit"
                              : "Lihat Semua"
                            : showText[data.id]
                            ? "Show Less"
                            : "See All"}
                        </span>
                      </p>
                      <p>{data.commit}</p>
                      <Link
                        href={data.link}
                        target="_blank"
                        className="flex text-blue-500"
                      >
                        {language === "id" ? 'lihat proyek' : 'view project'}
                        <LuExternalLink className="icon mt-1 mx-1" />
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
