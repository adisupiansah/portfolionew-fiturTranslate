import React from "react";
import Image from "next/image";
import Link from "next/link";

const SocialMedia = () => {
  const sosmed = [
    {
      id: 1,
      sosialmedia: "Instagram",
      nama: "@adi.spiansyh",
      url: "https://www.instagram.com/adi.spiansyh?igsh=aHRtYTJlc2duY21y",
      img: "https://img.icons8.com/?size=100&id=BrU2BBoRXiWq&format=png&color=000000",
    },
    {
      id: 2,
      sosialmedia: "Facebook",
      nama: "Adii",
      url: "https://www.facebook.com/share/14vaBXcefkJ/",
      img: "https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000",
    },
    {
      id: 3,
      sosialmedia: "Tiktok",
      nama: "@adispiansyh",
      url: "https://www.tiktok.com/@adispiansyh?_t=ZS-8tFu4CcVmpG&_r=1",
      img: "https://img.icons8.com/?size=100&id=fdfLpA6fsXN2&format=png&color=000000",
    },
    {
      id: 4,
      sosialmedia: "Threads",
      nama: "Adiii",
      url: "https://www.threads.net/@adi.spiansyh?invite=1",
      img: "https://img.icons8.com/?size=100&id=1IYrDBzxNHjL&format=png&color=000000",
    },

  ];
  return (
    <div className="tools">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <h3 className="col-md-12">
            <div className="title-tools">
              <span className="garis-title-tools"></span>Social Media
            </div>
            <div className="row ">
              {sosmed.map((data, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card mb-3">
                    <div className="d-flex">
                      <div className="col-md-3">
                        <Image
                          src={data.img}
                          className="img-fluid rounded-start"
                          alt="gambar-experience"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="col-md-9">
                        <div className="card-body">
                          <h5 className="card-title">
                            Social Media: {data.sosialmedia}
                          </h5>
                          <p className="card-text my-2">name: {data.nama}</p>
                          <Link
                            href={data.url}
                            target="_blank"
                            className="card-text text-blue-500"
                          >
                            Visit My {data.sosialmedia}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
