import React, { useEffect, useState } from "react";
import axios from "axios";

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  externalLink: string;
}

const Blog: React.FC = () => {
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

      {/* Blog Cards */}
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
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded shadow-md"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/400x200?text=Blog+Post';
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{post.title}</h3>
                  <p className="text-sm text-neutral mb-4">{post.excerpt}</p>
                  <button
                    onClick={() => {
                      const url = post.externalLink;
                      if (url) {
                        window.open(url, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className="bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary-dark transition-colors cursor-pointer"
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Fallback when no blog posts are available */}
          {!loading && !error && blogPosts.length === 0 && (
            <p className="text-center text-neutral">No blog posts available at the moment.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Blog;
