import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {

  const navigate = useNavigate();
  const jobId = "srgfesrdfvsdgzfv"
  return (
    <div className="p-5 rounded-xl shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className=" text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className=" rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className=" flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://shorturl.at/1w1ex" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg "> Company Name </h1>
          <p className=" text-sm text-gray-500">Banglore</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className=" text-sm text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
          laborum ipsum incidunt necessitatibus, tempora temporibus ipsa. Nemo
          obcaecati recusandae, autem blanditiis tenetur voluptas dicta eos
          suscipit, itaque animi nostrum rerum?
        </p>
      </div>

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
      <div className=" flex items-center gap-4 mt-4">
        <Button variant="outline" onClick={()=> navigate(`/description/${jobId}`)}>Details</Button>
        <Button className="bg-[#6A38c2]">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
