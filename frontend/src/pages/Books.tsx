import React, { useEffect, useState } from "react";
import axios from "axios";

interface BookData {
  title: string;
  coverImage: string;
  synopsis: string;
  purchaseLink: string;
}

const Books: React.FC = () => {
  const [books, setBooks] = useState<BookData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null); // Clear any previous errors
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");
        const response = await axios.get(`${apiBaseUrl}/api/books`);
        if (Array.isArray(response.data)) {
          setBooks(response.data);
        } else {
          throw new Error("Invalid data format received from API");
        }
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("Failed to load books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <main className="space-y-16">
      {/* Introduction / Author's Note */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">My Books</h1>
          <p className="text-neutral leading-relaxed max-w-3xl">
            Writing has been a powerful way for me to share insights, tell stories, and 
            illuminate paths toward personal growth. Each of my books is inspired by 
            the real-life transformations I’ve witnessed, the challenges clients have 
            faced, and the innate resilience I believe we all possess.
          </p>
          <p className="text-neutral leading-relaxed max-w-3xl mt-4">
            Whether you’re seeking a deep dive into self-discovery or practical tools to 
            enhance your day-to-day life, I hope these books offer inspiration, guidance, 
            and encouragement on your journey.
          </p>
        </div>
      </section>

      {/* Book Cards */}
      <section className="bg-neutral-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">Featured Books</h2>
          
          {/* Handle loading state */}
          {loading && (
            <p className="text-center text-neutral">Loading books...</p>
          )}

          {/* Handle error state */}
          {error && (
            <p className="text-center text-red-500">{error}</p>
          )}

          {!loading && !error && books.length > 0 && (
            <div className="grid gap-8 md:grid-cols-3">
              {books.map((book, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="mb-4 w-full h-auto rounded shadow-md"
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2">{book.title}</h3>
                  <p className="text-sm text-neutral mb-4">{book.synopsis}</p>
                  <a
                    href={book.purchaseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary-dark transition-colors inline-block"
                  >
                    Buy on Amazon
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Fallback when no books are available */}
          {!loading && !error && books.length === 0 && (
            <p className="text-center text-neutral">No books available at the moment.</p>
          )}
        </div>
      </section>

      {/* Reader Reviews & Endorsements */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary text-center mb-8">What Readers Are Saying</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <blockquote className="bg-neutral-light p-6 rounded-lg">
              <p className="text-neutral italic">
                “Asha’s writing feels like a warm conversation with a trusted friend. 
                After reading Embrace Your Journey, I felt empowered and understood.”
              </p>
              <footer className="mt-4 text-sm font-medium text-neutral-dark">— Reader A</footer>
            </blockquote>
            <blockquote className="bg-neutral-light p-6 rounded-lg">
              <p className="text-neutral italic">
                “Mindful Transitions helped me navigate a difficult career shift with grace and clarity.”
              </p>
              <footer className="mt-4 text-sm font-medium text-neutral-dark">— Reader B</footer>
            </blockquote>
            <blockquote className="bg-neutral-light p-6 rounded-lg">
              <p className="text-neutral italic">
                “The Path Within opened my eyes to the strength of my own intuition. Truly life-changing!”
              </p>
              <footer className="mt-4 text-sm font-medium text-neutral-dark">— Reader C</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Newsletter Sign-up or Preview */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold">Get a Free Chapter Preview</h2>
          <p className="max-w-2xl mx-auto text-neutral-light">
            Sign up for my newsletter and receive a free chapter from one of my latest books. 
            Stay updated on new releases, special events, and exclusive insights.
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
              Get Free Chapter
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Books;
