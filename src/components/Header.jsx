import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const brandName = "الشعار";

  const nav = [
    { label: "الرئيسية", href: "#" },
    { label: "الأعمال", href: "#portfolio" },
    { label: "التقييمات", href: "#testimonials" },
    { label: "اتصل", href: "#contact" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-40 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold"
            style={{ background: "linear-gradient(135deg,#6366f1,#ec4899)" }}
          >
            {brandName.charAt(0)}
          </div>
          <div>
            <h1 className="text-lg font-semibold">{brandName}</h1>
            <p className="text-xs text-gray-500">حلول رقمية — تصميم وبرمجة</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-gray-700 hover:text-indigo-600"
            >
              {n.label}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-2 inline-block px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            تواصل معنا
          </a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="قائمة"
            className="p-2 rounded-md border"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-center"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
