"use client";
import React, { useState, useEffect } from "react";
import About from "@/components/About";
import NavigasiAbout from '@/components/NavigasiAbout'

const IndexAbout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div>
      <About />
      <NavigasiAbout/>
    </div>
  );
};

export default IndexAbout;
