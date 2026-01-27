export default function Services() {
  const services = [
    { title: "Advertising", icon: "ad.svg" },
    { title: "Content marketing", icon: "content.svg" },
    { title: "Content writing", icon: "writing.svg" },
    { title: "Social media", icon: "social.svg" }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-dark">
      <h2 className="text-4xl font-semibold text-center mb-12 dark:text-white">
        How can we help?
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white dark:bg-black p-8 rounded-2xl shadow hover:border-primary border"
          >
            <img src={`./assets/${s.icon}`} className="h-10 mb-4" />
            <h3 className="text-xl font-semibold dark:text-white">{s.title}</h3>
            <p className="mt-2 text-gray-500">
              We help you execute your plan and deliver results.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}