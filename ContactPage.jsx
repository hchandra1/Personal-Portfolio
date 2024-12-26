import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import insta from "../assets/insta.png";
import linkedin from "../assets/unnamed.png";  // New LinkedIn logo
import github from "../assets/github.png";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://formsubmit.co/ajax/hchandra@uwaterloo.ca", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <motion.div
        className="w-full max-w-lg bg-gradient-to-b from-[#111827] to-[#1F2937] p-10 rounded-2xl shadow-lg mb-20"
      >
        <p className={styles.sectionSubText}></p>
        <h3 className={`${styles.sectionHeadText} mb-6`}>Contact Me</h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-[#1F2937] py-4 px-6 rounded-lg text-white outline-none border-none"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-[#1F2937] py-4 px-6 rounded-lg text-white outline-none border-none"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="bg-[#1F2937] py-4 px-6 rounded-lg text-white outline-none border-none"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-[#3B82F6] py-4 px-8 rounded-lg text-white font-bold hover:bg-[#2563EB] transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      {/* Social Media Section */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-4">
          You can also always catch me on
        </h3>
        <div className="flex space-x-8 justify-center">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.instagram.com/hari.c_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="Instagram" className="w-12 h-12" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/hari-chandrasekhar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-12 h-12 rounded-lg shadow-lg border border-gray-400"
            />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/hchandra1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" className="w-12 h-12" />
          </motion.a>
        </div>
      </div>

      {/* Success Popup */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="fixed top-20 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
        >
          Message Sent Successfully!
        </motion.div>
      )}
    </div>
  );
};

export default Contact;
