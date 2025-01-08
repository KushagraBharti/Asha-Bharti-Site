import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Testimonial from "../components/Testimonials";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const Home: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        setError(null); // Clear previous errors
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");
        const response = await axios.get(`${apiBaseUrl}/api/blogs`);
        if (Array.isArray(response.data)) {
          setBlogPosts(response.data);
        } else {
          throw new Error("Invalid data format received from API");
        }
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

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
      <Testimonial
      title="What Clients Are Saying"
      apiEndpoint="/api/testimonials/home"
    />

      {/* Recent Posts Preview */}
      <section className="bg-neutral-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">Featured Posts</h2>

          {/* Handle loading state */}
          {loading && (
            <p className="text-center text-neutral">Loading blog posts...</p>
          )}

          {/* Handle error state */}
          {error && (
            <p className="text-center text-red-500">{error}</p>
          )}

          {!loading && !error && blogPosts.length > 0 && (
            <div className="grid gap-8 md:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="mb-4 w-full h-auto rounded"
                  />
                  <h3 className="font-semibold text-primary mb-2">{post.title}</h3>
                  <p className="text-sm text-neutral mb-3">{post.description}</p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium underline"
                  >
                    Read More
                  </a>
                </article>
              ))}
            </div>
          )}

          {/* Fallback when no blog posts are available */}
          {!loading && !error && blogPosts.length === 0 && (
            <p className="text-center text-neutral">No blog posts available at the moment.</p>
          )}

          {/* Read More Button */}
          <div className="text-center mt-12">
            <a
              href="https://medium.com/some-external-blog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors"
            >
              Read More on Medium
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
