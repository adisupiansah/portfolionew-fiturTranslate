import React, { useState } from "react";
import { useLanguange } from "@/context/TranslateContext";
import sertifikat from "/public/certificate/sertifikat_dicoding.jpg";
import sertifikat2 from "/public/certificate/sertfikat_desaingrafis.jpg";
import sertifikat3 from "/public/certificate/sertifikat_remoteworking.jpg";
import sertifikat4 from "/public/certificate/sertifikat_bootstrap.jpg";
import sertifikat5 from "/public/certificate/sertifikat_php.jpg";
import sertifikat6 from "/public/certificate/sertifikat_uiux_duniacoding.jpg";
import sertifikat7 from "/public/certificate/sertifikat_covid19.jpg";
import Image from "next/image";
import { IoMdDownload } from "react-icons/io";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const Sertifikat = () => {
  const { language } = useLanguange();
  const [isHovered, setIsHovered] = useState(null); // State untuk track hover

  const dataSertifikat = [
    {
      id: 1,
      src: sertifikat,
      titleId: "Sertifikat Membangun Backend dari Dicoding Indonesia",
      titleEn: "Backend Development Certificate from Dicoding Indonesia",
    },
    {
      id: 2,
      src: sertifikat2,
      titleId: "Sertifikat Desain Grafis dari Rumah BUMN BNI Karimun",
      titleEn: "Graphic Design Certificate from BNI Karimun BUMN House",
    },
    {
      id: 3,
      src: sertifikat3,
      titleId:
        "Sertifikat Remote Working dari Universitas Perjuangan Tasik Malaya",
      titleEn:
        "Remote Working Certificate from Tasik Malaya University of Struggle",
    },
    {
      id: 4,
      src: sertifikat4,
      titleId:
        "Sertifikat Workshop Bootstrap yang diadakan oleh Dunia Coding Indonesia",
      titleEn: "Bootstrap Workshop Certificate held by Dunia Coding Indonesia",
    },
    {
      id: 5,
      src: sertifikat5,
      titleId: "Sertifikat Pemrogaman PHP dari Dunia Coding Indonesia",
      titleEn: "PHP Programming Certificate from Dunia Coding Indonesia",
    },
    {
      id: 6,
      src: sertifikat6,
      titleId: "Sertifikat Desain UI/UX dari Dunia Coding Indonesia",
      titleEn: "UI/UX Design Certificate from Dunia Coding Indonesia",
    },
    {
      id: 7,
      src: sertifikat7,
      titleId: "Sertifikat Vaksinasi Covid-19 Dosis 1",
      titleEn: "Covid-19 Vaccination Certificate Dose 1",
    },
  ];

  return (
    <div className="tools">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12">
            <h3 className="title-tools">
              <span className="garis-title-tools"></span>
              {language === "id" ? "Sertifikat" : "Certificate"}
            </h3>
            <div className="row">
             
              {dataSertifikat.map((item) => (
                <div className="col-md-6 mt-4" key={item.id}>
                  <div
                    className="relative w-full overflow-hidden cursor-pointer"
                    onMouseEnter={() => setIsHovered(item.id)} // Aktifkan hover
                    onMouseLeave={() => setIsHovered(null)} // Nonaktifkan hover
                  >
                    {/* Gambar */}
                    <Image
                      src={item.src}
                      width={1200}
                      height={1100}
                      alt="html"
                      className={`img-html w-full h-auto transition-all duration-300 rounded-lg border-1 border-white ${
                        isHovered === item.id ? "brightness-50" : ""
                      }`}
                    />

                    {/* Overlay dengan teks */}
                    <div
                      className={`absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white transition-opacity duration-300 ${
                        isHovered === item.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <p className="text-md text-center px-4 py-2">
                        {language === "id" ? item.titleId : item.titleEn}
                      </p>
                      <div className="flex justify-center items-center gap-4 mt-3">
                        <a
                          href={item.src.src || item.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <LuSquareArrowOutUpRight className="text-2xl text-white hover:text-orange-300 transition duration-300" />
                        </a>
                        <a
                          href={item.src.src || item.src}
                          download
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <IoMdDownload className="text-3xl text-white hover:text-orange-300 transition duration-300" />
                        </a>
                      </div>

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

export default Sertifikat;
