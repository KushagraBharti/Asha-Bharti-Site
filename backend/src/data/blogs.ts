export interface BlogData {
    title: string;
    excerpt: string;
    image: string;
    externalLink: string;
  }
  
  export const blogsData: BlogData[] = [
    {
      title: "Cultivating a Growth Mindset",
      excerpt: "Learn strategies to embrace challenges and continuously evolve.",
      image: "https://via.placeholder.com/400x200.png?text=Blog+Post+1",
      externalLink: "https://medium.com/some-external-blog"
    },
    {
      title: "Overcoming Burnout",
      excerpt: "Tips for regaining balance and motivation when life feels overwhelming.",
      image: "https://via.placeholder.com/400x200.png?text=Blog+Post+2",
      externalLink: "https://medium.com/some-external-blog"
    },
    {
      title: "Setting Intentional Goals",
      excerpt: "Define goals aligned with your values and track your progress meaningfully.",
      image: "https://via.placeholder.com/400x200.png?text=Blog+Post+3",
      externalLink: "https://medium.com/some-external-blog"
    }
  ];
  