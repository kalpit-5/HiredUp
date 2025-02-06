import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Item } from "@radix-ui/react-radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Bengaluru",
      "Hyderabad",
      "Pune",
      "Chennai",
      "Gurugram",
      "Noida",
      "Mumbai",
      "Kolkata",
      "Ahmedabad",
      "Jodhpur",
    ],
  },
  {
    filterType: "Role",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Fullstack Developer",
      "Mobile App Developer",
      "DevOps Engineer",
      "Data Scientist",
      "Machine Learning Engineer",
      "UI/UX Designer",
      "Software Engineer",
      "QA Engineer",
    ],
  },
  {
    filterType: "Salary",
    array: [
      "0 - 3 Lakh",
      "3.1 Lakh - 7 Lakh ",
      "7.1 Lakh - 10 Lakh",
      "10.1 Lakh - 15 Lakh",
      "15 Lakh - 25 Lakh",
      "25 Lakh - 40 Lakh",
    ],
  },
];

const FilterCard = () => {
  return (
    <div className=" w-full bg-white p-3 rounded-md">
      <h1 className=" font-bold text-lg">Filter Jobs</h1>
      <hr className=" mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div>
            <h1 className=" font-bold text-lg">{data.filterType}</h1>
            <hr className=" mt-3" />
            {data.array.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 my-3 text-gray-800"
              >
                <RadioGroupItem value={item} />
                <Label>{item}</Label>
              </div>
            ))}
            <hr className=" mt-3" />
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
