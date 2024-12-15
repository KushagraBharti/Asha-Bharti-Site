// frontend/src/pages/SchedulingAndContact.tsx
import React from 'react';
//import { Link } from 'react-router-dom';

const SchedulingAndContact: React.FC = () => (
  <main className="space-y-16">

    {/* Hero / Announcement Banner */}
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Schedule Your Free 30-Minute Consultation</h1>
        <p className="text-neutral leading-relaxed max-w-3xl mx-auto">
          Ready to take the next step? Book a call to discuss your goals, clarify your challenges, 
          and see if we’re a good fit for one-on-one coaching. Prefer to reach out differently? Scroll down 
          to send a message and let’s connect in the way that’s most comfortable for you.
        </p>
      </div>
    </section>

    {/* Schedule a Call Section */}
    <section className="bg-neutral-light py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-2xl font-bold text-primary text-center">Book a Discovery Call</h2>
        <p className="text-neutral leading-relaxed text-center max-w-2xl mx-auto">
          In this complimentary session, we’ll discuss your current situation, explore your goals, 
          and outline potential next steps. It’s a no-obligation call to help you gain clarity 
          on how coaching might support your journey.
        </p>

        {/* Placeholder for a scheduling widget (e.g. Calendly). Replace with actual embed or link. */}
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <p className="text-sm text-neutral mb-4">
            Select a date and time for your free consultation:
          </p>
          <a
            href="https://calendly.com/your-calendly-link" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary-dark transition-colors inline-block"
          >
            View Available Times
          </a>
        </div>

        {/* What Happens Next & FAQ */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">What to Expect After Scheduling</h3>
            <p className="text-neutral leading-relaxed">
              Once you’ve chosen a time, you’ll receive a confirmation email with a meeting link 
              (if virtual) or location details (if in-person). Feel free to bring any questions, 
              concerns, or notes about what you hope to achieve.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary">FAQs About the Call</h3>
            <div>
              <h4 className="font-semibold text-primary">How long is the discovery call?</h4>
              <p className="text-neutral">Each call lasts about 30 minutes, giving us time to understand your needs and discuss next steps.</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary">What if I need to reschedule?</h4>
              <p className="text-neutral">No problem! Use the link in your confirmation email to pick another time that suits you.</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary">Is there any cost or obligation?</h4>
              <p className="text-neutral">No, the discovery call is free. It’s an opportunity for us to see if we’re a good fit for further coaching sessions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Form Section */}
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-2xl font-bold text-primary text-center">Get in Touch</h2>
        <p className="text-neutral leading-relaxed max-w-2xl mx-auto text-center">
          Have a question, media inquiry, or want to explore a partnership? Use the form below 
          to send me a message. I typically respond within 2-3 business days.
        </p>

        <form className="bg-neutral-light p-6 rounded-lg shadow space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-1">Name</label>
            <input 
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md text-neutral-dark border border-neutral-light focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-1">Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md text-neutral-dark border border-neutral-light focus:outline-none focus:border-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="inquiryType" className="block text-sm font-medium text-neutral-dark mb-1">Inquiry Type</label>
            <select
              id="inquiryType"
              name="inquiryType"
              className="w-full px-4 py-2 rounded-md text-neutral-dark border border-neutral-light focus:outline-none focus:border-primary"
            >
              <option value="general">General Question</option>
              <option value="media">Media Inquiry</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-1">Message</label>
            <textarea 
              id="message"
              name="message"
              placeholder="How can I help you?"
              className="w-full px-4 py-2 rounded-md text-neutral-dark border border-neutral-light focus:outline-none focus:border-primary h-32"
              required
            ></textarea>
          </div>
          <button 
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-primary-dark transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Additional Contact Info */}
        <div className="text-center text-neutral">
          <p>If you prefer, you can also email me directly at <a href="mailto:asha@example.com" className="text-primary underline">asha@example.com</a>.</p>
        </div>
      </div>
    </section>

    {/* Social Media CTA */}
    <section className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl font-bold">Connect with Me</h2>
        <p className="max-w-2xl mx-auto text-neutral-light">
          Stay in touch and keep up with my latest insights, events, and coaching tips. Follow me on social media:
        </p>
        <div className="flex justify-center space-x-4">
          {/* Replace # with actual social links */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">Facebook</a>
        </div>
      </div>
    </section>

  </main>
);

export default SchedulingAndContact;
