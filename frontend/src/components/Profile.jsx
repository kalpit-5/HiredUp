import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";

const skills = ["Html", "css", "js", "Reactjs"];

const Profile = () => {
  const isResume = true;
  return (
    <div>
      <Navbar />
      <div className=" max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className=" flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </Avatar>

            <div>
              <h1 className=" font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                natus nulla unde maiores aliquid autem porro accusamus eligendi
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className=" my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>Kalpitparmar55@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>9664815923</span>
          </div>
        </div>
        <div>
          <h1>Skills</h1>
          <div className="flex items-center gap-1 my-3">
            {skills.length !== 0 ? (
              skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className=" grid w-full max-w-sm items-center gap-1.5">
          <Label className=" text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href="https://leetcode.com/u/Kalpit_5/"
              className=" text-blue-500 w-full hover:underline cursor-pointer"
            >
              {" "}
              Kalpit's Resume{" "}
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className=" max-w-4xl mx-auto bg-white rounded-2xl my-10">
        <h1 className=" font-bold text-lg">Applied Jobs</h1>
        <AppliedJobTable />
      </div>
    </div>
  );
};

export default Profile;
