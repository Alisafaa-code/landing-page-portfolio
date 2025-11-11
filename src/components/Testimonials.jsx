import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "أحمد",
    role: "مدير مشروع",
    text: "عمل احترافي وسريع — أوصي بهم بشدة.",
  },
  {
    name: "ليلى",
    role: "صاحبة عمل",
    text: "التواصل كان ممتاز والتنفيذ أفضل مما توقعت.",
  },
  {
    name: "سامر",
    role: "عميل",
    text: "تحسّن واضح في أداء الموقع بعد العمل معهم.",
  },
];

const Testimonials = () => {
  const [activeTesti, setActiveTesti] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActiveTesti((p) => (p + 1) % testimonials.length),
      4500
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-center">تقييمات العملاء</h3>
        <p className="text-gray-500 text-center mt-2">
          آراء حقيقية من عملائنا.
        </p>

        <div className="mt-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-shadow hover:shadow-2xl">
            <p className="text-gray-800 text-lg leading-relaxed">
              “{testimonials[activeTesti].text}”
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold text-xl"
                style={{
                  background: "linear-gradient(135deg,#6366f1,#ec4899)",
                }}
              >
                {testimonials[activeTesti].name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonials[activeTesti].name}
                </div>
                <div className="text-sm text-gray-500">
                  {testimonials[activeTesti].role}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTesti(idx)}
                aria-label={`عرض التقييم ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  idx === activeTesti
                    ? "bg-indigo-600 w-8 h-3 rounded-full"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
