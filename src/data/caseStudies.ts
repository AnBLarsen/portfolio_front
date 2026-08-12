export type CaseStudyMedia = {
    type: 'image' | 'video';
    src: string;
    alt?: string;
    caption: string;
  };
  
  export type CaseStudySection = {
    title: string;
    body: string;
  };
  
  export type CaseStudy = {
    slug: string;
    title: string;
    subtitle: string;
    role: string;
    type: 'Professional Work' | 'Personal Project' | 'Group Project';
    timeline: string;
    status?: string;
    heroImage: string;
    tech: string[];
    overview: string;
    objective: string;
    myRole: string;
    media?: CaseStudyMedia[];
    process: CaseStudySection[];
    technicalApproach: CaseStudySection[];
    uxProductDecisions?: string[];
    outcome: string;
    learnings?: string[];
    disclaimer?: string;
    links?: {
      live?: string;
      github?: string;
    };
  };
  
  export const caseStudies: CaseStudy[] = [
    {
      slug: 'shack-shine-online-booking-engine',
      title: 'Shack Shine Online Booking Engine',
      subtitle:
        'Modernizing a customer-facing booking flow from legacy PHP to a scalable Next.js experience.',
      role: 'UX Software Engineer',
      type: 'Professional Work',
      timeline: 'July 2025 – May 2026',
      status: 'No longer live; documented with test-data video and screenshots.',
      heroImage: '/hero.png',
      tech: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Salesforce',
        'Moneris',
        'TSYS',
        'Playwright',
        'Vitest',
        'New Relic',
        'CloudWatch',
        'Unleash',
        'Google Tag Manager',
      ],
      overview:
        'The Online Booking Engine was Shack Shine’s customer-facing flow for requesting and booking home-detailing services. The experience guided customers through service selection, location details, scheduling, customer information, and payment-related steps.',
      objective:
        'The objective was to modernize the booking experience from a legacy PHP flow into a scalable Next.js and TypeScript application that was easier to maintain, test, monitor, and extend. The rebuilt experience needed to support customer booking journeys, Salesforce workflows, payment integrations, analytics, and safer production releases.',
      myRole:
        'I worked as a UX Software Engineer on this project, leading the frontend modernization of the customer-facing booking flow. I translated product and design requirements into responsive UI experiences, connected frontend behavior with API and Salesforce workflows, implemented payment-related frontend flows, and supported production quality through testing, feature flags, monitoring, and debugging.',
      media: [
        {
            type: 'video',
            src: '/Demo.mp4',
            caption: 'Demo of the rebuilt booking flow using test data. The original production experience is no longer live.',
        },
        {
            type: 'image',
            src: '/step3.png',
            alt: 'Date and time selection step in the Shack Shine Online Booking Engine',
            caption: 'Calendar step showing how customers were able to pick a date and time for the appointment.',
        },
        {
            type: 'image',
            src: '/step4.png',
            alt: 'Customer details step in the Shack Shine Online Booking Engine',
            caption: 'Customer details step collecting information needed to continue the booking flow.',
        },
      ],
      process: [
        {
          title: 'Understanding the booking journey',
          body:
            'The booking flow needed to support customer inputs, business rules, Salesforce workflows, service recommendations, payments, analytics, and confirmation states. I worked through how each step connected to the larger customer journey and the operational needs behind it.',
        },
        {
          title: 'Planning the rebuild',
          body:
            'The legacy PHP flow was broken down into modern frontend steps and reusable UI patterns. The rebuild focused on improving maintainability, supporting responsive layouts, and making the experience easier to test and release safely.',
        },
      ],
      technicalApproach: [
        {
          title: 'Frontend modernization',
          body:
            'Rebuilt the customer-facing booking experience using Next.js, TypeScript, and Tailwind CSS to improve maintainability, component structure, and frontend iteration speed.',
        },
        {
          title: 'Salesforce workflow integration',
          body:
            'Connected frontend booking steps to Salesforce-backed workflows so customer selections, service details, and booking data could move through the appropriate business processes.',
        },
        {
          title: 'Payment integrations',
          body:
            'Implemented Moneris and TSYS iframe payment integrations across frontend flows and Next.js API routes, supporting Canadian and U.S. customer transactions without directly handling raw card details in the frontend.',
        },
        {
          title: 'Testing and release safety',
          body:
            'Built Vitest unit tests and Playwright end-to-end coverage across mobile and cross-browser flows, using Unleash feature flags to support safer releases.',
        },
        {
          title: 'Observability and analytics',
          body:
            'Used New Relic, Pino Logger, AWS CloudWatch, and Google Tag Manager data-layer events to improve visibility into booking funnel activity, client-side errors, payment flows, and server-side diagnostics.',
        },
      ],
      uxProductDecisions: [
        'Structured the booking flow into clear steps so customers could move through the process with less uncertainty.',
        'Prioritized responsive layouts for customers booking from mobile and desktop devices.',
        'Improved validation and error states to help customers understand what information was needed.',
        'Connected analytics events to key booking interactions to support attribution and conversion analysis.',
      ],
      outcome:
        'The rebuilt Online Booking Engine gave the team a more maintainable frontend foundation, improved release confidence through automated testing and feature flags, and made production issues easier to investigate through monitoring and logging. It also supported a more modern, responsive customer booking experience connected to business-critical workflows.',
      learnings: [
        'This project helped me realize that the work I enjoy most is frontend engineering connected to real product and business outcomes.',
        'I strengthened my cross-team collaboration skills by working with design, backend engineering, operations, and marketing to align the booking experience with user needs, business workflows, analytics, and production requirements.',
        'I strengthened my ability to work across UX, frontend architecture, APIs, third-party integrations, testing, analytics, and production support.',
        'I learned how important it is for customer-facing software to be both easy for users to understand and maintainable for engineering teams.',
      ],
      disclaimer:
        'This case study documents professional work completed at Shack Shine. The live experience and source code are not publicly available because this was company-owned production software. Screenshots and video use test data and previously public customer-facing screens only.',
    },
  ];