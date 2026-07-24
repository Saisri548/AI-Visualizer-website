import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300 px-6 py-28">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-blue-600 dark:text-cyan-400">
            GET IN TOUCH
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Have a question, feedback, or want to contribute to AI Visualizer?
            We'd love to hear from you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {/* Contact Information */}
          <div className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Contact Information
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Feel free to reach out through any of the following platforms.
            </p>

            <div className="mt-8 space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail
                  size={22}
                  className="text-blue-600 dark:text-cyan-400"
                />
                <a
                  href="mailto:thotasaisri7@gmail.com"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
                >
                  thotasaisri7@gmail.com
                </a>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4">
                <FaGithub
                  size={22}
                  className="text-gray-800 dark:text-white"
                />
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
                >
                  GitHub Profile
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <FaLinkedin
                  size={22}
                  className="text-blue-700"
                />
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Send a Message
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Fill out the form below and we'll get back to you soon.
            </p>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 outline-none focus:border-blue-600 transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 outline-none focus:border-blue-600 transition"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border border-gray-300 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 outline-none focus:border-blue-600 transition"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold transition"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}