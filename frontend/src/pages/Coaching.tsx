// frontend/src/pages/Coaching.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Coaching: React.FC = () => {
  return (
    <main className="space-y-16">

      {/* Introduction / Overview Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Coaching Services Tailored to You
          </h1>
          <p className="text-neutral leading-relaxed max-w-3xl">
            My coaching practice is designed to empower you with the clarity, tools, 
            and confidence you need to overcome challenges, set meaningful goals, 
            and create lasting change. Whether you’re looking to advance your career, 
            improve work-life balance, or cultivate greater self-awareness, I’m here 
            to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-neutral-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">Coaching Packages</h2>
          <div className="grid gap-8 md:grid-cols-3">
            
            {/* One-on-One Coaching */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-2">One-on-One Coaching</h3>
              <p className="text-sm text-neutral mb-3">
                Personalized, private sessions focused on your unique goals and challenges.
              </p>
              <ul className="list-disc list-inside text-sm text-neutral space-y-1 mb-4">
                <li>Weekly 60-minute sessions</li>
                <li>Customized action plans</li>
                <li>Email support between sessions</li>
              </ul>
              <Link to="/scheduling" className="text-primary font-medium underline inline-block">
                Learn More
              </Link>
            </div>

            {/* Career Transition Coaching */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-2">Career Transition Coaching</h3>
              <p className="text-sm text-neutral mb-3">
                Guidance to help you navigate career changes, find new opportunities, and achieve fulfillment.
              </p>
              <ul className="list-disc list-inside text-sm text-neutral space-y-1 mb-4">
                <li>Clarity on career direction</li>
                <li>Resume and interview prep</li>
                <li>Networking and personal branding</li>
              </ul>
              <Link to="/scheduling" className="text-primary font-medium underline inline-block">
                Learn More
              </Link>
            </div>

            {/* Stress Management & Well-Being */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-2">Stress Management & Well-Being</h3>
              <p className="text-sm text-neutral mb-3">
                Techniques to reduce anxiety, build resilience, and cultivate a balanced lifestyle.
              </p>
              <ul className="list-disc list-inside text-sm text-neutral space-y-1 mb-4">
                <li>Mindfulness-based practices</li>
                <li>Work-life harmony strategies</li>
                <li>Customized stress reduction plan</li>
              </ul>
              <Link to="/scheduling" className="text-primary font-medium underline inline-block">
                Learn More
              </Link>
            </div>

          </div>
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
      <section className="bg-neutral-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-8">Client Success Stories</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <blockquote className="bg-white p-6 rounded-lg shadow">
              <p className="text-neutral italic">
                “Working with Asha revolutionized my approach to career planning. I landed a new job and feel more aligned than ever.”
              </p>
              <footer className="mt-4 text-sm font-medium text-neutral-dark">— Client G</footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow">
              <p className="text-neutral italic">
                “I’ve learned how to set boundaries and manage stress in a way that supports my well-being.”
              </p>
              <footer className="mt-4 text-sm font-medium text-neutral-dark">— Client H</footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow">
              <p className="text-neutral italic">
                “Asha’s guidance helped me uncover confidence I never knew I had. I’m now pursuing my passions fearlessly.”
              </p>
              <footer className="mt-4 text-sm font-medium text-neutral-dark">— Client I</footer>
            </blockquote>
          </div>
        </div>
      </section>

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
