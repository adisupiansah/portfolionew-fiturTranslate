"use client";
import React, { useState } from "react";
import AboutSkils from "./AboutSkils";
import Experience from "./Experience";
import SocialMedia from "./SocialMedia";
import { useLanguange } from "@/context/TranslateContext";
import Sertifikat from "./Sertifikat";

const NavigasiAbout = () => {
  const [activeTab, setActiveTab] = useState("sertifikat"); 
  const { language } = useLanguange();

  // Objek terjemahan
  const tabLabels = {
    techStack: {
      en: "Skill",
      id: "Keahlian"
    },
    experience: {
      en: "Experience",
      id: "Pengalaman"
    },
    socialMedia: {
      en: "Social Media", 
      id: "Media Sosial"
    }, 
    sertifikat: {
      en: "Certificate",
      id: "Sertifikat"
    }
  };

  return (
    <div className="about-navigasi">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="navigasi col-md-8">
              <div className="navigasi-item d-flex justify-content-between align-items-center">
                {/* Tab Sertifikat */}
                <button
                  className={`navabout-link ${
                    activeTab === "sertifikat" ? "active-navigasiabout" : ""
                  }`}
                  onClick={() => setActiveTab("sertifikat")}
                >
                  {language === "id" ? tabLabels.sertifikat.id : tabLabels.sertifikat.en}
                </button>

                {/* Tab Tech Stack */}
                <button
                  className={`navabout-link ${
                    activeTab === "techStack" ? "active-navigasiabout" : ""
                  }`}
                  onClick={() => setActiveTab("techStack")}
                >
                  {language === "id" ? tabLabels.techStack.id : tabLabels.techStack.en}
                </button>

                {/* Tab Experience */}
                <button
                  className={`navabout-link ${
                    activeTab === "experience" ? "active-navigasiabout" : ""
                  }`}
                  onClick={() => setActiveTab("experience")}
                >
                  {language === "id" ? tabLabels.experience.id : tabLabels.experience.en}
                </button>

                {/* Tab Social Media */}
                <button
                  className={`navabout-link ${
                    activeTab === "socialMedia" ? "active-navigasiabout" : ""
                  }`}
                  onClick={() => setActiveTab("socialMedia")}
                >
                  {language === "id" ? tabLabels.socialMedia.id : tabLabels.socialMedia.en}
                </button>
              </div>
            </div>

            {/* Konten tetap sama */}
            <div className="content">
              {activeTab === "sertifikat" && <Sertifikat/>}
              {activeTab === "techStack" && <AboutSkils />}
              {activeTab === "experience" && <Experience />}
              {activeTab === "socialMedia" && <SocialMedia />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigasiAbout;