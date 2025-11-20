import {
  Palette,
  Code2,
  Zap,
  Smartphone,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const Links = () => {
  const services = [
    {
      icon: Palette,
      title: "تصميم إبداعي",
      description:
        "تصاميم عصرية وجذابة تعكس هوية علامتك التجارية وتجذب انتباه العملاء",
      gradient: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      delay: "0",
    },
    {
      icon: Code2,
      title: "كود نظيف واحترافي",
      description:
        "برمجة منظمة وقابلة للصيانة باستخدام أفضل الممارسات والمعايير الحديثة",
      gradient: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      delay: "100",
    },
    {
      icon: Zap,
      title: "أداء فائق السرعة",
      description:
        "مواقع سريعة التحميل ومُحسّنة لمحركات البحث لتجربة مستخدم مثالية",
      gradient: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      iconColor: "text-orange-600",
      delay: "200",
    },
    {
      icon: Smartphone,
      title: "تصميم متجاوب",
      description:
        "مواقع تعمل بسلاسة على جميع الأجهزة والشاشات من الهاتف للكمبيوتر",
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      delay: "300",
    },
    {
      icon: ShieldCheck,
      title: "أمان وموثوقية",
      description: "حماية قوية لبياناتك مع كود آمن ومختبر وخالٍ من الثغرات",
      gradient: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      delay: "400",
    },
    {
      icon: Headphones,
      title: "دعم فني مستمر",
      description:
        "متابعة دائمة وصيانة مجانية لضمان استمرارية عمل موقعك بكفاءة",
      gradient: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      delay: "500",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Decoration */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div> */}

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full">
            <svg
              className="w-5 h-5 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-purple-700">
              خدماتنا المميزة
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            ما الذي{" "}
            <span className="bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              نقدمه
            </span>{" "}
            لك؟
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نوفر لك حلولاً متكاملة لبناء حضور رقمي قوي واحترافي يميزك عن
            المنافسين ويحقق أهدافك
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${service.delay}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div
                  className={`inline-flex p-4 rounded-xl ${service.bgColor} group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon
                    className={`w-8 h-8 ${service.iconColor}`}
                    strokeWidth={2.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-indigo-600 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative Line */}
                <div className="pt-4">
                  <div
                    className={`h-1 w-0 group-hover:w-full bg-linear-to-r ${service.gradient} rounded-full transition-all duration-500`}
                  ></div>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-linear-to-br from-gray-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-linear-to-br from-purple-50 to-indigo-50 rounded-3xl border border-purple-100">
            <p className="text-lg font-semibold text-gray-800">
              هل أنت مستعد للبدء في مشروعك القادم؟
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <span>تواصل معنا الآن</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l-5 5 5 5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;
