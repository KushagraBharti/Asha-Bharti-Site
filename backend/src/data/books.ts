export interface BookData {
    title: string;
    coverImage: string;
    synopsis: string;
    purchaseLink: string;
  }
  
  export const booksData: BookData[] = [
    {
      title: "Embrace Yourw Journey",
      coverImage: "https://via.placeholder.com/200x300.png?text=Book+1+Cover",
      synopsis: "A guide to understanding your inner potential, overcoming fears, and walking confidently into your future.",
      purchaseLink: "https://www.amazon.com"
    },
    {
      title: "Mindful Transitions",
      coverImage: "https://via.placeholder.com/200x300.png?text=Book+2+Cover",
      synopsis: "Focus on navigating life changes with grace and resilience. Exercises, reflections, and techniques to move through uncertainty.",
      purchaseLink: "https://www.amazon.com"
    },
    {
      title: "The Path Within",
      coverImage: "https://via.placeholder.com/200x300.png?text=Book+3+Cover",
      synopsis: "Delve into self-awareness and intuition. Discover techniques to quiet external noise and uncover inner wisdom.",
      purchaseLink: "https://www.amazon.com"
    }
  ];
  