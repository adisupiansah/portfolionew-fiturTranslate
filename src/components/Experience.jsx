import Image from "next/image";
import React, { useState, useEffect } from "react";
import gambarExperience from "/public/img/administration.jpg";
import PengalamanOrganisasi from "./PengalamanOrganisasi";
import freelance from "/public/img/freelance.jpg";
import desaingrafis from "/public/img/desaingrafis.jpg";
import Bootcamp from "./Bootcamp";
import hmtif from "/public/img/hmtif.jpg";
import kpps from "/public/img/kpps-pilkada.jpg";
import mapala from "/public/img/mapala.jpg";
import { useLanguange } from "@/context/TranslateContext";
import { translateText } from "@/libs/Translate";

const Experience = () => {
  const { language } = useLanguange();
  const [translatedWork, setTranslatedWork] = useState([]);
  const [translatedOrg, setTranslatedOrg] = useState([]);
  const [translatedBootcamp, setTranslatedBootcamp] = useState([]);
  const [loading, setLoading] = useState(true);

  const pengalamanKerja = [
    {
      id: 1,
      nama: "Admin Logistik",
      deskripsi: "Karimun Police Logistics Admin",
      tahun: "14 January 2021 - 13 January 2025",
      img: gambarExperience,
    },
    {
      id: 2,
      nama: "Fullstack Developer",
      deskripsi:
        "Build and manage end-to-end web applications, from front-end to back-end, with a focus on client needs.",
      tahun: "2022 - present",
      img: freelance,
    },
    {
      id: 3,
      nama: "Anggota KPPS 2",
      deskripsi: "2024 regional head elections",
      tahun: "27 November 2024",
      img: kpps,
    },
  ];

  const pengalamanOrganisasi = [
    {
      id: 1,
      nama: "Karimun University Informatics Engineering Student Association",
      deskripsi: "Public Relations of HMTIF Karimun University",
      tahun: "2021 - 2022",
      img: hmtif,
    },
    {
      id: 2,
      nama: "Mapala Gunung Jantan, Karimun University",
      deskripsi: "Public Relations of MGJ Karimun University",
      tahun: "2021 - 2022",
      img: mapala,
    },
  ];

  const pengalamanBootcamp = [
    {
      id: 1,
      nama: "Graphic Design Bootcamp",
      deskripsi: "Rumah BUMN Karimun held a Graphic Design Bootcamp",
      tahun: "8 June 2024",
      img: desaingrafis,
    },
  ];

  const translateExperience = async (data, setState, page) => {
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
          tahun:
            language === "id"
              ? await translateText("tahun", "id", `${page}.${item.id}`)
              : item.tahun,
        }))
      );
      setState(translatedData);
    } catch (error) {
      console.error("Translation component experience error:", error);
      setState(data); // Fallback ke data original
    }
  };

  useEffect(() => {
    const translateAll = async () => {
      setLoading(true);
      await Promise.all([
        translateExperience(pengalamanKerja, setTranslatedWork, "experience.pengalamanKerja"),
        translateExperience(pengalamanOrganisasi, setTranslatedOrg, "experience.pengalamanOrganisasi"),
        translateExperience(pengalamanBootcamp, setTranslatedBootcamp, "experience.pengalamanBootcamp"),
      ]);
      setLoading(false);
    };
  
    translateAll();
  }, [language]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-3">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <>
      <div className="tools">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <h3 className="col-md-12">
              <div className="title-tools">
                <span className="garis-title-tools"></span>{" "}
                {language === "id" ? "Pengalaman Kerja" : "Work Experience"}
              </div>
              <div className="row ">
                <div className="col-md-12">
                  {translatedWork.map((data) => (
                    <div className="card mb-3" key={data.id}>
                      {/* Tambahkan class flex-column-reverse untuk mobile */}
                      <div className="d-flex flex-column flex-md-row">
                        {/* Gambar */}
                        <div className="col-md-4">
                          <Image
                            src={data.img}
                            className="img-fluid rounded-start"
                            alt="gambar-experience"
                          />
                        </div>
                        {/* Teks */}
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">
                              {language === "id" ? "Jabatan" : "Position"}:{" "}
                              {data.nama}
                            </h5>
                            <p className="card-text mt-3">
                              {language === "id" ? "Deskripsi" : "Description"}:{" "}
                              {data.deskripsi}
                            </p>
                            <p className="card-text mt-3">
                              {language === "id"
                                ? "Tahun Kerja"
                                : "Year of Work"}
                              : {data.tahun}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </h3>
          </div>
        </div>
      </div>
      <Bootcamp bootcamp={translatedBootcamp} />
      <PengalamanOrganisasi organisasi={translatedOrg} />
    </>
  );
};

export default Experience;
