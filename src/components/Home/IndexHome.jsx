"use client";
import React, { useState, useEffect } from "react";
import Home from "@/components/Home";

const IndexHome = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center vh-100">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div>
      <Home />
    </div>
  );
};

export default IndexHome;
