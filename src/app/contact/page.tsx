

export default function Contact() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>

<div className="bg-white/80 border border-gray-200 p-6 rounded-xl shadow-md max-w-3xl mx-auto space-y-6">
  <p className="text-gray-700 leading-relaxed">
    Get in touch with us! Fill out the form below or use our contact information.
  </p>

  



       <form className="max-w-md mx-auto space-y-5 bg-white p-6 rounded-xl shadow-md border border-gray-200">
  <h2 className="text-xl font-semibold text-gray-800 text-center">Contact Us</h2>

  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
      Name <span className="text-red-500">*</span>
    </label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="John Doe"
      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
      Email <span className="text-red-500">*</span>
    </label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="you@example.com"
      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={3}
      placeholder="Type your message..."
      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 text-white text-sm font-medium py-2 rounded-md hover:bg-blue-700 transition"
  >
    Send Message
  </button>
</form>
<div className="bg-blue-50 p-5 rounded-md border border-blue-100 shadow-sm space-y-2">
    <h3 className="text-lg font-semibold text-blue-800">Contact Information</h3>
    <p>📞 <span className="font-medium text-gray-700">Phone:</span> (123) 456-7890</p>
    <p>📧 <span className="font-medium text-gray-700">Email:</span> info@example.com</p>
    <p>📍 <span className="font-medium text-gray-700">Address:</span> 123 Main Street</p>
  </div>


      </div>
    </>
  )
}
