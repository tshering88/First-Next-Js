

export default function Contact() {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

      <div className="bg-white p-6 rounded shadow space-y-6">
        <p className="mb-4">
          Get in touch with us! Fill out the form below or use our contact
          information.
        </p>

        <div className="bg-gray-50 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
          <p>📞 <span className="font-medium">Phone:</span> (123) 456-7890</p>
          <p>📧 <span className="font-medium">Email:</span> info@example.com</p>
          <p>📍 <span className="font-medium">Address:</span> 123 Main Street</p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">Message:</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}
