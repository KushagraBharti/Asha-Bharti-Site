// frontend/src/pages/Blog.tsx
import React from 'react';

const Blog: React.FC = () => (
  <main className="space-y-16">

    {/* Introduction to the Blog */}
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">My Blog</h1>
        <p className="text-neutral leading-relaxed max-w-3xl mx-auto">
          Dive into regular insights, practical tips, and personal reflections 
          on personal growth, career development, and mindful living. My blog 
          serves as a platform to explore new ideas, share success stories, 
          and offer guidance as you navigate your journey.
        </p>
      </div>
    </section>

    {/* Recent Posts Preview */}
    <section className="bg-neutral-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8 text-primary">Featured Posts</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Post 1 */}
          <article className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <img 
              src="https://via.placeholder.com/400x200.png?text=Blog+Post+1" 
              alt="Blog Post 1" 
              className="mb-4 w-full h-auto rounded"
            />
            <h3 className="font-semibold text-primary mb-2">Cultivating a Growth Mindset</h3>
            <p className="text-sm text-neutral mb-3">
              Learn strategies to shift your perspective, embrace challenges, and continuously evolve.
            </p>
            <a 
              href="https://medium.com/some-external-blog" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary font-medium underline"
            >
              Read on Medium
            </a>
          </article>

          {/* Post 2 */}
          <article className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <img 
              src="https://via.placeholder.com/400x200.png?text=Blog+Post+2" 
              alt="Blog Post 2" 
              className="mb-4 w-full h-auto rounded"
            />
            <h3 className="font-semibold text-primary mb-2">Overcoming Burnout</h3>
            <p className="text-sm text-neutral mb-3">
              Practical tips for regaining balance, energy, and motivation when life feels overwhelming.
            </p>
            <a 
              href="https://medium.com/some-external-blog" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary font-medium underline"
            >
              Read on Medium
            </a>
          </article>

          {/* Post 3 */}
          <article className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <img 
              src="https://via.placeholder.com/400x200.png?text=Blog+Post+3" 
              alt="Blog Post 3" 
              className="mb-4 w-full h-auto rounded"
            />
            <h3 className="font-semibold text-primary mb-2">Setting Intentional Goals</h3>
            <p className="text-sm text-neutral mb-3">
              Discover how to define goals aligned with your values and track your progress meaningfully.
            </p>
            <a 
              href="https://medium.com/some-external-blog" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary font-medium underline"
            >
              Read on Medium
            </a>
          </article>
        </div>

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

    {/* CTA to Follow / Subscribe */}
    <section className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl font-bold">Stay Updated</h2>
        <p className="max-w-2xl mx-auto text-neutral-light">
          Never miss a new post. Follow my Medium page or subscribe to my newsletter 
          for the latest insights, announcements, and tips delivered right to your inbox.
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

export default Blog;
