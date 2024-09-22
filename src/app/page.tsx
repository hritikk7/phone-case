import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper
          className="pb-24 pt-10 lg:grid lg:grid-cols-3
          sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-32 
        "
        >
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4 pb-16">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start ">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/snake-1.png" alt="" className="w-full" />
              </div>
              <h1
                className="relative w-fit text-balance mt-16 font-bold text-gray-900
              text-5xl md:text-6xl lg:text-7xl "
              >
                Your Image on a{" "}
                <span className="text-white bg-green-800 px-2">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg text-center max-w-prose md:text-wrap lg:text-left text-balance">
                Capture your favourite memories with your own{" "}
                <span className="font-semibold">one-of-one</span> PhoneCase.
                Phone case allows you to protect your memories not just your
                phone case
              </p>
              <ul className="mt-8 space-y-2 text-left">
                <div className="space-y-2 items-center">
                  <li className="flex gap-2 items-center ">
                    <Check className="text-green-600 h-5 w-5 shrink-0" />
                    High-qulaity, durable material
                  </li>
                  <li className="flex gap-2 items-center ">
                    <Check className="text-green-600 h-5 w-5 shrink-0" />5 Year
                    print gurantee
                  </li>
                  <li className="flex gap-2 items-center ">
                    <Check className="text-green-600 h-5 w-5 shrink-0" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row sm:items-start items-center">
                <div className="flex -space-x-3">
                  <img
                    className=" inline-block rounded-full w-10 h-10
                    ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt=""
                  />
                  <img
                    className=" inline-block rounded-full w-10 h-10
                    ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt=""
                  />

                  <img
                    className=" inline-block rounded-full w-10 h-10
                    ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt=""
                  />

                  <img
                    className=" inline-block rounded-full w-10 h-10
                    ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt=""
                  />

                  <img
                    className=" inline-block rounded-full w-10 h-10
                    ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt=""
                  />
                </div>

                <div className=" mt-3 flex flex-col justify-between items-center sm:items-start ">
                  <div className="flex gap-1">
                    <Star className=" h-4 w-4 fill-green-600 text-green-600" />
                    <Star className=" h-4 w-4 fill-green-600 text-green-600" />
                    <Star className=" h-4 w-4 fill-green-600 text-green-600" />
                    <Star className=" h-4 w-4 fill-green-600 text-green-600" />
                    <Star className=" h-4 w-4 fill-green-600 text-green-600" />
                  </div>
                  <p className="mt-1">
                    <span className="font-semibold ">1,250 </span> Happy
                    Customers{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>


      
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
