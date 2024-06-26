import React from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ids88zc", "template_zjujggk", form.current, {
        publicKey: "C0CCVwWplRfdcwOu8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dhanushngowda1@gmail.com</h5>
            
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>FaceBook Messenger</h4>
            <h5>Dhanush N Gowda</h5>
            <a href="https://m.me/dhanush.ngowda.1">Send a Message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+447933652125</h5>
            <a
              href="https://wa.me/+447933652125"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} id="f1">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email " />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
          ></textarea>
          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
//
//
