"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import 'animate.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    from: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, from, message } = formData;

    // periksa apakah semua field sudah di isi
    if (!name || !from || !message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields",
        confirmButtonText: "Ok",
        confirmButtonColor: "#ff9130",
        background: "#212121",
        color: "#f8fafc",
      });
      return;
    }

    // format pesan kirim ke WA
    const WAnumber = "6281275669055";
    const text = `Hello, my name is ${name}. I am from ${from}. Here is my message: ${message}`;
    const url = `https://wa.me/${WAnumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    // bersihkan form
    setFormData({
      name: "",
      from: "",
      message: "",
    });
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="form-contact">
              <div className="row flex justify-center items-center">
                <h2 className="text-center animate__animated animate__slideInDown animate__fast">Contact Me</h2>
                <div className="col-md-10 animate__animated animate__slideInLeft animate__fast">
                  <form onSubmit={handleSubmit}>
                    <div className="group">
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="group mt-4">
                      <input
                        type="text"
                        placeholder="From"
                        className="form-control"
                        name="from"
                        value={formData.from}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="group mt-4">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ height: "200px" }}
                      ></textarea>
                    </div>
                    <div className="group flex justify-center items-center mt-4">
                      <button type="submit" className="btn col-md-4">
                        submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
