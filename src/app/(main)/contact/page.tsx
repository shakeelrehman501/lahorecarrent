"use client";
import { useState } from "react";
import Heading from "@/components/myComponents/Heading";
import { ContactCardType, contactCardData } from "@/lib/data/constant";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { CarRentalMap } from "./component/Map";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedItem } from "@/components/ui/AnimatedItem";
import Image from "next/image";

function ContactInfoCard({ icon: Icon, title, data }: ContactCardType) {
  return (
    <div className="min-h-36.5 min-w-75 max-w-100  pt-7  group hover:border-primary hover:scale-102 cursor-pointer  relative   bg-white flex flex-col items-center gap-2 justify-center rounded-2xl p-6 border border-[#e2e8f0] dark:border-[#1e293b] shadow-sm transition-all duration-300 ease-in-out ">
      {/* Icon */}
      <div className="absolute -top-6  bg-primary text-white w-12 h-12 rounded-[12px] flex items-center justify-center mb-4 transition-colors">
        <Icon size={24} />
      </div>
      {/* Heading */}
      <h3 className=" font-bold pt-1 text-[20px] text-gray-700 group-hover:text-primary tracking-[-0.45px] leading-7 mb-2 transition-colors">
        {title}
      </h3>
      {/* Info */}
      <p className="text-center  text-[17px] text-[#64748b] group-hover:text-primary leading-6 transition-colors">
        {data}
      </p>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_2yk2iq9", // 🔴 Service ID
        "template_sa4dvhq", // 🔴 Template ID
        formData,
        "7mNHnEab_e7n2iQgm", // 🔴 Public Key
      )
      .then(
        () => {
          toast.success("Email sent successfully ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Email sending failed ❌");
          console.log("Status:", error.status);
          console.log("Text:", error.text);
          console.log("error:", error);
        },
      )
      .finally(() => {
        setLoading(false);
      });
  };
  const labelClass =
    "block font-medium text-[16px] text-foreground/90  leading-[20px] mb-2 transition-colors";
  const inputClass =
    "w-full bg-gray-100 dark:bg-gray-800 text-foreground placeholder:text-foreground/50  px-4 py-3 rounded-[12px] text-[16px] focus:outline-none focus:ring-2 focus:ring-primary transition-all";
  return (
    <section
      id="contact"
      className="bg-gray-50 dark:bg-gray-900  transition-colors"
    >
      {/* Background Image */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />

      <div className="relative h-75 md:h-90 lg:h-110 xl:h-120 2xl:h-150 w-full">
        {loading && (
          <div className="absolute inset-0 bg-gray-300  animate-pulse" />
        )}
        <Image
          src="/others/contactus.webp"
          width={3000}
          height={2000}
          alt="City_Skyline"
          onLoad={() => setLoading(false)}
          className={`w-full h-full object-cover ${loading ? "opacity-0" : "opacity-100"}`}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider">
            Contact Us
          </h1>
        </div>
      </div>
      {/* Content */}
      <div className="relative max-w-350 mx-auto px-6 py-24">
        {/* Header */}
        <Heading
          heading="Get In"
          gradientHeading="Touch"
          paragraph="Have a project in mind or want to collaborate? I would love to hear from you"
        />

        {/* Contact Cards & Form */}
        <div className="grid lg:grid-cols-[336px_1fr] gap-6 max-w-276 mx-auto  ">
          {/* Information Card */}
          <AnimatedSection className="flex flex-wrap items-center  justify-center lg:flex-col gap-10 lg:justify-between">
            {contactCardData.map((item, index) => (
              <AnimatedItem key={index} type="slideLeft" index={index}>
                <ContactInfoCard {...item} />
              </AnimatedItem>
            ))}
          </AnimatedSection>

          {/* Right Side - Contact Form */}
          <AnimatedSection>
            <AnimatedItem
              type="slideRight"
              index={0}
              className="bg-white dark:bg-[#0f172a] rounded-3xl p-10 border border-[#e2e8f0] dark:border-[#1e293b] shodow shadow-sm transition-colors"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className={labelClass}>Your Name</label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className={labelClass}>Your Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={inputClass}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary   text-gray-200  font-semibold text-[18px] leading-6 py-4 rounded-[12px] shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 group"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </div>
      <CarRentalMap />
    </section>
  );
}

export default Contact;
