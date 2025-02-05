'use client'
import Image from "next/image";
import React, {useState, useEffect} from "react";
import foto from "/public/img/adi4.jpg";
import { TypeAnimation } from "react-type-animation";
import 'animate.css';
import { useLanguange } from "@/context/TranslateContext";
import { translateText } from "@/libs/Translate";

const Home = () => {
  const { language } = useLanguange();

  const [translated, setTranslated] = useState({
    paragraf1: "",
    paragraf2: "",
    paragraf31: "",
    paragraf32: "",
    paragraf4: ""
  })

const teksHome = [
  {
    id:1,
    paragraf1: "Hello everyone, I a'm",
    paragraf2: "Adi Supiansah",
    paragraf31: "Fullstack",
    paragraf32: "Fullstack Developer",
    paragraf4: "Welcome to my personal website"
  }
]

  const translatedAllText = async () => {
    if (language === "id") {
      try {
        const translations = await Promise.all([
          translateText(teksHome[0].paragraf1, "id"),
          translateText(teksHome[0].paragraf2, "id"),
          translateText(teksHome[0].paragraf31, "id"),
          translateText(teksHome[0].paragraf32, "id"),
          translateText(teksHome[0].paragraf4, "id")
        ]);

        setTranslated({
          paragraf1: translations[0],
          paragraf2: translations[1],
          paragraf31: translations[2],
          paragraf32: translations[3],
          paragraf4: translations[4]
        });
      } catch (error) {
        console.error("Error Translating Text Home:", error);
        setTranslated(teksHome[0]);
      }
    } else {
      setTranslated(teksHome[0])
    }
  }

  useEffect(() => {
    translatedAllText()
  }, [language])

  return (
    <div className="home">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center vh-100">
          {/* Gambar */}
          <div className="col-md-4 order-1 order-md-2 d-flex justify-content-center">
            <div className='animate__animated animate__slideInDown animate__fast'>
              <Image
                src={foto}
                width={330}
                height={330}
                alt="adisupiansah"
                className="rounded-circle img-home"
              />
            </div>
          </div>
          {/* Teks */}
          <div className="col-md-4 order-2 order-md-1 text-center text-md-start animate__animated animate__slideInUp animate__fast">
            <div className="home-text">
              <span className="txt-halo">{translated.paragraf1}</span>
              <h1 className="txt-name">{translated.paragraf2}</h1>
              <h2 className="txt-job">
                <TypeAnimation
                  sequence={[
                    translated.paragraf31 || teksHome[0].paragraf31, 
                    500,
                    translated.paragraf32 || teksHome[0].paragraf32,
                    500,
                    '',
                    500,
                  ]}
                  repeat={Infinity}
                />
              </h2>
              <span className="txt-desc">{translated.paragraf4}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
