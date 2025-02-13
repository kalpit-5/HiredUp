import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Navbar from "./shared/Navbar";

const JobDescription = () => {
  const isApplied = true;
  return (
    <div>
      <Navbar />
      <div className=" max-w-7xl mx-auto my-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className=" font-bold text-xl">Frontend Developer</h1>
            <div className="flex items-center gap-4 mt-4">
              <Badge className={" text-[#F83002] font-bold"} variant="ghost">
                12 Positions
              </Badge>
              <Badge className={" text-blue-700 font-bold"} variant="ghost">
                Part time
              </Badge>
              <Badge className={" text-green-600 font-bold"} variant="ghost">
                34 lpa
              </Badge>
            </div>
          </div>
          <Button
            disabled={isApplied}
            className={`rounded-lg ${
              isApplied
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#7209b7] hover:bg-[#5f32ad]"
            }`}
          >
            {isApplied ? "Already Applied " : "Appy Now"}
          </Button>
        </div>
        <h1 className=" border-b-2 border-b-gray-300 font font-medium py-5">
          Job Description
        </h1>
        <div className='my-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>Hyderabad</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, adipisci neque debitis accusamus rerum sit ex in voluptas, labore facilis, facere cupiditate aperiam dignissimos veritatis unde odit iure sapiente officia.</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>2 yrs</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>12 LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>4</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>17-07-2024</span></h1>
            </div>
      </div>
    </div>
  );
};

export default JobDescription;
