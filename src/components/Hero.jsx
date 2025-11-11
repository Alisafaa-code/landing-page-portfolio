const Hero = () => {
  return (
    <section className="bg-linear-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            مرحبا انا مطور فرونت مواقع وتطبيقات
          </h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            neque unde rerum ipsa dolorem iste temporibus ducimus magnam nemo
            consequuntur.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className={`px-4 py-2 rounded-md border border-transparent`}
            >
              أعمالنا
            </a>
            <a
              href="#testimonials"
              className="px-4 py-2 rounded-md border border-gray-200"
            >
              تقييمات العملاء
            </a>
            <a href="#contact" className={`px-4 py-2 rounded-md text-white`}>
              اطلب عرض سعر
            </a>
          </div>

          <div className="mt-6 flex gap-3 items-center"></div>
        </div>

        <div className="hidden md:block">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
              alt="hero"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
