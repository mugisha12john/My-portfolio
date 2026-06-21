import React from "react";

type Props = {
  formData: { name: string; email: string; subject: string; message: string };
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formStatus: "idle" | "sending" | "success" | "error";
};

const ContactForm: React.FC<Props> = ({
  formData,
  onChange,
  onSubmit,
  formStatus,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="contact-form max-w-xl"
      aria-label="Contact form"
    >
      <div className="grid grid-cols-1 gap-4">
        <label className="font-mono text-[12px]">Your name</label>
        <input
          name="name"
          value={formData.name}
          onChange={onChange}
          className="p-3 border border-[rgba(127,238,100,0.08)] bg-bg-3 text-text rounded "
          placeholder="Jane Doe"
        />

        <label className="font-mono text-[12px]">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={onChange}
          className="p-3 border border-[rgba(127,238,100,0.08)] bg-bg-3 text-text rounded"
          placeholder="you@example.com"
        />

        <label className="font-mono text-[12px]">Subject</label>
        <input
          name="subject"
          value={formData.subject}
          onChange={onChange}
          className="p-3 border border-[rgba(127,238,100,0.08)] bg-bg-3 text-text rounded"
          placeholder="Project topic"
        />

        <label className="font-mono text-[12px]">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={onChange}
          className="p-3 border border-[rgba(127,238,100,0.08)] bg-bg-3 text-text rounded min-h-[120px]"
          placeholder="Brief description of your project"
        />

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={formStatus === "sending"}
            className="inline-flex items-center gap-3 px-4 py-1 bg-green text-bg font-mono font-bold tracking-[0.12em] uppercase rounded"
          >
            {formStatus === "sending" ? "Sending..." : "Send"}
          </button>

          <div className="text-sm text-text-dim">
            Or email directly at{" "}
            <a href="mailto:johnbutista004@gmail.com" className="text-green">
              johnbutista004@gmail.com
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
