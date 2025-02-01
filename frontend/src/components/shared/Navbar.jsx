import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LogOut, UserRound } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 ">
        <div>
          <h1 className="text-2xl font-bold">
            Hired<span className="text-[#F83002]">Up</span>
          </h1>
        </div>
        <div className="flex items-center gap-16">
          <ul className=" flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to = '/login'>
                <Button variant="outline">Login</Button>
              </Link>
              <Link to = '/signup'>
                <Button className="bg-[#6A38c2] hover:bg-[#7f43e8]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://shorturl.at/pE7wu" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="">
                  <div className="flex gap-2 space-y-2">
                    <Avatar className="cursor-pointer mt-3">
                      <AvatarImage src="https://shorturl.at/pE7wu" />
                    </Avatar>
                    <div>
                      <h4 className="font-medium"> kalpit parmar</h4>
                      <p className="text-sm text-gray-500">
                        Helllo !! my name is kalpit
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2 text-gray-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <UserRound></UserRound>
                      <Button variant="link">View profile</Button>
                    </div>
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut></LogOut>
                      <Button variant="link">Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
