
export default function About() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">About Us</h2>
      <div className="bg-white p-6 rounded shadow space-y-6">
        <p>
          Welcome to our company! We are a dedicated team of professionals
          committed to delivering excellence in everything we do.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>
              To provide innovative solutions that make a positive impact on our
              clients&apos; success.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p>
              To become a leading force in our industry while maintaining the
              highest standards of quality and service.
            </p>
          </div>
        </div>
        <p>
          With years of experience in the industry, we pride ourselves on our
          customer-focused approach and commitment to excellence.
        </p>
      </div>
    </>
  )
}
