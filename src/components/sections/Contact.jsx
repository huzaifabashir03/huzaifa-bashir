import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());

  useEffect(() => {
    emailjs.init("HnQbZWmJW0LVNobKp");
  }, []);

  const focusContactForm = (event) => {
    event.preventDefault();
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.setTimeout(() => {
      document.getElementById("name")?.focus({ preventScroll: true });
    }, 500);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email" && emailError) {
      setEmailError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    emailjs
      .send("service_yoa60gm", "template_o6a4iyj", {
        name: formData.name,
        email: formData.email.trim(),
        from_email: formData.email.trim(),
        reply_to: formData.email.trim(),
        user_email: formData.email.trim(),
        message: formData.message,
      })
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setIsLoading(false);
          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          console.error("Email send failed:", error);
          setIsLoading(false);
          alert("Failed to send email. Please try again.");
        },
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "huzaifabashir444@gmail.com",
      href: "#contact-form",
      onClick: focusContactForm,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 342 1310092",
      href: "tel:+923421310092",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Punjab, Pakistan",
      href: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-8 lg:px-12 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
            Contact
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Start a Conversation
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Have a project, role, or collaboration in mind? Send the details and
            I will get back to you with a clear next step.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {contactInfo.map((info) => {
              const IconComponent = info.icon;

              return (
                <motion.a
                  key={info.label}
                  variants={itemVariants}
                  href={info.href || undefined}
                  onClick={info.onClick}
                  whileHover={{ y: info.href ? -4 : 0 }}
                  className={`block group ${info.href ? "" : "cursor-default"}`}
                >
                  <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-slate-600/80 transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center mb-4">
                      <IconComponent size={24} className="text-slate-300" />
                    </div>
                    <p className="text-slate-400 text-sm font-medium mb-1">
                      {info.label}
                    </p>
                    <p className="text-white font-semibold break-words">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-slate-400 text-sm font-medium mb-4">Connect</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/huzaifabashir03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/80 flex items-center justify-center text-slate-400 hover:text-slate-300 transition-all duration-300"
                  aria-label="GitHub profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/huzaifa-bashir-209b073a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/80 flex items-center justify-center text-slate-400 hover:text-slate-300 transition-all duration-300"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={20} />
                </a>
                <button
                  type="button"
                  onClick={focusContactForm}
                  className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/80 flex items-center justify-center text-slate-400 hover:text-slate-300 transition-all duration-300"
                  aria-label="Go to contact form"
                >
                  <Mail size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-6 scroll-mt-28"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:border-slate-500 focus:outline-none transition-all duration-300"
                  placeholder="Full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-6 py-3 bg-slate-800/50 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition-all duration-300 ${
                    emailError
                      ? "border-red-400/70 focus:border-red-400"
                      : "border-slate-700/50 focus:border-slate-500"
                  }`}
                  placeholder="you@example.com"
                  aria-invalid={emailError ? "true" : "false"}
                  aria-describedby={emailError ? "email-error" : undefined}
                />
                {emailError && (
                  <p id="email-error" className="mt-2 text-sm text-red-300">
                    {emailError}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:border-slate-500 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about the project, timeline, and goals."
                />
              </div>

              <motion.button
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
                type="submit"
                disabled={isLoading || isSubmitted}
                className={`w-full flex items-center justify-center gap-2 px-8 py-3 font-semibold rounded-lg border transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isSubmitted
                    ? "bg-slate-700 text-slate-300 border-slate-600"
                    : "bg-slate-700 text-white hover:bg-slate-600 border-slate-600 hover:border-slate-500"
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle2 size={20} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
