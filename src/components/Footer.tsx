import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="h-20 bg-white">
      <MaxWidthWrapper className="h-full">
        <div className=" border-gray-100 border-t-2 flex flex-col h-full w-full justify-center 
        md:justify-between items-center md:flex-row ">
          <div className="pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
          <div className=" flex space-x-4 md:spac-x-8">
            <Link className="text-sm text-muted-foreground" href="#">
              Terms
            </Link>
            <Link className="text-sm text-muted-foreground" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm text-muted-foreground" href="#">
              Cookie Ploicy
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
export default Footer;
