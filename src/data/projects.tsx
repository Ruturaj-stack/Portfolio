import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  neondb: {
    title: "NeonDB",
    bg: "black",
    fg: "white",
    icon: <span className="text-sm font-bold">NEON</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "devtinder",
    category: "Social Networking",
    title: "DevTinder",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: [],
    live: "https://devtinder.vercel.app",
    github: "https://github.com/ruturajjagdale/DevTinder",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.js,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Tinder for Developers 🤝
          </TypographyP>
          <TypographyP className="font-mono ">
            DevTinder is a Tinder-style matchmaking platform designed specifically
            for developers to connect based on technology stack and interests.
            Find your perfect coding partner, collaborate on projects, and build
            amazing things together!
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>
              <strong>Smart Matching:</strong> Get matched with developers based
              on technology stack and interests
            </li>
            <li>
              <strong>Real-time Connections:</strong> Manage friend requests and
              connections with real-time updates
            </li>
            <li>
              <strong>User Profiles:</strong> Create detailed profiles showcasing
              your tech stack and expertise
            </li>
            <li>
              <strong>Secure Authentication:</strong> JWT-based authentication for
              secure user sessions
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with React for the frontend, Express.js for the backend, and
            MongoDB for data persistence. Featuring real-time connection management
            and secure JWT authentication.
          </p>
        </div>
      );
    },
  },
  {
    id: "easyleads",
    category: "Real Estate",
    title: "EasyLeads",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: [],
    live: "https://easyleads.vercel.app",
    github: "https://github.com/ruturajjagdale/EasyLeads",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.react,
      ],
      backend: [PROJECT_SKILLS.prisma, PROJECT_SKILLS.postgres, PROJECT_SKILLS.neondb],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Real Estate Buyer Management System 🏠
          </TypographyP>
          <TypographyP className="font-mono ">
            EasyLeads is a full-stack real estate buyer management platform that
            empowers agents to efficiently manage, track, and convert buyers.
            Organize your leads with categorized status tracking and boost your
            productivity.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-2">
            <li>
              <strong>Add & Update Buyers:</strong> Easily add new buyers or update
              existing buyer information
            </li>
            <li>
              <strong>Status Tracking:</strong> Track buyer status through different
              stages: New, Contacted, Negotiation, Converted
            </li>
            <li>
              <strong>Lead Management:</strong> Organize and categorize leads for
              better workflow clarity
            </li>
            <li>
              <strong>Data Export/Import:</strong> Export leads to different formats
              or import bulk data
            </li>
            <li>
              <strong>Real-time Updates:</strong> See changes instantly across all
              connected devices
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with Next.js for the full-stack framework, TypeScript for type
            safety, Prisma as the ORM, and NeonDB for PostgreSQL hosting. Features
            Zod for data validation and Tailwind CSS for beautiful UI.
          </p>
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <p className="font-mono mb-2">
            Optimized database operations with Prisma, secure data handling with
            Zod validation, and a responsive design that works seamlessly on any
            device. Perfect for modern real estate agents looking to streamline
            their workflow.
          </p>
        </div>
      );
    },
  },
];
export default projects;
