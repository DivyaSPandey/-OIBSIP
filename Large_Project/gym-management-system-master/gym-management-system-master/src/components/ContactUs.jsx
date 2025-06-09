// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name,
      email,
      message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Use the service ID from .env
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Use the template ID from .env
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID // Use the user ID from .env
      );

      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
      <form onSubmit={sendMail}>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Message</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {loading && <ClipLoader size={20} color="white" />}
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
