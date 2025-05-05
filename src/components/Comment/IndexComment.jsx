"use client";
import React, { useState, useEffect } from "react";

const IndexComment = () => {
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
      
    </div>
  );
};

export default IndexComment;
