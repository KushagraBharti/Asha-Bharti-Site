export interface CoachingServiceData {
    title: string;
    summary: string;
    features: string[];
    link?: string;
  }
  
  export const coachingServicesData: CoachingServiceData[] = [
    {
      title: "One-on-One Coaching",
      summary: "Personalized sessions tailored to your goals, helping you find clarity and confidence.",
      features: [
        "Weekly 60-minute sessions",
        "Customized action plans",
        "Email support between sessions"
      ],
      link: "/scheduling"
    },
    {
      title: "Career Transition Coaching",
      summary: "Guidance to help you navigate career changes and find fulfillment.",
      features: [
        "Clarity on career direction",
        "Resume and interview prep",
        "Networking and personal branding"
      ],
      link: "/scheduling"
    },
    {
      title: "Stress Management & Well-Being",
      summary: "Techniques to reduce anxiety, build resilience, and cultivate balance.",
      features: [
        "Mindfulness-based practices",
        "Work-life harmony strategies",
        "Customized stress reduction plan"
      ],
      link: "/scheduling"
    }
  ];
  