// frontend/src/pages/Books.tsx
import React from 'react';

const Books: React.FC = () => (
  <main className="space-y-16">

    {/* Introduction / Author's Note */}
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">My Books</h1>
        <p className="text-neutral leading-relaxed max-w-3xl">
          Writing has been a powerful way for me to share insights, tell stories, and 
          illuminate paths toward personal growth. Each of my books is inspired by 
          the real-life transformations I’ve witnessed, the challenges clients have 
          faced, and the innate resilience I believe we all possess.
        </p>
        <p className="text-neutral leading-relaxed max-w-3xl mt-4">
          Whether you’re seeking a deep dive into self-discovery or practical tools to 
          enhance your day-to-day life, I hope these books offer inspiration, guidance, 
          and encouragement on your journey.
        </p>
      </div>
    </section>

    {/* Book Cards */}
    <section className="bg-neutral-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8 text-primary">Featured Books</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Book 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <img 
              src="https://via.placeholder.com/200x300.png?text=Book+1+Cover" 
              alt="Book 1 Cover" 
              className="mb-4 w-full h-auto rounded shadow-md"
            />
            <h3 className="text-xl font-semibold text-primary mb-2">Embrace Your Journey</h3>
            <p className="text-sm text-neutral mb-4">
              A guide to understanding your inner potential, overcoming fears, and walking 
              confidently into your future. Perfect for those who feel stuck or unsure 
              about their next steps.
            </p>
            <a
              href="https://www.amazon.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary-dark transition-colors inline-block"
            >
              Buy on Amazon
            </a>
          </div>

          {/* Book 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <img 
              src="https://via.placeholder.com/200x300.png?text=Book+2+Cover" 
              alt="Book 2 Cover" 
              className="mb-4 w-full h-auto rounded shadow-md"
            />
            <h3 className="text-xl font-semibold text-primary mb-2">Mindful Transitions</h3>
            <p className="text-sm text-neutral mb-4">
              Focused on navigating life changes with grace and resilience, this book provides 
              exercises, reflections, and techniques to move through uncertainty while 
              maintaining inner calm.
            </p>
            <a
              href="https://www.amazon.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary-dark transition-colors inline-block"
            >
              Buy on Amazon
            </a>
          </div>

          {/* Book 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <img 
              src="https://via.placeholder.com/200x300.png?text=Book+3+Cover" 
              alt="Book 3 Cover" 
              className="mb-4 w-full h-auto rounded shadow-md"
            />
            <h3 className="text-xl font-semibold text-primary mb-2">The Path Within</h3>
            <p className="text-sm text-neutral mb-4">
              Delve into the realms of self-awareness and intuition. Discover techniques 
              to quiet external noise, reconnect with your inner voice, and uncover the 
              wisdom you hold within.
            </p>
            <a
              href="https://www.amazon.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary-dark transition-colors inline-block"
            >
              Buy on Amazon
            </a>
          </div>

        </div>
      </div>
    </section>

    {/* Reader Reviews & Endorsements */}
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary text-center mb-8">What Readers Are Saying</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <blockquote className="bg-neutral-light p-6 rounded-lg">
            <p className="text-neutral italic">
              “Asha’s writing feels like a warm conversation with a trusted friend. 
              After reading Embrace Your Journey, I felt empowered and understood.”
            </p>
            <footer className="mt-4 text-sm font-medium text-neutral-dark">— Reader A</footer>
          </blockquote>
          <blockquote className="bg-neutral-light p-6 rounded-lg">
            <p className="text-neutral italic">
              “Mindful Transitions helped me navigate a difficult career shift with grace and clarity.”
            </p>
            <footer className="mt-4 text-sm font-medium text-neutral-dark">— Reader B</footer>
          </blockquote>
          <blockquote className="bg-neutral-light p-6 rounded-lg">
            <p className="text-neutral italic">
              “The Path Within opened my eyes to the strength of my own intuition. Truly life-changing!”
            </p>
            <footer className="mt-4 text-sm font-medium text-neutral-dark">— Reader C</footer>
          </blockquote>
        </div>
      </div>
    </section>

    {/* Final CTA Section - Newsletter Sign-up or Preview */}
    <section className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl font-bold">Get a Free Chapter Preview</h2>
        <p className="max-w-2xl mx-auto text-neutral-light">
          Sign up for my newsletter and receive a free chapter from one of my latest books. 
          Stay updated on new releases, special events, and exclusive insights.
        </p>
        <form className="max-w-md mx-auto flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 items-center">
          <input 
            type="email" 
            placeholder="Your Email Address"
            className="w-full md:flex-grow px-4 py-2 rounded-md text-neutral-dark border border-neutral-light focus:outline-none focus:border-primary"
          />
          <button 
            type="submit"
            className="bg-white text-primary px-6 py-2 rounded-md font-medium hover:bg-primary-light transition-colors"
          >
            Get Free Chapter
          </button>
        </form>
      </div>
    </section>

  </main>
);

export default Books;
