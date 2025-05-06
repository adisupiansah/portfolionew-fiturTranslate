"use client";
import React, { useEffect, useState } from "react";
import { useLanguange } from "@/context/TranslateContext";
import { IoIosStar } from "react-icons/io";
import ChilComment from "./ChilComment";


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
   <div>
      <ChilComment language={language} comments={comments} loading={loading} IoIosStar={IoIosStar}/>
   </div>
  );
};

export default Comment;
