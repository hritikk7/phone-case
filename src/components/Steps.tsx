"use client";
import { usePathname } from "next/navigation";
export const Steps: React.FC = () => {
  const STEPS = [
    {
      name: "Setp 1",
      desc: "test Desc",
      url: "/upload",
    },
    {
      name: "Setp 2",
      desc: "test Desc",
      url: "/upload",
    },
    {
      name: "Setp 3",
      desc: "test Desc",
      url: "/upload",
    },
  ];

  const pathname = usePathname();

  return (
    <ol className="lg:flex flex-col  rounded-md lg:rounded-none border-none  bg-white lg:border-l lg:border-gray-200  ">
      {STEPS.map((step, index) => {
        return <li></li>;
      })}
    </ol>
  );
};
