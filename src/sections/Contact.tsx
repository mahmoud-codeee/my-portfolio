import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      await emailjs.send(
        "service_v5osxci",
        "template_70pic51",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "wWDRgoNrVGy0OWP85",
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "mahmoudsaad200251@gmail.com",
      link: "mailto:mahmoudsaad200251@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/mahmoud-saad-mokhtar",
      link: "https://www.linkedin.com/in/mahmoud-saad-mokhtar",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/mahmoud-codeee",
      link: "https://github.com/mahmoud-codeee",
      gradient: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm text-purple-400 mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm">
                ❌ Something went wrong. Try again.
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-4">
            {contactMethods.map((method, i) => (
              <a
                key={i}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass p-6 rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center text-2xl`}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{method.title}</h4>
                    <p className="text-neutral-400 text-sm">{method.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
