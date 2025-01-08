// frontend/src/pages/About.tsx
import React from 'react';
import Testimonial from "../components/Testimonials";

const About: React.FC = () => {
  return (
    <main className="space-y-16">

      {/* Banner / Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://via.placeholder.com/500x400.png?text=Asha+Bharti" 
              alt="Asha Bharti Portrait" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Meet Asha Bharti
            </h1>
            <p className="text-neutral">
              Dedicated to guiding individuals towards personal growth, Asha 
              Bharti has devoted her life to helping others find clarity, 
              purpose, and lasting fulfillment. Through compassionate 
              coaching and a holistic approach, she empowers clients to 
              unlock their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="bg-neutral-light py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl font-bold text-primary">My Journey</h2>
          <p className="text-neutral leading-relaxed">
            From a young age, I felt drawn to understanding the human condition—what drives us, 
            what holds us back, and how we can thrive. My path led me through studies in psychology, 
            mindfulness training, and wellness education. Over the years, I’ve worked in various 
            roles—teacher, counselor, mentor—each experience honing my skills and shaping my unique 
            approach to life coaching.
          </p>
          <p className="text-neutral leading-relaxed">
            Through personal struggles and triumphs, I learned the power of resilience and 
            self-compassion. It’s that lived experience that fuels my dedication to help you 
            navigate your own challenges with greater ease and understanding.
          </p>
        </div>
      </section>

      {/* Philosophy & Approach Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl font-bold text-primary">My Philosophy & Approach</h2>
          <div className="space-y-4 text-neutral leading-relaxed">
            <p>
              At the core of my coaching is a belief that every individual possesses a wellspring 
              of inner wisdom. My role is not to give you all the answers but to help you uncover 
              them, guiding you with a blend of active listening, compassionate inquiry, and practical tools.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Holistic Well-Being:</strong> True transformation involves nurturing your mind, body, and spirit.</li>
              <li><strong>Evidence-Based Strategies:</strong> I integrate research-backed methods from positive psychology and mindfulness.</li>
              <li><strong>Tailored Guidance:</strong> Every session and program is customized to your unique goals, strengths, and circumstances.</li>
            </ul>
            <p>
              My approach encourages you to develop resilience, embrace vulnerability, and trust 
              your intuition. By working together, we co-create a supportive environment where you 
              can experiment, reflect, and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials & Experience Section */}
      <section className="bg-neutral-light py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-2xl font-bold text-primary">Credentials & Experience</h2>
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0 text-neutral">
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-xl font-semibold text-primary">Education & Training</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Masters in Counseling Psychology (XYZ University)</li>
                <li>Certified Professional Coach (ICF Accredited Program)</li>
                <li>Mindfulness-Based Stress Reduction (MBSR) Practitioner</li>
              </ul>
            </div>
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-xl font-semibold text-primary">Notable Experience</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>10+ years in coaching and mentoring roles</li>
                <li>Speaker at Wellness & Leadership Summits</li>
                <li>Author of 3 self-development books</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Video Introduction Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <h2 className="text-2xl font-bold text-primary">A Message from Asha</h2>
          <p className="text-neutral leading-relaxed max-w-2xl mx-auto">
            For a more personal connection, watch this short video where I share my approach and 
            invite you to start your journey toward greater fulfillment.
          </p>
          {/* Placeholder Video Embed */}
          <div className="relative w-full h-0 pb-56" style={{paddingBottom: '56.25%'}}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Asha Bharti Introduction"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonial
      title="Words from Clients"
      apiEndpoint="/api/testimonials/about"
    />

    </main>
  );
};

export default About;
