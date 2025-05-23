import Link from "next/link";
import { Button } from "./ui/button";

/* Components */
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Luke<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Navigation & Hire-Me Button*/}
        <div className="flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me!</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
