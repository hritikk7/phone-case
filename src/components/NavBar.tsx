import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const NavBar =  async() => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <nav
      className=" sticky  top-0  z-[100] h-14 
     w-full bg-white/75 backdrop-blur-lg border-b border-gray-200 transition-all "
    >
      <MaxWidthWrapper className="">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-bold">
            Phone<span className="text-green-600 ">Case</span>
          </Link>

          <div className="h-14 flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Sign Out
                </Link>
                {isAdmin ? (
                  <Link
                    href="/"
                    className={buttonVariants({ size: "sm", variant: "ghost" })}
                  >
                    Dashboard
                  </Link>
                ) : null}
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex  items-center gap-1",
                  })}
                >
                  Create Case
                  <ArrowRight className="h-5 w-6 ml-2" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Sign In
                </Link>

                <Link
                  href="/api/auth/login"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Login
                </Link>

                <div className="w-px  bg-zinc-200 h-8 hidden sm:block" />

                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className:
                      "hidden sm:flex  items-center gap-1 bg-green-600",
                  })}
                >
                  Create Case
                  <ArrowRight className="h-5 w-6 ml-2" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
