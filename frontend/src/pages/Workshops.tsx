// frontend/src/pages/Workshops.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Workshops: React.FC = () => (
  <main className="space-y-16">

    {/* Introduction / Upcoming Events */}
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Workshops & Seminars</h1>
        <p className="text-neutral leading-relaxed max-w-3xl mx-auto">
          Join me for interactive workshops, insightful seminars, and transformative 
          events designed to empower you with practical tools and strategies. Whether 
          you’re looking to boost your career, improve personal well-being, or 
          enhance leadership skills, these sessions provide an immersive, hands-on 
          learning experience.
        </p>
      </div>
    </section>

    {/* Upcoming Events */}
    <section className="bg-neutral-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8 text-primary">Upcoming Events</h2>
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Workshop 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-2">Finding Your True North</h3>
            <p className="text-sm text-neutral mb-3">
              Date: March 15, 2025 • Format: Online Webinar<br/>
              Discover your core values, define your purpose, and align your actions 
              with what matters most.
            </p>
            <Link 
              to="/scheduling" 
              className="bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary-dark transition-colors inline-block"
            >
              Register Now
            </Link>
          </div>

          {/* Workshop 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-2">Stress to Serenity</h3>
            <p className="text-sm text-neutral mb-3">
              Date: April 10, 2025 • Format: In-Person (NYC)<br/>
              Learn mindfulness techniques, breathwork, and practical tools to 
              reduce stress and increase resilience.
            </p>
            <Link 
              to="/scheduling" 
              className="bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary-dark transition-colors inline-block"
            >
              Register Now
            </Link>
          </div>

          {/* Workshop 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-2">Career Confidence Booster</h3>
            <p className="text-sm text-neutral mb-3">
              Date: May 20, 2025 • Format: Online Masterclass<br/>
              Gain clarity on your career goals, enhance your personal brand, 
              and cultivate the confidence to excel in your field.
            </p>
            <Link 
              to="/scheduling" 
              className="bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary-dark transition-colors inline-block"
            >
              Register Now
            </Link>
          </div>

        </div>
      </div>
    </section>

    {/* Past Events & Highlights */}
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary text-center mb-8">Past Highlights</h2>
        <div className="grid gap-8 md:grid-cols-3">

          <article className="bg-neutral-light p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-2">Mindful Leadership Summit (2024)</h3>
            <p className="text-sm text-neutral">
              A sold-out event where participants learned how to lead with empathy, 
              clarity, and resilience. Many attendees reported feeling more empowered 
              and focused in their leadership roles.
            </p>
          </article>

          <article className="bg-neutral-light p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-2">Resilience Retreat (2023)</h3>
            <p className="text-sm text-neutral">
              An immersive weekend retreat in the mountains, focusing on stress reduction, 
              self-care, and deep personal reflection. Guests left feeling rejuvenated 
              and connected to themselves.
            </p>
          </article>

          <article className="bg-neutral-light p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-2">Career Reinvention Workshop (2022)</h3>
            <p className="text-sm text-neutral">
              Guided attendees through a process of redefining career goals, building a personal 
              brand, and navigating transitions. Positive feedback praised the actionable 
              insights and supportive community.
            </p>
          </article>

        </div>
      </div>
    </section>

    {/* Testimonials from Past Participants */}
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary text-center mb-8">What Participants Are Saying</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <blockquote className="bg-neutral-light p-6 rounded-lg">
            <p className="text-neutral italic">
              “Asha’s Stress to Serenity workshop taught me practical tools that I still use daily.”
            </p>
            <footer className="mt-4 text-sm font-medium text-neutral-dark">— Participant A</footer>
          </blockquote>
          <blockquote className="bg-neutral-light p-6 rounded-lg">
            <p className="text-neutral italic">
              “I left the retreat feeling grounded, re-energized, and inspired.”
            </p>
            <footer className="mt-4 text-sm font-medium text-neutral-dark">— Participant B</footer>
          </blockquote>
          <blockquote className="bg-neutral-light p-6 rounded-lg">
            <p className="text-neutral italic">
              “The Career Confidence Booster session gave me the clarity and push I needed to pivot successfully.”
            </p>
            <footer className="mt-4 text-sm font-medium text-neutral-dark">— Participant C</footer>
          </blockquote>
        </div>
      </div>
    </section>

    {/* FAQs */}
    <section className="py-12 bg-neutral-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-2xl font-bold text-primary text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 text-neutral">
          <div>
            <h3 className="font-semibold text-primary">Are these workshops suitable for beginners?</h3>
            <p className="leading-relaxed">
              Absolutely. Each event is designed to accommodate individuals at various stages 
              of their personal or professional journey.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">Can I attend online if I’m not local?</h3>
            <p className="leading-relaxed">
              Yes! Many workshops are offered online. Check the event details for format and 
              venue information.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-primary">What is the refund or cancellation policy?</h3>
            <p className="leading-relaxed">
              Cancellations made at least 48 hours before the event may be eligible for a refund 
              or credit. See the specific event page for details.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Subscribe for Event Alerts */}
    <section className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl font-bold">Don’t Miss a Future Event</h2>
        <p className="max-w-2xl mx-auto text-neutral-light">
          Stay informed about upcoming workshops, seminars, and special events. Subscribe 
          to receive timely updates and early-bird discounts.
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
            Subscribe
          </button>
        </form>
      </div>
    </section>

  </main>
);

export default Workshops;
