import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

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
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue, dispatch]);

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div key={`filter-${index}`}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div
                  className="flex items-center space-x-2 my-2"
                  key={`item-${index}-${idx}`}
                >
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
