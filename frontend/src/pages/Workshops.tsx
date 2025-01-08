import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Testimonial from "../components/Testimonials";

interface WorkshopData {
  title: string;
  date: string; // e.g., "March 15, 2025"
  format: string; // e.g., "Online Webinar" or "In-Person"
  description: string;
  registerLink: string;
}

const Workshops: React.FC = () => {
  const [workshops, setWorkshops] = useState<WorkshopData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        setLoading(true);
        setError(null);
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");
        const response = await axios.get(`${apiBaseUrl}/api/workshops`);
        if (Array.isArray(response.data)) {
          setWorkshops(response.data);
        } else {
          throw new Error("Invalid data format received from API");
        }
      } catch (err) {
        console.error("Error fetching workshops:", err);
        setError("Failed to load workshops. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshops();
  }, []);

  return (
    <main className="space-y-16">
      {/* Introduction / Upcoming Events */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Workshops & Seminars
          </h1>
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

          {/* Loading State */}
          {loading && <p className="text-center text-neutral">Loading workshops...</p>}

          {/* Error State */}
          {error && <p className="text-center text-red-500">{error}</p>}

          {!loading && !error && workshops.length > 0 && (
            <div className="grid gap-8 md:grid-cols-3">
              {workshops.map((workshop, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">{workshop.title}</h3>
                  <p className="text-sm text-neutral mb-3">
                    Date: {workshop.date} • Format: {workshop.format}
                    <br />
                    {workshop.description}
                  </p>
                  <Link
                    to={workshop.registerLink}
                    className="bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary-dark transition-colors inline-block"
                  >
                    Register Now
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* No Data Fallback */}
          {!loading && !error && workshops.length === 0 && (
            <p className="text-center text-neutral">No workshops available at the moment.</p>
          )}
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
    <Testimonial
      title="What Participants Are Saying"
      apiEndpoint="/api/testimonials/workshops"
    />

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
};

export default Workshops;
