import { Link } from "react-scroll";

export interface HomeButtonProps {
  title: string;
  href: string;
}

export interface AboutButtonProps {
  title: string;
  href: string;
}

export function HomeButton({ title, href }: HomeButtonProps) {
  return (
    <div>
      <Link
        to={href}
        spy
        smooth
        offset={0}
        duration={200}
        delay={100}
        role="button"
        aria-label={`Learn more about ${title}`}
        className="inline-block px-15  py-2 mt-4 text-white border hover:bg-transparent hover:text-black border-white transition duration-300"
      >
        {title}
      </Link>
    </div>
  );
}

export function AboutButton({ title, href }: AboutButtonProps) {
  return (
    <div>
      <Link
        to={href}
        spy
        smooth
        offset={0}
        duration={200}
        delay={100}
        role="button"
        aria-label={`Hire Greig McMahon, Web Developer ${title}`}
        className="btn btn-light btn-lg section-scroll"
      >
        {title}
      </Link>
    </div>
  );
}
