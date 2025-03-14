import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    const serviceId = "default_service";  // Replace with your EmailJS Service ID
    const templateId = "template_x94j67s"; // Replace with your EmailJS Template ID
    const publicKey = "3gOCtH1hjdsvCz1-H"; // Replace with your EmailJS Public Key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setResponseMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setResponseMessage("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="relative flex justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-24 text-white bg-[url('/images/contact.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="w-full max-w-6xl bg-black p-6 sm:p-10 rounded-lg shadow-lg border-2 border-[#7F60ED] flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12 mt-12 sm:mt-16 relative z-10">
        <div className="w-full md:w-1/2 flex flex-col items-center px-4 sm:px-6 py-6 sm:py-8">
          <div className="w-full max-w-md">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center">Get in touch with us</h2>

            <div className="flex items-center space-x-4 bg-[#1e1e38] p-4 sm:p-5 rounded-lg mt-6 sm:mt-8">
              <img src="/images/Ellipse 6.png" alt="User Avatar" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full" />
              <p className="text-xs sm:text-sm text-gray-300">
                Hi, I’m Amanda. Need help? Use the form below or email me at
                <span className="text-[#B296F1]"> aitank@xtransmatrix.com</span>.
              </p>
            </div>

            <form className="space-y-4 sm:space-y-6 mt-6 sm:mt-10" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1]"
                required
              />
              <textarea
                name="message"
                placeholder="Type your query here..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 bg-[#1e1e38] text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#B296F1] h-24 sm:h-28"
                required
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#6253A1] text-white rounded-md text-sm sm:text-lg font-semibold hover:bg-[#53458C] transition">
                {loading ? "Sending..." : "Send my message"}
              </button>
            </form>
            
            {responseMessage && (
              <p className={`text-sm mt-4 text-center ${responseMessage.includes("Failed") ? "text-red-400" : "text-green-400"}`}>
                {responseMessage}
              </p>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col self-stretch">
          <div className="w-full h-full rounded-lg overflow-hidden flex-grow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.7748129493244!2d77.59107387485258!3d13.061026713693185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1fb0f1f0b12f%3A0x6b0bb03d8998d63c!2s3H4X%2B448%2C%20Dasarahalli%20Main%20Rd%2C%20Sector%20B%2C%20Hebbal%20Kempapura%2C%20Bengaluru%2C%20Byatarayanapura%20CMC%20and%20OG%20Part%2C%20Karnataka%20560092!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
