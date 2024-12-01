"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                    reply_to: form.email,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    toast.success("🎉 Thank you! Your message has been sent.", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        style: {
                            background: "#1f1f38",
                            color: "#ffffff",
                            border: "1px solid #00FFFF",
                        },
                        icon: "🚀",
                    });
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    toast.error("⚠️ Something went wrong. Please try again later.", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        style: {
                            background: "#8B0000",
                            color: "#ffffff",
                            border: "1px solid #FF6347",
                        },
                        icon: "❌",
                    });
                }
            );
    };

    return (
        <div
            id="contact"
            className="flex flex-col items-start justify-start py-10 ml-10"
        >
            {/* Toast Notifications */}
            <ToastContainer />

            {/* Contact Form Section */}
            <div className="w-full max-w-2xl p-8 rounded-xl shadow-md text-white">
                <div className="mb-8 ">
                    <h1 className="text-[40px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 text-center ">
                        Contact Me
                    </h1>
                   
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-6 h-full"
                >
                    <label className="flex flex-col">
                        <span className="text-gray-400 mb-2">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="bg-[#29293e] py-3 px-4 text-white rounded-lg border border-gray-600 outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                            required
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-gray-400 mb-2">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="bg-[#29293e] py-3 px-4 text-white rounded-lg border border-gray-600 outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                            required
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-gray-400 mb-2">Your Message</span>
                        <textarea
                            rows={6}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Write your message here"
                            className="bg-[#29293e] py-3 px-4 text-white rounded-lg border border-gray-600 outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                            required
                        />
                    </label>

                    {/* Container for the button */}
                    <div className="mt-auto flex justify-center w-full">
                        <button
                            type="submit"
                            className="w-1/4 bg-gradient-to-r from-purple-500 to-cyan-500 py-2 text-white rounded-lg shadow-md hover:scale-105 transition-transform"
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </div>
                </form>

                {/* Social Media Section */}
                <div className="flex justify-center mt-8 gap-6">
                    <a
                        href="https://www.linkedin.com/in/sanduni-navodya-b3a370282"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <Image
                            src="/linkedin.png"
                            alt="LinkedIn"
                            width={40}
                            height={40}
                            className="cursor-pointer hover:scale-110 transition-transform"
                        />
                    </a>
                    <a
                        href="https://github.com/SanduniNavodya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <Image
                            src="/gitwhite.png"
                            alt="GitHub"
                            width={40}
                            height={40}
                            className="cursor-pointer hover:scale-110 transition-transform"
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=100078203752777"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <Image
                            src="/facebook.png"
                            alt="Facebook"
                            width={40}
                            height={40}
                            className="cursor-pointer hover:scale-110 transition-transform"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/sanduninavodya01/profilecard/?igsh=MWM2czFscmUwaHdjZg=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <Image
                            src="/instagram.png"
                            alt="Instagram"
                            width={40}
                            height={40}
                            className="cursor-pointer hover:scale-110 transition-transform"
                        />
                    </a>
                </div>
            </div>
        </div>

    );
};

export default Contact;
