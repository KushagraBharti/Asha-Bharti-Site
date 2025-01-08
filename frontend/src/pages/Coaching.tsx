import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Testimonial from "../components/Testimonials";

interface CoachingServiceData {
  title: string;
  summary: string;
  features: string[];
  link?: string;
}

const Coaching: React.FC = () => {
  const [coachingServices, setCoachingServices] = useState<CoachingServiceData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoachingServices = async () => {
      try {
        setLoading(true);
        setError(null); // Clear previous errors
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");
        const response = await axios.get(`${apiBaseUrl}/api/coaching-services`);
        if (Array.isArray(response.data)) {
          setCoachingServices(response.data);
        } else {
          throw new Error("Invalid data format received from API");
        }
      } catch (err) {
        console.error("Error fetching coaching services:", err);
        setError("Failed to load coaching services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCoachingServices();
  }, []);

  return (
    <main className="space-y-16">
      {/* Introduction / Overview Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Coaching Services Tailored to You
            </h1>
            <p className="text-neutral leading-relaxed text-center">
              My coaching practice is designed to empower you with the clarity, tools, 
              and confidence you need to overcome challenges, set meaningful goals, 
              and create lasting change. Whether you're looking to advance your career, 
              improve work-life balance, or cultivate greater self-awareness, I'm here 
              to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-neutral-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">Coaching Packages</h2>

          {/* Loading State */}
          {loading && <p className="text-center text-neutral">Loading coaching services...</p>}

          {/* Error State */}
          {error && <p className="text-center text-red-500">{error}</p>}

          {!loading && !error && coachingServices.length > 0 && (
            <div className="grid gap-8 md:grid-cols-3">
              {coachingServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
                  <p className="text-sm text-neutral mb-3">{service.summary}</p>
                  <ul className="list-disc list-inside text-sm text-neutral space-y-1 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  {service.link && (
                    <Link to={service.link} className="text-primary font-medium underline inline-block">
                      Learn More
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* No Data Fallback */}
          {!loading && !error && coachingServices.length === 0 && (
            <p className="text-center text-neutral">No coaching services available at the moment.</p>
          )}
        </div>
      </section>

      {/* Session Format & Outcomes */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl font-bold text-primary">What to Expect</h2>
          <div className="space-y-4 text-neutral leading-relaxed">
            <p>
              Each coaching engagement begins with a free discovery call, where we clarify 
              your aspirations and determine if we’re a good fit. Once we begin, sessions 
              occur weekly (or bi-weekly, based on your preference) via video conference. 
              Between sessions, you’ll have access to worksheets, journaling prompts, and 
              email support to maintain momentum.
            </p>
            <h3 className="text-xl font-semibold text-primary">Expected Outcomes</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Greater clarity in personal and professional goals</li>
              <li>Improved self-confidence and resilience</li>
              <li>Enhanced stress management and work-life balance</li>
              <li>Overcoming self-limiting beliefs and patterns</li>
              <li>Practical strategies for long-term growth and fulfillment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials / Case Studies */}
      <Testimonial
      title="Client Success Stories"
      apiEndpoint="/api/testimonials/coaching"
    />

      {/* Pricing & Packages */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <h2 className="text-2xl font-bold text-primary">Pricing & Packages</h2>
          <p className="text-neutral leading-relaxed max-w-2xl mx-auto">
            I offer flexible packages to suit your needs and budget. While some clients prefer a 
            single session to gain clarity, others benefit from a 3- or 6-month coaching program 
            to achieve lasting change. Contact me to discuss which option is right for you.
          </p>
          <div className="grid gap-8 md:grid-cols-3 mt-8">
            {/* Example Pricing Cards */}
            <div className="bg-neutral-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-primary mb-2">Starter Session</h3>
              <p className="text-sm text-neutral mb-4">A one-off 60-minute session for clarity and next steps.</p>
              <p className="text-2xl font-bold text-primary mb-4">$150</p>
              <Link to="/scheduling" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors inline-block">
                Book Now
              </Link>
            </div>
            <div className="bg-neutral-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-primary mb-2">3-Month Program</h3>
              <p className="text-sm text-neutral mb-4">Bi-weekly sessions, email support, and tailored action plans.</p>
              <p className="text-2xl font-bold text-primary mb-4">$1200</p>
              <Link to="/scheduling" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors inline-block">
                Get Started
              </Link>
            </div>
            <div className="bg-neutral-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-primary mb-2">6-Month Program</h3>
              <p className="text-sm text-neutral mb-4">Weekly sessions, ongoing support, and deep transformation.</p>
              <p className="text-2xl font-bold text-primary mb-4">$2200</p>
              <Link to="/scheduling" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors inline-block">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-neutral-light py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl font-bold text-primary text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 text-neutral">
            <div>
              <h3 className="font-semibold text-primary">How do I know if coaching is right for me?</h3>
              <p className="leading-relaxed">
                If you feel stuck, want clarity on your next steps, or seek personal growth and 
                accountability, coaching can provide the support you need.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Can sessions be conducted remotely?</h3>
              <p className="leading-relaxed">
                Absolutely. I work with clients worldwide via video conferencing, ensuring a 
                flexible and accessible experience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">What if I need to reschedule a session?</h3>
              <p className="leading-relaxed">
                Life happens! Simply reach out at least 24 hours before your appointment, and 
                we’ll find a new time that suits us both.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary">Do you offer refunds?</h3>
              <p className="leading-relaxed">
                Refunds are handled on a case-by-case basis. I’m committed to your satisfaction 
                and will do my best to accommodate your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Start Your Coaching Journey?</h2>
          <p className="max-w-2xl mx-auto text-neutral-light">
            Take the first step towards unlocking your potential. Schedule a free discovery call 
            to learn more about how coaching can help you achieve your goals.
          </p>
          <Link 
            to="/scheduling" 
            className="inline-block bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-primary-light transition-colors"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Coaching;
