export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">About Us</h2>

      <div className="bg-white shadow-md rounded-2xl p-8 space-y-8 border border-gray-200">
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to our company! We are a dedicated team of professionals committed to delivering excellence in everything we do.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide innovative solutions that make a positive impact on our clients&apos; success.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become a leading force in our industry while maintaining the highest standards of quality and service.
            </p>
          </div>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">
          With years of experience in the industry, we pride ourselves on our customer-focused approach and commitment to excellence.
        </p>
      </div>
    </section>
  )
}
