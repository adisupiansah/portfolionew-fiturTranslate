import Image from "next/image";
import React, { useEffect, useState } from "react";
import profile from "/public/img/adi3.jpg";
import "animate.css";
import { useLanguange } from "@/context/TranslateContext";
import { translateText } from "@/libs/Translate";


const About = () => {
  const { language } = useLanguange()
  const [translatedText, setTranslatedText] = useState({
    paragraf1: "",
    paragraf2: "",
    paragraf3: "",
    paragraf4: "",
  });
  const [loading, setLoading] = useState(true);

  const teksAbout = [
    {
      id: 1,
      paragraf1:
        "Hi everyone, let me introduce myself, my name is Adi Supiansyah. I live in Riau Islands Province, Karimun Regency, West Meral District, Darussalam Village, Lembah Permai RT02/RW02.",
      paragraf2:
        "I am a web developer and I have 3 years of experience in the field of logistics administration for the National Police, where I am used to handling various administrative and data management tasks with high efficiency. Apart from that, I also have experience as a freelance fullstack web developer and am still active today.",
      paragraf3: `I have completed many projects for clients with satisfactory results. To see my portfolio and work, please visit 
      <a href="https://github.com/adisupiansah" class='text-blue-500' target='_blank'>my GitHub account</a> 
      or the <a href="/project" class='text-blue-500'>Project menu</a> on this website.`,
      paragraf4: "Please scroll down to see more about me",
      paragraf5: "Greetings and Thanks You!"
    },
  ];

  const translatedAllText = async () => {
    setLoading(true);
    if (language === "id") {
      try {
        const translatedParagraf1 = await translateText(teksAbout[0].paragraf1, "id");
        const translatedParagraf2 = await translateText(teksAbout[0].paragraf2, "id");
        const translatedParagraf3 = await translateText(teksAbout[0].paragraf3, "id");
        const translatedParagraf4 = await translateText(teksAbout[0].paragraf4, "id");
        const translatedParagraf5 = await translateText(teksAbout[0].paragraf5, "id");

        setTranslatedText({
          paragraf1: translatedParagraf1,
          paragraf2: translatedParagraf2,
          paragraf3: translatedParagraf3,
          paragraf4: translatedParagraf4,
          paragraf5: translatedParagraf5
        });
      } catch (error) {
        console.error("Translation error:", error);
      }
    } else {
      setTranslatedText(teksAbout[0]);
    }
    setLoading(false);
  };

  useEffect(() => {
    translatedAllText();
  }, [language]);

  return (
    <div className="about">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="title container animate__animated animate__fadeInDown animate__fast">
                  About Me
                </h3>
                <div className="row ">
                  <div className="col-md-6">
                    <div className="img-profile d-flex justify-content-center align-items-center animate__animated animate__fadeInLeft animate__fast">
                      <Image
                        src={profile}
                        alt="profile adi supiansah"
                        width={250}
                        height={250}
                        className="rounded-circle profile"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="text-about animate__animated animate__fadeInUp animate__fast">
                      {loading ? (
                        <p>Translating...</p>
                      ) : (
                        <>
                          <p>{translatedText.paragraf1}</p>
                          <p className="mt-3">{translatedText.paragraf2}</p>
                          <p
                            className="mt-3"
                            dangerouslySetInnerHTML={{
                              __html: translatedText.paragraf3
                            }}
                          ></p>
                          <p className="mt-4">{translatedText.paragraf4}</p>
                          <p className="mt-4">{translatedText.paragraf5}</p>
                        </>
                      )}
                    </div>
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
export default About;
