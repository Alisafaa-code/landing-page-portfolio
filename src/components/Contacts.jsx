const Contacts = () => {
  const socials = {
    id: "whatsapp",
    label: "WhatsApp",
    url: "https://wa.me/0000000000",
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold text-center">تواصل معنا</h3>
      <p className="text-gray-500 text-center mt-2">
        اكتب لنا وسنعاود التواصل خلال أقرب وقت.
      </p>

      <form
        className="mt-6 bg-white p-6 rounded-lg shadow-sm grid grid-cols-1 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.target);
          const name = data.get("name");
          const email = data.get("email");
          const message = data.get("message");
          // طريقة سريعة: فتح البريد الافتراضي مع نص الرسالة
          const mailto = `mailto:you@yourdomain.com?subject=${encodeURIComponent(
            "طلب من " + name
          )}&body=${encodeURIComponent(
            message + "\n\nfrom: " + name + " | " + email
          )}`;
          window.location.href = mailto;
        }}
      >
        <input
          name="name"
          required
          placeholder="الاسم"
          className="border border-gray-200 rounded px-3 py-2"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="البريد الإلكتروني"
          className="border border-gray-200 rounded px-3 py-2"
        />
        <textarea
          name="message"
          required
          placeholder="نص الرسالة"
          rows={5}
          className="border border-gray-200 rounded px-3 py-2"
        ></textarea>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            أو تواصل عبر الواتساب مباشرة
          </div>
          <div className="flex gap-2">
            <a
              href={socials.url}
              target="_blank"
              rel="noreferrer"
              className={`px-4 py-2 rounded  text-white `}
            >
              واتساب
            </a>
            <button
              type="submit"
              className="px-4 py-2 rounded border border-gray-200"
            >
              أرسل رسالة
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contacts;
