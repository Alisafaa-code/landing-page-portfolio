const Portfolio = () => {
  const portfolio = [
    {
      title: "تصميم موقع شركة تقنية",
      desc: "تصميم واجهة أنيقة متجاوبة لشركة تقنية حديثة.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "تطبيق مطعم",
      desc: "واجهة تطبيق لطلب الطعام بخيارات متعددة وتصميم بسيط.",
      img: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "موقع متجر إلكتروني",
      desc: "صفحة منتجات متكاملة مع خيارات شراء سلسة.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "لوحة تحكم Dashboard",
      desc: "تصميم لوحة تحكم احترافية ببيانات ورسوم بيانية.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "موقع وكالة تسويق",
      desc: "موقع عصري بألوان جذابة وواجهات متفاعلة.",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1400&auto=format&fit=crop",
    },
    {
      title: "منصة تعليمية",
      desc: "واجهة سهلة الاستخدام لتجربة تعلم إلكتروني حديثة.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold text-center">أعمالنا السابقة</h3>
      <p className="text-gray-500 text-center mt-2">
        نماذج حقيقية من مشاريع نفذناها لعملائنا.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h4 className="font-semibold text-lg">{p.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
