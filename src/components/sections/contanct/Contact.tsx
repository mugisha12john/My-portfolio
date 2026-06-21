import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const toastTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
    },
    [],
  );

  const triggerToast = (type: "success" | "error", message: string) => {
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    setToast({ type, message });
    toastTimer.current = window.setTimeout(() => setToast(null), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      await emailjs.send(
        "service_fvc6ej9",
        "template_tfzix9h",
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        { publicKey: "9Vhq16hAvxjj7B39I" },
      );

      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      triggerToast("success", "Message sent. Thank you - I will reply soon.");
    } catch (error) {
      setFormStatus("error");
      triggerToast("error", "Something went wrong. Please email me directly.");
    }
  };
  return (
    <section
      id="contact"
      className="relative py-30 px-15 bg-bg border-t border-[rgba(127,238,100,0.12)]"
    >
      {toast && (
        <div className="fixed top-6 right-6 z-200">
          <div
            role="status"
            aria-live="polite"
            className={`font-mono text-[11px] tracking-[0.08em] px-4 py-3 border shadow-lg ${
              toast.type === "success"
                ? "bg-bg-2 text-green border-[rgba(127,238,100,0.3)]"
                : "bg-bg-2 text-red-400 border-[rgba(248,113,113,0.3)]"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}
      <div className="section-label font-mono text-[10px] text-green tracking-[0.25em] uppercase mb-4 flex items-center gap-3 before:content-[''] before:block before:w-6 before:h-px before:bg-green">
        06 — Contact
      </div>

      <h2 className="section-title text-[clamp(32px,4vw,52px)] font-black leading-[1.1] tracking-[-0.02em] mb-15">
        Let's Build
        <br />
        <span className="text-green">Something Real</span>
      </h2>

      <div className="contact-layout grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <ContactInfo />
        <ContactForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          formStatus={formStatus}
        />
      </div>
    </section>
  );
};

export default Contact;
