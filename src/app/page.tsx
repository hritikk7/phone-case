import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRight, Check, Star } from "lucide-react";
import Phone from "@/components/Phone";
import Reviews from "@/components/Reviews";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="bg-slate-50 grainy-light">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                {/* i forgot this div right here in the video, it's purely visual gradient and looks nice */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
                <img src="/snake-1.png" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone case.
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />5 year
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-600" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user image"
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="user image"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>

                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
              />
              <img
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-slate-50 grainy-dark py-24 ">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 lg:gap-24 sm:gap-32">
          <div className="flex flex-col items-center ">
            <h2 className="font-bold text-5xl md:text-6xl text-center tracking-tight text-gray-900 text-balance">
              What Our <span className="text-green-600">Customers</span> say
            </h2>
          </div>

          <div className="grid mx-auto max-w-2xl grid-cols-1 lg:grid-cols-2 px-4 gap-y-16  lg:max-w-none">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20 ">
              <div className="flex ">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-6 tracking-wide">
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  quae corporis. Aut, ipsum placeat ut nihil eveniet sunt,
                  neque, repellat cupiditate reprehenderit praesentium odio
                  minus aspernatur optio et veritatis numquam minima! Quam, amet
                  eos atque rerum iusto totam a sequi beatae, soluta molestiae
                  eius! Id sunt deleniti ad neque aliquam dignissimos maxime?
                  Exercitationem, debitis! Voluptas, dolorum doloremque deserunt
                  tempore voluptate consectetur minus quia blanditiis impedit
                  amet velit! Incidunt beatae sunt sint, maiores perferendis
                  doloribus sit."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="/users/user-1.png"
                  alt="user"
                />
                <div className="">
                  <p className="font-semibold text-lg">Tom</p>
                  <div className="flex items-center gap-1.5 ">
                    <Check className="stroke-[3px] text-green-600 h-5 w-5" />
                    <p className="text-sm text-gray-600">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-auto flex-col  gap-4 ">
              <div className="flex ">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-6 tracking-wide">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  quae corporis. Aut, ipsum placeat ut nihil eveniet sunt,
                  neque, repellat cupiditate reprehenderit praesentium odio
                  minus aspernatur optio et veritatis numquam minima! Quam, amet
                  eos atque rerum iusto totam a sequi beatae, soluta molestiae
                  eius! Id sunt deleniti ad neque aliquam dignissimos maxime?
                  Exercitationem, debitis! Voluptas, dolorum doloremque deserunt
                  tempore voluptate consectetur minus quia blanditiis impedit
                  amet velit! Incidunt beatae sunt sint, maiores perferendis
                  doloribus sit.
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="/users/user-1.png"
                  alt="user"
                />
                <div className="">
                  <p className="font-semibold text-lg">Jonathn</p>
                  <div className="flex items-center gap-1.5 ">
                    <Check className="stroke-[3px] text-green-600 h-5 w-5" />
                    <p className="text-sm text-gray-600">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        {/* <div className="pt-16">
          <Reviews />
        </div> */}
      </section>

      <section>
        <MaxWidthWrapper className="py-24">
          <div className=" mb-12 px-6 lg:px-8">
            <div className="text-center mx-auto max-w-2xl sm:text-center">
              <h2 className="text-4xl xl:text-5xl font-bold text-balance tracking-normal !leading-tight">
                Upload Your Photo and get{" "}
                <span className="text-white bg-green-600 px-2">
                  {" "}
                  your own case
                </span>{" "}
                now
              </h2>
            </div>
          </div>

          {/* <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                alt=""
                className="absolute top-[25] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />
              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img src="/horse.jpg" alt="" />
              </div>
              <Phone imgSrc="/horse_phone.jpg" />
            </div>
          </div> */}
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"
              />

              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img
                  src="/horse.jpg"
                  className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
                />
              </div>

              <Phone className="w-60" imgSrc="/horse_phone.jpg" />
            </div>
          </div>

          <ul className="my-8 mx-auto w-fit  space-y-3">
            <li className="w-fit flex gap-2 items-center leading-4 tracking-wide ">
              <Check className="w-5 h-5  stroke-[3px] text-green-600" />
              High Qulaity silicon material
            </li>
            <li className="w-fit flex gap-2 items-center leading-4 tracking-wide ">
              <Check className="w-5 h-5  stroke-[3px] text-green-600" />
              Scratch- and fingerprint resistant coating
            </li>
            <li className="w-fit flex gap-2 items-center leading-4 tracking-wide ">
              <Check className="w-5 h-5  stroke-[3px] text-green-600" />
              Wireless charging compatible
            </li>
            <li className="w-fit flex gap-2 items-center leading-4 tracking-wide ">
              <Check className="w-5 h-5  stroke-[3px] text-green-600" />5 year
              print warranty
            </li>

            <div className="mt-8 ">
              <Link
                href="/configure/upload"
                className={buttonVariants({
                  size: "lg",
                  className: "mt-8",
                })}
              >
                Create your case Now
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
      
    </div>
  );
}
