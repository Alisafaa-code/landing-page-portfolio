import CountUp from "./CountUp";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div> */}

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-700">
                متاح للعمل على مشاريع جديدة
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-4xl leading-tight text-gray-700 font-semibold">
              <span>مطور front-end, back-end</span>{" "}
              <span>خبرة قوية في التطبيقات والمواقع</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              أقوم بتصميم وتطوير مواقع وتطبيقات ويب عصرية وسريعة الاستجابة
              باستخدام أحدث التقنيات. أحول أفكارك إلى واقع رقمي مذهل يجذب
              العملاء ويحقق أهدافك.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  استكشف أعمالي
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
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <a
                href="#contact"
                className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full font-semibold border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  اطلب عرض سعر
                  <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200/50">
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-gray-900">
                  <CountUp end={50} suffix="+" />
                </p>
                <p className="text-sm text-gray-600">مشروع منجز</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-gray-900">
                  <CountUp end={40} suffix="+" />
                </p>
                <p className="text-sm text-gray-600">عميل راضٍ</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-bold text-gray-900">
                  <CountUp end={5} suffix="+" />
                </p>
                <p className="text-sm text-gray-600">سنوات خبرة</p>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:block animate-fade-in-right">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-3xl opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl opacity-20 blur-2xl"></div>

            {/* Main Image Container */}
            <div className="relative">
              {/* Glassmorphism Card */}
              <div className="relative bg-white/40 backdrop-blur-lg rounded-3xl p-2 shadow-2xl border border-white/60">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Modern workspace"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">جودة عالية</p>
                    <p className="text-sm text-gray-600">تسليم سريع</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-100 animate-float animation-delay-2000">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">أداء سريع</p>
                    <p className="text-sm text-gray-600">تجربة ممتازة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
