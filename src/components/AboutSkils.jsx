import React from "react";
import Image from "next/image";
import prismaImg from '/public/img/prisma.png'
import msoffice from '/public/img/msoffice.png'

const AboutSkils = () => {
  const LogoSkilCard = [
    {
      id: 1,
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      id:2,
      name: "CSS",
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
    },
    {
      id:3,
      name: "JAVA SCRIPT",
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
    },
    {
      id:4,
      name: "PHP",
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg'
    },
    {
      id:5,
      name: "REACT JS",
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
    },
    {
      id:6,
      name: "NEXT JS",
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'
    },
    {
      id: 7,
      name: "FIGMA",
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
    },
    {
      id: 8,
      name: "MySQL",
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
    },
    {
      id: 9,
      name: "BOOTSTRAP",
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'
    },
    {
      id: 10,
      name: "TAILWIND",
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
    }, 
    {
      id: 11,
      name: 'PRISMA',
      img: prismaImg
    }, 
    {
      id: 12,
      name: 'GIT',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
    },
    {
      id: 13,
      name: 'FIREBASE',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg'
    },
    {
      id: 14,
      name: 'MS OFFICE',
      img: msoffice
    },
    {
      id: 15,
      name: 'VITE JS',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg'
    }

  ];

  return (
    <div className="about-skils">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12">
            <h3 className="title-skils">
              <span className="garis-title-skils"></span>Skils
            </h3>
            <div className="row">
            {LogoSkilCard.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card">
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <Image
                      src={item.img}
                      width={50}
                      height={50}
                      alt="html"
                      className="img-html"
                    />
                    <span className="col-md-6">{item.name}</span>
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

export default AboutSkils;
