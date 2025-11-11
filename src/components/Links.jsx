const Links = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold">ما الذي نقدمه؟</h3>
          <p className="text-sm text-gray-500 mt-2">
            تصميم مواقع، تطوير واجهات، تحسين أداء، واستشارات تقنية.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold">سرعة واحتراف</h3>
          <p className="text-sm text-gray-500 mt-2">
            مواقع خفيفة، متجاوبة، وسهلة الصيانة.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Links;
