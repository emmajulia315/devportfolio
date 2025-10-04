import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

// import terminalPortfolio from "public/projects/terminal-portfolio.webp";
// import haruFashion from "public/projects/haru-fashion.webp";
// import haruApi from "public/projects/haru-api.webp";
// import astroPaper from "public/projects/astro-paper.webp";
// import nextBookstore from "public/projects/next-bookstore.webp";
import shadcnAdmin from "public/projects/shadcn-admin.webp";
import Mypop from "public/projects/mypop.png";
import Radio from "public/projects/radio.png";
import Trioms from "public/projects/triomes.png";
import Gospel from "public/projects/hgg.png";
import Trivoh from "public/projects/trivoh.png";
import Kiind from "public/projects/kiind.png";
import Ages from "public/projects/ages.png";
import EPMIS from "public/projects/epmis.png";
import GemeDocs from "public/projects/gem-edocs.png";
import desihakeemportfolio from "public/projects/desihakeemportfolio.png";
import codebotx from "public/projects/codebotx.png";
import gsmplayer from "public/projects/gsmplayer.png";
import Maalmate from "public/projects/Maalmate.png";
import ZadeyCosmogems from "public/projects/zadey.png";
import portfolio from "public/projects/image.png";



const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other Public projects can be explored in{" "}
        <a
          href="https://github.com/satnaing"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "MYPOP - AI Agile Coach",
    type: "Frontend",
    image: (
      <Image
        src={Mypop}
        sizes="100vw"
        fill
        alt="Mypop"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "AI Agent For Product Teams, Learn From Past Mistakes To Mitigate Risk In Future Projects ",
    tags: ["Mypop", "TypeScript", "Ai","Integration", "TailwindCSS"],
    liveUrl: "https://mypop.ai/",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "HG Choice Radio Station",
    type: "Frontend",
    image: (
      <Image
        src={Radio}
        sizes="100vw"
        fill
        alt="Radio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Uplifting spirits with divine melodies ",
    tags: ["Radio Station", "TypeScript", "Radio","Streaming", "TailwindCSS"],
    liveUrl: "https://hgcradio.com/",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Triomes - Real Estate CRM",
    type: "Frontend",
    image: (
      <Image
        src={Trioms}
        sizes="100vw"
        fill
        alt="Triomes"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Empower Your Real Estate Business with TRIOMES",
    tags: ["Triomes", "TypeScript", "Real Estate","CRM", "TailwindCSS"],
    liveUrl: "https://triomes.com/",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Hallelujah Gospel Globally",
    type: "Frontend",
    image: (
      <Image
        src={Gospel}
        sizes="100vw"
        fill
        alt="Gospel"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "THE MUSIC HIGHEST PRAISE CUE Exhibition Model",
    tags: ["Gospel", "TypeScript", "Gospel","Music", "TailwindCSS"],
    liveUrl: "https://hallelujahgospel.org/home",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Trivoh - AI Business Suit",
    type: "Frontend",
    image: (
      <Image
        src={Trivoh}
        sizes="100vw"
        fill
        alt="Trivoh"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Collaborate & Communication with Ease",
    tags: ["Trivoh", "TypeScript", "Meeting","Platform", "TailwindCSS"],
    liveUrl: "https://trivoh.com/en",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Kiind - Donation Platform",
    type: "Frontend",
    image: (
      <Image
        src={Kiind}
        sizes="100vw"
        fill
        alt="Kiind"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Integrating CSR into your business strategy",
    tags: ["Kiind", "TypeScript", "Donation","Charities", "TailwindCSS"],
    liveUrl: "https://kiind.co.uk/",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Ages Pole Vault",
    type: "Frontend",
    image: (
      <Image
        src={Ages}
        sizes="100vw"
        fill
        alt="Ages"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "The club, well known for its successes in pole vault at the national.",
    tags: ["Ages Pole Vault", "TypeScript", "Atheletes ","Competition", "TailwindCSS"],
    liveUrl: "https://agespolevault.com/",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "EPMIS - Govt of Nigeria",
    type: "Frontend",
    image: (
      <Image
        src={EPMIS}
        sizes="100vw"
        fill
        alt="EPMIS"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "The club, well known for its successes in pole vault at the national.",
    tags: ["EPMIS", "TypeScript", "Education ","Digialization", "TailwindCSS"],
    liveUrl: "https://epmis.tensng.com/",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Gem-eDocs,Your Documents Ai Assistant",
    type: "Frontend",
    image: (
      <Image
        src={GemeDocs}
        sizes="100vw"
        fill
        alt="Gem-eDocs"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Your Documents Ai Assistant",
    tags: ["Gem-eDocs", "TypeScript", "Document  ","Services", "TailwindCSS"],
    liveUrl: "httpshttps://gem-edocs.gr/",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Desi Hakeem - Your Herbal Ecomerse store",
    type: "Frontend",
    image: (
      <Image
        src={desihakeemportfolio}
        sizes="100vw"
        fill
        alt="Desi Hakeem "
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Desi Hakeem - Your Herbal Ecomerse store",
    tags: ["Desi Hakeem", "COD","Resend Mailer", "Cart Functionality ","Herbal-Commerse", "TailwindCSS"],
    liveUrl: "httpshttps://desihakeem.com",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Codebotx - You Think We Made",
    type: "Frontend",
    image: (
      <Image
        src={codebotx}
        sizes="100vw"
        fill
        alt="Codebotx"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Codebotx - You Think We Made",
    tags: ["Codebotx", "Portfolio","Resend Mailer", "Software Hourse","Typescript", "TailwindCSS"],
    liveUrl: "httpshttps://codebotx.com",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Gsm Player ",
    type: "Frontend",
    image: (
      <Image
        src={gsmplayer}
        sizes="100vw"
        fill
        alt="Gsm Player"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Gsm Player ",
    tags: ["GsmPlayer", "Cart Functionality","E-Support", "Software House","Portfolio", "TailwindCSS"],
    liveUrl: "httpshttps://GsmPlayer.com",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Maalmate - Your Financial Freedom Starts Here",
    type: "Frontend",
    image: (
      <Image
        src={Maalmate}
        sizes="100vw"
        fill
        alt="Zpl"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Welcome to maalmate - Your Financial Freedom Starts Here ",
    tags: ["Budget Tracker", "Resend mails","Next-auth", "Bank-level-security","Full-stack", "TailwindCSS"],
    liveUrl: "https://zadey.vercel.app/",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "ZadeyCosmogems - Your Online shopping  Starts Here  ",
    type: "Frontend",
    image: (
      <Image
        src={ZadeyCosmogems}
        sizes="100vw"
        fill
        alt="Zpl"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Welcome to ZadeyCosmogems - Your Online shopping  Starts Here ",
    tags: ["Budget Tracker", "Resend mails","Next-auth", "Bank-level-security","Full-stack", "TailwindCSS"],
    liveUrl: "https://zadeycosmogems.vercel.app/",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Personal Portfolio",
    type: "Frontend",
    image: (
      <Image
        src={portfolio}
        sizes="100vw"
        fill
        alt="Zpl"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Personal Portfolio",
    tags: ["Personal Portfolio", "Resend mails","Next-auth", "Next js","Full-stack", "TailwindCSS"],
    liveUrl: "https://arslanweb.vercel.app/",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  // {
  //   title: "AstroPaper",
  //   type: "Frontend",
  //   image: (
  //     <Image
  //       src={astroPaper}
  //       sizes="100vw"
  //       fill
  //       alt="AstroPaper"
  //       className="transition-transform duration-500 hover:scale-110 object-cover"
  //     />
  //   ),
  //   desc: "A minimal, accessible and SEO-friendly Astro blog theme. One of the most starred blog templates built with Astro.",
  //   tags: ["Astro", "TypeScript", "React", "TailwindCSS"],
  //   liveUrl: "https://astro-paper.pages.dev/",
  //   codeUrl: "https://github.com/satnaing/astro-paper",
  //   bgColor: "bg-[#9FD0E3]",
  //   githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  // },
  // {
  //   title: "Terminal Portfolio",
  //   type: "Frontend",
  //   image: (
  //     <Image
  //       src={terminalPortfolio}
  //       sizes="100vw"
  //       fill
  //       alt="Terminal Portfolio"
  //       className="transition-transform duration-500 hover:scale-110 object-cover"
  //     />
  //   ),
  //   desc: "My portfolio website in terminal version developed with React and TypeScript. ",
  //   tags: ["React", "TypeScript", "Styled-Components"],
  //   liveUrl: "https://terminal.satnaing.dev/",
  //   codeUrl: "https://github.com/satnaing/terminal-portfolio",
  //   bgColor: "bg-[#B4BEE0]",
  //   githubApi: "https://api.github.com/repos/satnaing/terminal-portfolio",
  // },
  // {
  //   title: "Haru Fashion",
  //   type: "Frontend",
  //   image: (
  //     <Image
  //       src={haruFashion}
  //       sizes="100vw"
  //       fill
  //       alt="Haru Fashion App"
  //       className="transition-transform duration-500 hover:scale-110 object-cover"
  //     />
  //   ),
  //   desc: "An ecommerce web application where users can browse various products, add to wishlist, add to cart, and make purchase. Available in English and Burmese languages.",
  //   tags: ["NextJS", "TypeScript", "TailwindCSS", "ContextAPI"],
  //   liveUrl: "https://haru-fashion.vercel.app/",
  //   codeUrl: "https://github.com/satnaing/haru-fashion",
  //   bgColor: "bg-[#A6CECE]",
  //   githubApi: "https://api.github.com/repos/satnaing/haru-fashion",
  // },
  // {
  //   title: "Haru API",
  //   type: "Backend",
  //   image: (
  //     <Image
  //       src={haruApi}
  //       sizes="100vw"
  //       fill
  //       alt="Haru API"
  //       className="transition-transform duration-500 hover:scale-110 object-cover"
  //     />
  //   ),
  //   desc: "A RESTful API developed for Haru fashion ecommerce project. Include CRUD operations, authentication, authorization, forgot/reset password and full-text search.",
  //   tags: ["ExpressJS", "TypeScript", "PostgreSQL", "Prisma"],
  //   liveUrl: "https://satnaing.github.io/haru-api/",
  //   codeUrl: "https://github.com/satnaing/haru-api",
  //   bgColor: "bg-[#C5E4E7]",
  //   githubApi: "https://api.github.com/repos/satnaing/haru-api",
  // },
  // {
  //   title: "Next Bookstore",
  //   type: "Frontend + HeadlessCMS",
  //   image: (
  //     <Image
  //       src={nextBookstore}
  //       sizes="100vw"
  //       fill
  //       alt="Next Bookstore"
  //       className="transition-transform duration-500 hover:scale-110 object-cover"
  //     />
  //   ),
  //   desc: "An online bookstore developed using NextJS 13 with appDir and StrapiCMS.",
  //   tags: ["NextJS", "Radix UI ", "TailwindCSS", "TanstackQuery", "StrapiCMS"],
  //   liveUrl: "https://nextbookstore.vercel.app/",
  //   codeUrl: "https://github.com/satnaing/next-bookstore",
  //   bgColor: "bg-[#EBF4F4]",
  //   githubApi: "https://api.github.com/repos/satnaing/next-bookstore",
  // },
  {
    title: "Shadcn Admin",
    type: "Backend",
    image: (
      <Image
        src={shadcnAdmin}
        sizes="100vw"
        fill
        alt="Shadcn Admin"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Admin Dashboard UI built with Shadcn and Vite. Built with responsiveness and accessibility in mind.",
    tags: ["ShadcnUI", "Vite", "React Router", "TypeScript"],
    liveUrl: "https://shadcn-admin.netlify.app/",
    codeUrl: "https://github.com/satnaing/shadcn-admin",
    bgColor: "bg-[#FBFBFB]",
    githubApi: "https://api.github.com/repos/satnaing/shadcn-admin",
  },
];

export default ProjectSection;
