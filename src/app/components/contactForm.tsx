"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdOutlineMarkEmailRead } from "react-icons/md";

import { useState } from "react";
import { sendContactForm } from "../../../lib/api";

const Form = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    access_key: "4f412a8f-0a11-4ba9-8e37-e12661f36602",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = JSON.stringify(formData);
    await sendContactForm(data).then((data) => {
      setSuccess(true);
      handleOpenModal();
      setFormData({
        ...formData,
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => {
        setSuccess(false);
        setLoading(false);
      }, 3000);
    });
  };

  return (
    <motion.form
      action=""
      ref={ref}
      className="mb-8"
      initial={{ x: "-10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onSubmit={handleSubmit}
    >
      <h4 className="text-text pb-2.5">Message Me</h4>
      <div className="grid grid-cols-12 gap-4 pr-4">
        <div className="col-span-6">
          <input
            type="text"
            className="text-md w-full p-2.5 border-none bg-[#161616] mb-5 border-b-[1px] border-b-grey border-[1px] outline outline-2 color-title focus:border-b-green"
            onChange={handleChange}
            value={formData.name}
            id="contactName"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="col-span-6">
          <input
            type="email"
            className="text-md w-full p-2.5 border-none bg-[#161616] mb-5 border-b-[1px] border-b-grey border-[1px] outline outline-2 color-title focus:border-b-green"
            onChange={handleChange}
            value={formData.email}
            id="contactEmail"
            name="email"
            placeholder="Email"
            required
          />
        </div>
      </div>
      <div className="pr-4">
        <input
          type="text"
          className="text-md w-full p-2.5 border-none bg-[#161616] mb-5 border-b-[1px] border-b-grey border-[1px] outline outline-2 color-title focus:border-b-green"
          onChange={handleChange}
          value={formData.subject}
          id="contactSubject"
          name="subject"
          placeholder="Subject"
          required
        />
      </div>
      <div className="pr-4">
        <textarea
          className="text-md w-full p-2.5 border-none bg-[#161616] mb-5 border-b-[1px] border-b-grey border-[1px] outline outline-2 color-title focus:border-b-green"
          onChange={handleChange}
          value={formData.message}
          name="message"
          id="contactMessage"
          rows={5}
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div className="col-12 formGroup formSubmit">
        <button
          disabled={loading}
          className="text-[#f9f9f] bg-green border-none text-standard px-6 py-3 rounded-[20px] mt-2 cursor-pointer hover:bg-[#03b979]"
        >
          {success ? "Message Sent" : "Send Message"}
          {loading && <AiOutlineLoading3Quarters />}
        </button>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
        style={{
          content: {
            backgroundColor: "#101010",
            color: "#9f9f9f",
            padding: "40px",
            width: "400px",
            top: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems:"end",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: "999",
          },
        }}
      >
        <IoMdClose
          size={30}
          className="cursor-pointer"
          onClick={handleCloseModal}
        />
        <div className="flex flex-col items-center mt-4">
          <MdOutlineMarkEmailRead size={60} />
          <p className="text-text mt-4">
            Thank you for contacting us. We have received your message and will
            get back to you shortly.
          </p>
        </div>
      </Modal>
    </motion.form>
  );
};

export default Form;
