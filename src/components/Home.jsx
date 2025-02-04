'use client'
import Image from "next/image";
import React from "react";
import foto from "/public/img/adi4.jpg";
import { TypeAnimation } from "react-type-animation";
import 'animate.css';

const Home = () => {
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
              <span className="txt-halo">Hallo Guys, I am</span>
              <h1 className="txt-name">Adi Supiansah</h1>
              <h2 className="txt-job">
                <TypeAnimation
                  sequence={[
                    "Fullstack",
                    500,
                    "Fullstack Developer",
                    500,
                    '',
                    500,
                  ]}
                  repeat={Infinity}
                />
              </h2>
              <span className="txt-desc">Welcome to My personal website</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
