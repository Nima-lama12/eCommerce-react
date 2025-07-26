import { Link } from "react-router"

function Hero() {
  return (
    <>
    <section className="-mt-25 text-center py-10 px-4 flex items-center justify-center h-screen bg-gradient-to-b from-blue-400 to-teal-400 ">
    <div className="flex justify-center align-middle">
        <div>
      <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
        Welcome to FakeStore Where Everything is Fake
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Discover high-quality products at the best prices. We ship nationwide!
      </p>
      <button
      className="border px-5 py-4 bg-blue-500 text-white rounded-3xl">
        Scrool Down to Buy Now
      </button>
      </div>
    </div>
    </section>
    </>
    )
}

export default Hero