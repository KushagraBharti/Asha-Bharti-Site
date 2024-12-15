import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main className="space-y-16">

      {/* Announcement Banner */}
      <section className="bg-accent text-neutral-dark py-2 text-center text-sm font-medium">
        <p>Join my next seminar: Early bird discount until May 15!</p>
      </section>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center md:space-x-8">
          {/* Placeholder Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://via.placeholder.com/500x400.png?text=Asha+Bharti" 
              alt="Asha Bharti Portrait" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Empowering You to Embrace Your Potential
            </h1>
            <p className="text-neutral">
              Discover personalized coaching, transformative workshops, and 
              inspiring content designed to help you gain clarity, confidence, 
              and direction in your personal and professional life.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link 
                to="/scheduling" 
                className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
              >
                Schedule a Call
              </Link>
              <Link 
                to="/coaching" 
                className="inline-block bg-white border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary-light hover:text-white transition-colors"
              >
                Explore Coaching Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-neutral-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">How I Can Help</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Service Cards */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-2">1-on-1 Coaching</h3>
              <p className="text-sm text-neutral">
                Personalized sessions tailored to your goals, helping you find clarity and confidence.
              </p>
              <Link to="/coaching" className="text-primary font-medium underline mt-3 inline-block">
                Learn More
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-2">Group Sessions</h3>
              <p className="text-sm text-neutral">
                Join a supportive community working together to overcome obstacles and achieve growth.
              </p>
              <Link to="/coaching" className="text-primary font-medium underline mt-3 inline-block">
                Learn More
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-2">Workshops</h3>
              <p className="text-sm text-neutral">
                Interactive workshops and seminars to gain insights, tools, and strategies for success.
              </p>
              <Link to="/workshops" className="text-primary font-medium underline mt-3 inline-block">
                View Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (Optional) */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8">A Track Record of Impact</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-4xl font-extrabold text-primary">500+</p>
              <p className="text-neutral mt-2">Clients Coached</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-primary">10</p>
              <p className="text-neutral mt-2">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-primary">20+</p>
              <p className="text-neutral mt-2">Workshops Hosted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-8">What Clients Are Saying</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Placeholder testimonials */}
            <blockquote className="bg-neutral-light p-6 rounded-lg">
              <p className="text-neutral italic">
                “Asha helped me realize my true potential and gave me the confidence to pursue my dreams.”
              </p>
              <footer className="mt-4 text-sm font-medium text-neutral-dark">— Client A</footer>
            </blockquote>
            <blockquote className="bg-neutral-light p-6 rounded-lg">
              <p className="text-neutral italic">
                “Her guidance and support transformed my career path. I’m forever grateful.”
              </p>
              <footer className="mt-4 text-sm font-medium text-neutral-dark">— Client B</footer>
            </blockquote>
            <blockquote className="bg-neutral-light p-6 rounded-lg">
              <p className="text-neutral italic">
                “The workshops were enlightening, practical, and truly inspiring!”
              </p>
              <footer className="mt-4 text-sm font-medium text-neutral-dark">— Client C</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="bg-neutral-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-8">From the Blog</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Placeholder blog cards */}
            <article className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <img 
                src="https://via.placeholder.com/400x200.png?text=Blog+Post+1" 
                alt="Blog Post 1" 
                className="mb-4 w-full h-auto rounded"
              />
              <h3 className="font-semibold text-primary mb-2">Finding Inner Peace in a Busy World</h3>
              <p className="text-sm text-neutral mb-3">
                Simple techniques to stay grounded and focused amidst life’s distractions.
              </p>
              <a 
                href="https://medium.com/some-external-blog" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary font-medium underline"
              >
                Read More
              </a>
            </article>
            <article className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <img 
                src="https://via.placeholder.com/400x200.png?text=Blog+Post+2" 
                alt="Blog Post 2" 
                className="mb-4 w-full h-auto rounded"
              />
              <h3 className="font-semibold text-primary mb-2">Overcoming Imposter Syndrome</h3>
              <p className="text-sm text-neutral mb-3">
                Strategies to recognize and combat the self-doubt that holds you back.
              </p>
              <a 
                href="https://medium.com/some-external-blog" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary font-medium underline"
              >
                Read More
              </a>
            </article>
            <article className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <img 
                src="https://via.placeholder.com/400x200.png?text=Blog+Post+3" 
                alt="Blog Post 3" 
                className="mb-4 w-full h-auto rounded"
              />
              <h3 className="font-semibold text-primary mb-2">Setting Clear Goals for Growth</h3>
              <p className="text-sm text-neutral mb-3">
                Learn how to define and pursue goals that truly align with your values.
              </p>
              <a 
                href="https://medium.com/some-external-blog" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary font-medium underline"
              >
                Read More
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Begin Your Journey?</h2>
          <p className="max-w-2xl mx-auto text-neutral-light">
            Take the first step towards embracing your potential. Schedule a discovery call today.
          </p>
          <Link 
            to="/scheduling" 
            className="inline-block bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-primary-light transition-colors"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>

    </main>
  );
};

export default Home;
