import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const testimonials = [
  {
    name: "أحمد محمد",
    role: "مدير مشروع تقني",
    company: "شركة الابتكار الرقمي",
    text: "عمل احترافي وسريع جداً! فريق متعاون وملتزم بالمواعيد. تم تطوير موقعنا بأعلى معايير الجودة وتجاوز كل التوقعات. أوصي بهم بشدة لأي مشروع تقني.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=12",
    project: "موقع شركة تقنية",
  },
  {
    name: "ليلى أحمد",
    role: "صاحبة متجر إلكتروني",
    company: "متجر الأناقة",
    text: "التواصل كان ممتاز والتنفيذ أفضل مما توقعت. صمموا لي متجراً إلكترونياً متكاملاً بتصميم عصري وواجهة سهلة الاستخدام. المبيعات زادت بشكل ملحوظ!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=45",
    project: "متجر إلكتروني",
  },
  {
    name: "سامر خالد",
    role: "رائد أعمال",
    company: "شركة النجاح للاستشارات",
    text: "تحسّن واضح في أداء الموقع بعد العمل معهم. السرعة والأداء أصبحا رائعين، وتجربة المستخدم تحسنت بشكل كبير. استثمار يستحق كل ريال.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=33",
    project: "تحسين أداء موقع",
  },
  {
    name: "نورة العلي",
    role: "مديرة تسويق",
    company: "وكالة الإبداع",
    text: "تعاملت معهم في عدة مشاريع وكانت النتائج دائماً مبهرة. فريق محترف يفهم احتياجات العميل ويقدم حلول مبتكرة. التصميم والبرمجة على أعلى مستوى.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=47",
    project: "موقع وكالة تسويق",
  },
  {
    name: "خالد السعيد",
    role: "مؤسس منصة تعليمية",
    company: "منصة المعرفة",
    text: "طوروا لنا منصة تعليمية متكاملة بميزات رائعة. الطلاب والمعلمون سعداء جداً بسهولة الاستخدام. دعم فني ممتاز ومتابعة مستمرة بعد التسليم.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=51",
    project: "منصة تعليمية",
  },
  {
    name: "مريم حسن",
    role: "صاحبة مطعم",
    company: "مطعم الذواقة",
    text: "تطبيق رائع لطلب الطعام! واجهة جميلة وسهلة، العملاء يحبونه. زادت الطلبات الإلكترونية بنسبة 200%. شكراً للفريق المبدع على هذا العمل الاحترافي.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=23",
    project: "تطبيق مطعم",
  },
];

const Testimonials = () => {
  const [activeTesti, setActiveTesti] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    if (!isAutoPlay) return;
    const t = setInterval(
      () => setActiveTesti((p) => (p + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(t);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setActiveTesti((p) => (p + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setActiveTesti((p) => (p - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  return (
    <section id="testimonials" className="bg-gray-50 py-12">
      <div
        ref={sectionRef}
        className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ${
          sectionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
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
                onClick={() => {
                  setActiveTesti(idx);
                  setIsAutoPlay(false);
                }}
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
