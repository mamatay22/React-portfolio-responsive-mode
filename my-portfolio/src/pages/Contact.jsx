import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully 🚀");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message || "Something went wrong ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Unable to send message. Please try again ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">

      <h1>Contact Me</h1>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>

    </div>
  );
}

export default Contact;
