
export default function Services() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Our Services</h2>

      <div className="bg-white p-6 rounded shadow space-y-6">
        <p className="text-gray-700">
          We offer a wide range of professional services to meet your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded shadow hover:shadow-md transition">
            <h3 className="text-green-600 text-lg font-bold mb-2">Web Development</h3>
            <p>
              Custom website development tailored to your business needs with
              responsive design.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded shadow hover:shadow-md transition">
            <h3 className="text-green-600 text-lg font-bold mb-2">Mobile Apps</h3>
            <p>
              Native and cross-platform mobile application development for iOS
              and Android.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded shadow hover:shadow-md transition">
            <h3 className="text-green-600 text-lg font-bold mb-2">UI/UX Design</h3>
            <p>
              User-centered design solutions that enhance user experience and
              engagement.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded shadow hover:shadow-md transition">
            <h3 className="text-green-600 text-lg font-bold mb-2">Cloud Services</h3>
            <p>
              Cloud infrastructure setup, maintenance, and optimization
              services.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded shadow hover:shadow-md transition">
            <h3 className="text-green-600 text-lg font-bold mb-2">Digital Marketing</h3>
            <p>
              Comprehensive digital marketing strategies to grow your online
              presence.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded shadow hover:shadow-md transition">
            <h3 className="text-green-600 text-lg font-bold mb-2">IT Consulting</h3>
            <p>
              Expert IT consultation to help you make informed technology
              decisions.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
