const Footer = () => {
  const socials = [
    { id: "whatsapp", label: "واتساب", url: "https://wa.me/0000000000" },
    { id: "instagram", label: "انستغرام", url: "https://instagram.com/your" },
    { id: "linkedin", label: "لينكدإن", url: "https://linkedin.com/in/your" },
    { id: "x", label: "X", url: "https://x.com/your" },
  ];

  return (
    <footer className="mt-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300">
          © {new Date().getFullYear()} جميع الحقوق محفوظة.
        </div>

        <nav className="flex gap-4">
          <a
            href="#portfolio"
            className="text-sm text-gray-300 hover:text-white"
          >
            الأعمال
          </a>
          <a
            href="#testimonials"
            className="text-sm text-gray-300 hover:text-white"
          >
            التقييمات
          </a>
          <a href="#contact" className="text-sm text-gray-300 hover:text-white">
            اتصل بنا
          </a>
        </nav>

        <div className="flex gap-2">
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-md bg-gray-800 hover:bg-indigo-600 transition-colors text-sm"
              aria-label={s.label}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
