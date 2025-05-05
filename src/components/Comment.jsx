"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import gambar from "@/app/user.jpg";
import { useLanguange } from "@/context/TranslateContext";
import { IoIosStar } from "react-icons/io";

const Comment = () => {
  const { language } = useLanguange();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const database =
    "https://data-portofolio-38976-default-rtdb.firebaseio.com/comments.json";

  const fetchDb = async () => {
    try {
      const response = await fetch(database);
      const data = await response.json();

      // Convert object to array if needed
      if (data && typeof data === "object" && !Array.isArray(data)) {
        const commentArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        // tampilkan data yang baru secara descending
        commentArray.sort((a, b) => b.id - a.id);

        setComments(commentArray);
      } else {
        setComments(data || []);
      }
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDb();
  }, []);

  return (
    <div className="comment mt-[6rem] mb-[3rem]">
      <div className="container">
        <div className="row flex justify-center items-center">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <div className="title mt-[2rem] text-center animate__animated animate__fadeInDown animate__fast">
                  <h2 className="text-[25px] font-semibold">
                    {language === "id"
                      ? "Komentar Pelanggan"
                      : "Customer Comment"}
                  </h2>
                  <span className="text-inherit">
                    {language === "id" ? (
                      <span>
                        Ucapan dari klien & rekan. Pengen kasih kritik atau
                        saran? Yuk{" "}
                        <a
                          href="https://komentar-portfolio.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-inherit underline-offset-0 no-underline hover:text-inherit hover:no-underline"
                        >
                          <span className='text-blue-500'>klik di sini</span>
                        </a>
                      </span>
                    ) : (
                      <span>
                        Greetings from clients & colleagues. Want to give
                        criticism or suggestions?{" "}
                        <a
                          href="https://komentar-portfolio.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-inherit underline-offset-0 no-underline hover:text-inherit hover:no-underline text-blue-500"
                        >
                          <span className='text-blue-500'>Click here</span>
                        </a>
                      </span>
                    )}
                  </span>
                </div>
              </div>

              {/* Dynamic Comment Cards */}
              <div className="col-md-12 mt-[2rem] space-y-4">
                {loading ? (
                  <p className="text-center mt-3">Memuat komentar...</p>
                ) : comments.length === 0 ? (
                  <p className="text-center mt-3">Tidak ada komentar.</p>
                ) : (
                  comments.map((comment, index) => {
                    const isEven = index % 2 === 0;

                    return (
                      <div
                        key={comment.id || index}
                        className={`card rounded-[15px] animate__animated animate__zoomIn animate__fast ${
                          isEven
                            ? "bg-[#212121] text-gray-100"
                            : "bg-[#ff9130ce] text-black"
                        }`}
                      >
                        <div className="card-body">
                          <div className="flex items-start gap-2">
                            <Image
                              src={comment.userPhoto}
                              height={50}
                              width={50}
                              alt="User"
                              className="rounded-full"
                            />

                            <div className="flex flex-col">
                              <span>{comment.userName || "Nama Pengguna"}</span>

                              <span className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <IoIosStar
                                    key={i}
                                    className={
                                      i < (comment.bintang || 5)
                                        ? "text-yellow-500"
                                        : "text-white"
                                    }
                                  />
                                ))}
                              </span>

                              <p className="mt-1">
                                {comment.komentar || "Tidak ada komentar."}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
