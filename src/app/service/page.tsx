export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>

      <div className="bg-white/80 p-8 rounded-2xl shadow-md border border-gray-200 space-y-6">
        <p className="text-center text-gray-600 text-lg">
          We offer a wide range of professional services to meet your needs and help your business grow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Web Development',
              desc: 'Custom website development tailored to your business needs with responsive design.',
            },
            {
              title: 'Mobile Apps',
              desc: 'Native and cross-platform mobile application development for iOS and Android.',
            },
            {
              title: 'UI/UX Design',
              desc: 'User-centered design solutions that enhance user experience and engagement.',
            },
            {
              title: 'Cloud Services',
              desc: 'Cloud infrastructure setup, maintenance, and optimization services.',
            },
            {
              title: 'Digital Marketing',
              desc: 'Comprehensive digital marketing strategies to grow your online presence.',
            },
            {
              title: 'IT Consulting',
              desc: 'Expert IT consultation to help you make informed technology decisions.',
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition hover:-translate-y-1"
            >
              <h3 className="text-blue-700 text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
