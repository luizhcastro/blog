import {
  SiGithub,
  SiLinkedin,
  SiYoutube,
  SiCaldotcom,
  SiRailway,
} from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import berologo from "@/public/berologo.png";
import curriculol from "@/public/curriculol.png";
import type { ReactNode } from "react";

const XLogo = () => {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className="ml-1">
      <g>
        <path
          className="fill-zinc-900"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        ></path>
      </g>
    </svg>
  );
};

const BeroLogo = () => {
  return <Image src={berologo} alt="BeroLab" width={24} height={24} />;
};

const CurriculolLogo = () => {
  return <Image src={curriculol} alt="Curricu.lol" width={24} height={24} />;
};

interface Link {
  name: string;
  description?: string;
  url: string;
  icon?: ReactNode;
}

const externalLinks: Link[] = [
  {
    name: "LinkedIn",
    description: "follow my career",
    url: "https://linkedin.com/in/luizzcastro",
    icon: <SiLinkedin className="fill-zinc-900" />,
  },
  {
    name: "GitHub",
    description: "steal my code",
    url: "https://github.com/luizhcastro",
    icon: <SiGithub />,
  },
  {
    name: "YouTube",
    description: "watch me talk",
    url: "https://youtube.com/@luizcastrodev",
    icon: <SiYoutube className="fill-zinc-900" />,
  },
  {
    name: "X / Twitter",
    description: "read my mind",
    url: "https://x.com/loez__",
    icon: <XLogo />,
  },
  {
    name: "Schedule a call",
    description: "let's talk!",
    url: "https://cal.com/luizcastro",
    icon: <SiCaldotcom className="fill-zinc-900" />,
  },
  {
    name: "50% OFF at BeroLab",
    description: "indie hackers community",
    url: "https://www.berolab.app/support/luizin",
    icon: <BeroLogo />,
  },
  {
    name: "$20 FREE Railway Credits",
    description: "deploy everything easily",
    url: "https://railway.com?referralCode=vO6wl2",
    icon: <SiRailway className="fill-zinc-900" />,
  },
  {
    name: "Resume Review",
    description: "evaluate your resume for jobs",
    url: "https://curricu.lol/r/XMtJBuL",
    icon: <CurriculolLogo />,
  },
];

const ExternalLink = (link: Link) => {
  return (
    <a
      key={link.description}
      href={link.url}
      target="_blank"
      className="group flex items-center justify-between p-4 transition-transform sm:hover:bg-zinc-100"
    >
      <span className="flex items-center gap-4">
        {link.icon} {link.name}
        <span className="text-zinc-500 opacity-0 transition-transform max-sm:hidden sm:group-hover:opacity-100">
          {link.description}
        </span>
      </span>
      <ArrowUpRight
        strokeWidth={1.4}
        className="size-5 shrink-0 text-zinc-900 transition-transform sm:group-hover:rotate-45"
      />
    </a>
  );
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm">
        <span className="font-italic text-[15px] font-normal">
          Building software
        </span>
        . Coding for a couple of years, with a focus on TypeScript and Java.
        Shipping distributed systems and crafting pixel-perfect frontends that
        perform as well as they look.
      </p>
      <div className="divide-y divide-zinc-300 overflow-hidden rounded ring-1 ring-zinc-300">
        {externalLinks.map((link: Link) => (
          <ExternalLink key={link.url} {...link} />
        ))}
      </div>
    </div>
  );
}
