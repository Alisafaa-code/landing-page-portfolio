import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Github,
  Send,
  Heart,
  Code,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Footer = () => {
  const [footerRef, footerVisible] = useScrollAnimation({ threshold: 0.1 });
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "الخدمات", href: "#services" },
    { name: "الأعمال", href: "#portfolio" },
    { name: "التقييمات", href: "#testimonials" },
    { name: "اتصل بنا", href: "#contact" },
  ];

  const services = [
    { name: "تصميم مواقع", href: "#" },
    { name: "تطوير تطبيقات", href: "#" },
    { name: "تحسين الأداء", href: "#" },
    { name: "استشارات تقنية", href: "#" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/your",
      color: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/your",
      color: "hover:bg-pink-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/your",
      color: "hover:bg-blue-700",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/your",
      color: "hover:bg-sky-500",
    },
    {
      name: "Github",
      icon: Github,
      url: "https://github.com/your",
      color: "hover:bg-gray-700",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: "+966 XX XXX XXXX",
      href: "tel:+966XXXXXXXXX",
    },
    {
      icon: Mail,
      text: "info@example.com",
      href: "mailto:info@example.com",
    },
    {
      icon: MapPin,
      text: "البلد والمدينة",
      href: "#",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Decoration */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div> */}

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div
          ref={footerRef}
          className={`py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 transition-all duration-1000 ${
            footerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                مطور فرونت اند
              </h3>
              <p className="text-gray-400 leading-relaxed">
                نقدم حلولاً تقنية مبتكرة ومتطورة لتحويل أفكارك إلى واقع رقمي
                مذهل يحقق أهدافك ويميزك عن المنافسين.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-4">
                تواصل معنا
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 group"
                  >
                    <span className="group-hover:text-indigo-400">←</span>{" "}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 group"
                  >
                    <span className="group-hover:text-purple-400">←</span>{" "}
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold mb-6">معلومات التواصل</h4>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <a
                      href={info.href}
                      className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <info.icon className="w-5 h-5 mt-0.5 text-indigo-400 group-hover:scale-110 transition-transform" />
                      <span className="text-sm leading-relaxed">
                        {info.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3">
                اشترك في النشرة البريدية
              </h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-linear-to-r from-indigo-600 to-purple-600 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                  aria-label="إرسال"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>© {currentYear} جميع الحقوق محفوظة</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                صُنع بـ{" "}
                <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
                علي صفاء
              </span>
            </div>

            {/* Tech Stack Badge */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Code className="w-4 h-4 text-indigo-400" />
              <span>React • Tailwind CSS • Vite</span>
            </div>

            {/* Links */}
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-white transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
