"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import Dropzone from "react-dropzone";

const Page = () => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const onDropAccepted = (acceptedFiles: any) => {
    console.log("called")
    console.log(acceptedFiles);
  };

  const onDropRejected = (acceptedFiles: any) => {
    console.log(acceptedFiles);
  };
  return (
    <div
      className={cn(
        "relative flex-1 h-full w-full px-2.5  bg-gray-900 rounded-xl bg-gray-900/5 p-2 my-16 ring-1 ring-gray-900/10 lg:rounded-2xl flex flex-col justify-center items-center",
        {
          "ring-blue-900/10, ring-blue-900/25": isDragOver,
        }
      )}
    >
      <Dropzone onDropAccepted={onDropAccepted} onDropRejected={onDropRejected}>
        {({ getRootProps, getInputProps }) => (
          <div className="flex flex-col justify-center items-center flex-1 relative w-full" {...getRootProps()}>
            <input  {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
      {/* <div "></div> */}
    </div>
  );
};

export default Page;
