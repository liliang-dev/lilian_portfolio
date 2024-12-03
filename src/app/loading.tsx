import React from 'react';

const LoaderSkills = () => {
  return (
    <div className="animate-pulse flex flex-wrap flex-col gap-5 w-full">
        <div className={"flex-1 p-4 rounded-lg duration-300 bg-[#d1d1d1]"}></div>
        <div className={"flex-1 p-4 rounded-lg duration-300 bg-[#d1d1d1]"}></div>
        <div className={"flex-1 p-4 rounded-lg duration-300 bg-[#d1d1d1]"}></div>
    </div>
  );
};

export default LoaderSkills;

export const LoaderExperiences = () => {
  return (
    <div className={"animate-pulse grid grid-cols-12 gap-5 font-grand p-5 rounded-lg duration-300 bg-[#f9f9f9]"}>
        <div className={`col-span-3 font-bold max-md:justify-center max-md:items-center max-md:flex max-md:flex-col rounded-lg bg-[#d1d1d1] h-100`}><span></span></div>
        <div className="flex flex-col col-span-9 gap-1">
            <p className="h-6 bg-[#d1d1d1] rounded-lg"></p>
            <p className="h-20 bg-[#d1d1d1] rounded-lg"></p>
        </div>
    </div>
  );
};

export const LoaderProjects = () => {
  return (
    <div className={"animate-pulse grid grid-cols-12 gap-5 font-grand p-5 rounded-lg duration-300 bg-[#f9f9f9]"}>
        <div className={`col-span-3 font-bold max-md:justify-center max-md:items-center max-md:flex max-md:flex-col rounded-lg bg-[#d1d1d1] h-100`}><span></span></div>
        <div className="flex flex-col col-span-9 gap-1">
            <p className="h-6 bg-[#d1d1d1] rounded-lg"></p>
            <p className="h-20 bg-[#d1d1d1] rounded-lg"></p>
        </div>
    </div>
  );
};

export const LoaderStudies = () => {
  return (
    <div className={"animate-pulse grid grid-cols-12 gap-5 font-grand p-5 rounded-lg duration-300 bg-[#f9f9f9]"}>
        <div className={`col-span-3 font-bold max-md:justify-center max-md:items-center max-md:flex max-md:flex-col rounded-lg bg-[#d1d1d1] h-100`}><span></span></div>
        <div className="flex flex-col col-span-9 gap-1">
            <p className="h-6 bg-[#d1d1d1] rounded-lg"></p>
            <p className="h-20 bg-[#d1d1d1] rounded-lg"></p>
        </div>
    </div>
  );
};