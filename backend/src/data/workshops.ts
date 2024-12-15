export interface WorkshopData {
    title: string;
    date: string;    // e.g. "March 15, 2025"
    format: string;  // e.g. "Online Webinar" or "In-Person"
    description: string;
    registerLink: string;
  }
  
  export const workshopsData: WorkshopData[] = [
    {
      title: "Finding Your True North",
      date: "March 15, 2025",
      format: "Online Webinar",
      description: "Discover your core values, define your purpose, and align your actions with what matters most.",
      registerLink: "/scheduling"
    },
    {
      title: "Stress to Serenity",
      date: "April 10, 2025",
      format: "In-Person (NYC)",
      description: "Learn mindfulness techniques, breathwork, and practical tools to reduce stress and increase resilience.",
      registerLink: "/scheduling"
    },
    {
      title: "Career Confidence Booster",
      date: "May 20, 2025",
      format: "Online Masterclass",
      description: "Gain clarity on your career goals, enhance your personal brand, and cultivate the confidence to excel.",
      registerLink: "/scheduling"
    }
  ];
  