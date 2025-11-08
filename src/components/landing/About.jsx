import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <section className="w-full bg-linear-to-b from-black via-gray-900 to-black text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: image with transparent-background-friendly container. The img tries /vahid.png and falls back to /vahid.jpeg */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-2xl overflow-visible">
              {/* decorative blurred background */}
              <div className="absolute -inset-6 rounded-2xl bg-linear-to-br from-pink-500/30 to-indigo-500/20 blur-3xl opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-full h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 flex items-center justify-center">
                <Image
                  src="/vahid.jpeg"
                  alt="Vahid Momin"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.src = '/vahid.jpeg';
                  }}
                />
                </div>
              </div>
            </div>
          </div>

          {/* Right: about me text */}
          <div className="prose prose-invert max-w-none">
            <h2 className="text-4xl font-extrabold">About Me</h2>
            <p className="text-gray-300 mt-4">
              I'm Vahid — a fullstack designer who loves building beautiful and usable interfaces. I combine design thinking with practical engineering to deliver polished products. My work focuses on clean UI, strong UX, and performance.
            </p>

            <h3 className="mt-6 text-2xl font-semibold">What I do</h3>
            <ul className="mt-3 list-disc list-inside text-gray-300">
              <li>Design interactive user interfaces and prototypes</li>
              <li>Build fullstack apps with React / Next.js</li>
              <li>Implement responsive, accessible UI systems</li>
            </ul>

            <div className="mt-6">
              <a href="#" className="inline-block px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-full font-semibold">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About