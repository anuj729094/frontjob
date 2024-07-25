import { signup } from "@/redux/userauth/action"

export const jobList = [
    "Full Stack Developer", "Frontend Developer", "Backend Developer", "AI Engineer", "Blockchin Developer"
]
export const locationarr = [
    "New Delhi", "Noida", "Gurgaon", "Mumbai", "Bangalore", "Chennai", "Pune", "Hyderabad", "Chandigarh"
]
export const jobtype = ["Internship", "Full Time", "Part Time"]
export const workarr = ["Offsite", "Onsite"]
export const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 20,
        label: '20k',
    },
    {
        value: 40,
        label: '40k',
    },
    {
        value: 60,
        label: '60k',
    },
    {
        value: 80,
        label: '80k',
    },
    {
        value: 100,
        label: '100k',
    },
];

export const jobs = [
    {
      companyImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNvbXBhbnklMjBsb2dvfGVufDB8fHx8MTY4ODI0NDMyMA&ixlib=rb-1.2.1&q=80&w=400",
      companyName: "Tech Innovators Inc.",
      companyLocation: "San Francisco, CA",
      jobTitle: "Full Stack Developer",
      jobDescription: "Responsible for developing and maintaining web applications using modern frameworks and technologies.",
      openings: [
        {
          positionId: "FS001",
          positionType: "Full-Time",
          experienceRequired: "3-5 years",
          salaryRange: "$100,000 - $120,000"
        },
        {
          positionId: "FS002",
          positionType: "Contract",
          experienceRequired: "2-4 years",
          salaryRange: "$40 - $60 per hour"
        }
      ]
    },
    {
      companyImage: "hhttps://images.unsplash.com/photo-1580618115721-bdfb04b1d843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNvbXBhbnklMjBsb2dvfGVufDB8fHx8MTY4ODI0NDMyMA&ixlib=rb-1.2.1&q=80&w=400",
      companyName: "Health Solutions Ltd.",
      companyLocation: "New York, NY",
      jobTitle: "Backend Developer",
      jobDescription: "Work on server-side logic, database management, and API integration for healthcare applications.",
      openings: [
        {
          positionId: "BD001",
          positionType: "Full-Time",
          experienceRequired: "5+ years",
          salaryRange: "$110,000 - $130,000"
        }
      ]
    },
    {
      companyImage: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGNvbXBhbnklMjBsb2dvfGVufDB8fHx8MTY4ODI0NDMyMA&ixlib=rb-1.2.1&q=80&w=400",
      companyName: "FinTech Corp.",
      companyLocation: "Chicago, IL",
      jobTitle: "Frontend Developer",
      jobDescription: "Develop interactive and responsive user interfaces using React and other modern front-end technologies.",
      openings: [
        {
          positionId: "FD001",
          positionType: "Full-Time",
          experienceRequired: "3-5 years",
          salaryRange: "$95,000 - $115,000"
        },
        {
          positionId: "FD002",
          positionType: "Part-Time",
          experienceRequired: "1-3 years",
          salaryRange: "$30 - $45 per hour"
        },
        {
          positionId: "FD003",
          positionType: "Internship",
          experienceRequired: "0-1 year",
          salaryRange: "$20 - $25 per hour"
        }
      ]
    },
    {
      companyImage: "https://images.unsplash.com/photo-1531379410503-d7fdfb2c0b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fGNvbXBhbnklMjBsb2dvfGVufDB8fHx8MTY4ODI0NDMyMA&ixlib=rb-1.2.1&q=80&w=400",
      companyName: "EduTech Global",
      companyLocation: "Austin, TX",
      jobTitle: "Software Engineer",
      jobDescription: "Build scalable web applications for the education sector, focusing on performance and user experience.",
      openings: [
        {
          positionId: "SE001",
          positionType: "Full-Time",
          experienceRequired: "4-6 years",
          salaryRange: "$105,000 - $125,000"
        },
        {
          positionId: "SE002",
          positionType: "Contract",
          experienceRequired: "3-5 years",
          salaryRange: "$50 - $70 per hour"
        },
        {
          positionId: "SE003",
          positionType: "Part-Time",
          experienceRequired: "2-4 years",
          salaryRange: "$35 - $50 per hour"
        }
      ]
    },
    {
      companyImage: "https://images.unsplash.com/photo-1590650045834-0d87c4f4f3d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGNvbXBhbnklMjBsb2dvfGVufDB8fHx8MTY4ODI0NDMyMA&ixlib=rb-1.2.1&q=80&w=400",
      companyName: "E-Commerce Solutions",
      companyLocation: "Seattle, WA",
      jobTitle: "DevOps Engineer",
      jobDescription: "Implement CI/CD pipelines, manage cloud infrastructure, and ensure the reliability of e-commerce platforms.",
      openings: [
        {
          positionId: "DE001",
          positionType: "Full-Time",
          experienceRequired: "5+ years",
          salaryRange: "$120,000 - $140,000"
        }
      ]
    }
  ];
  
  