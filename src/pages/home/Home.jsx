import React from 'react'

function Home() {
  return (
    <>
    <div>
      <section className="text-center py-10 px-4">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-4">
        Welcome to FakeStore Where Everything is Fake
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Discover high-quality products at the best prices. We ship nationwide!
      </p>
      <a
        href="/products"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Shop Now
      </a>
    </section>
    </div>
    </>
  )
}

export default Home
