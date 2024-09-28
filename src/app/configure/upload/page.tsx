'use client'

import { cn } from "@/lib/utils";
import { useState } from "react";

const Page = () => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false)
  return (
    <div
      className={cn('relative flex-1 h-full w-full px-2.5 bg-gray-900 rounded-xl bg-gray-900/5 p-2 my-16 ring-1 ring-gray-900/10 lg:rounded-2xl flex flex-col justify-center items-center', 
        {
          "ring-blue-900/10, ring-blue-900/25" : isDragOver,
        }
      )}
    >
      <div className="flex flex-col justify-center items-center flex-1 relative w-full"></div>
    </div>
  );
};

export default Page;
