import { useState } from "react";
import { ExternalLink, Github, X, Sparkles } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.1 });

  const portfolio = [
    {
      title: "تصميم موقع شركة تقنية",
      desc: "تصميم واجهة أنيقة متجاوبة لشركة تقنية حديثة.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
      tech: ["React", "Tailwind CSS", "Node.js"],
      category: "Web Development",
      fullDescription:
        "موقع شركة تقنية متكامل يتضمن صفحة رئيسية جذابة، صفحة خدمات، معرض أعمال، ونموذج اتصال. تم تصميمه ليكون سريع الاستجابة وسهل الاستخدام على جميع الأجهزة.",
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/example/project",
    },
    {
      title: "تطبيق مطعم",
      desc: "واجهة تطبيق لطلب الطعام بخيارات متعددة وتصميم بسيط.",
      img: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1400&auto=format&fit=crop",
      tech: ["React Native", "Firebase", "Redux"],
      category: "Mobile App",
      fullDescription:
        "تطبيق مطعم متكامل يسمح للعملاء بتصفح القائمة، إضافة الطلبات إلى السلة، وإتمام عملية الشراء. يتضمن نظام مصادقة، تتبع الطلبات، ومعالجة الدفع الآمن.",
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/example/project",
    },
    {
      title: "موقع متجر إلكتروني",
      desc: "صفحة منتجات متكاملة مع خيارات شراء سلسة.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
      tech: ["Next.js", "TypeScript", "Stripe"],
      category: "E-commerce",
      fullDescription:
        "متجر إلكتروني كامل مع إدارة المنتجات، سلة التسوق، معالجة الدفع عبر Stripe، ولوحة تحكم للإدارة. يتميز بتجربة مستخدم سلسة وأداء عالي.",
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/example/project",
    },
    {
      title: "لوحة تحكم Dashboard",
      desc: "تصميم لوحة تحكم احترافية ببيانات ورسوم بيانية.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop",
      tech: ["Vue.js", "Chart.js", "Express"],
      category: "Dashboard",
      fullDescription:
        "لوحة تحكم تحليلية شاملة تعرض البيانات في الوقت الفعلي مع رسوم بيانية تفاعلية، تقارير مفصلة، وإدارة المستخدمين. مثالية لمراقبة الأعمال وتحليل الأداء.",
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/example/project",
    },
    {
      title: "موقع وكالة تسويق",
      desc: "موقع عصري بألوان جذابة وواجهات متفاعلة.",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1400&auto=format&fit=crop",
      tech: ["React", "Framer Motion", "Sanity"],
      category: "Marketing",
      fullDescription:
        "موقع وكالة تسويق رقمية مع أنيميشن متقدمة، معرض أعمال ديناميكي، قسم فريق العمل، ونظام إدارة محتوى. يتميز بتصميم جذاب يعكس الإبداع والاحترافية.",
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/example/project",
    },
    {
      title: "منصة تعليمية",
      desc: "واجهة سهلة الاستخدام لتجربة تعلم إلكتروني حديثة.",
      img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1400&auto=format&fit=crop",
      tech: ["React", "MongoDB", "Socket.io"],
      category: "Education",
      fullDescription:
        "منصة تعليم إلكترونية متكاملة تتضمن إدارة الدورات، مقاطع فيديو تفاعلية، اختبارات، ومنتدى نقاش. توفر تجربة تعلم شاملة للطلاب والمعلمين.",
      demoLink: "https://demo.example.com",
      codeLink: "https://github.com/example/project",
    },
  ];

  return (
    <>
      <section
        id="portfolio"
        className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 -right-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 space-y-4 transition-all duration-1000 ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-semibold text-indigo-700">
                معرض الأعمال
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              أعمالنا{" "}
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                السابقة
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نماذج حقيقية من مشاريع نفذناها لعملائنا بأعلى معايير الجودة
              والاحترافية
            </p>
          </div>

          {/* Portfolio Grid */}
          <div
            ref={gridRef}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
              gridVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {portfolio.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 cursor-pointer ${
                  gridVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: gridVisible ? `${index * 100}ms` : "0ms",
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                    {project.category}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full font-semibold text-gray-900 flex items-center gap-2">
                      <span>عرض التفاصيل</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full border border-indigo-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 left-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Image Header */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-3">
                    {selectedProject.category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="p-8 space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    وصف المشروع
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    التقنيات المستخدمة
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-xl border border-indigo-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>معاينة المشروع</span>
                  </a>
                  <a
                    href={selectedProject.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>الكود المصدري</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
