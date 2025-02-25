import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal, CheckCircle, XCircle, MinusCircle } from "lucide-react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";

const shortlistingStatus = ["accepted", "rejected"];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);

  const [localApplicants, setLocalApplicants] = useState([]);
  const [popoverOpen, setPopoverOpen] = useState({});

  useEffect(() => {
    if (applicants) {
      setLocalApplicants(applicants.applications || []);
    }
  }, [applicants]);

  const statusHandler = async (status, id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setLocalApplicants((prev) =>
          prev.map((item) => (item._id === id ? { ...item, status } : item))
        );
        setPopoverOpen((prev) => ({ ...prev, [id]: false }));
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const renderStatusIcon = (status) => {
    switch (status) {
      case "accepted":
        return <CheckCircle className="text-green-500" />;
      case "rejected":
        return <XCircle className="text-red-500" />;
      default:
        return <MinusCircle className="text-gray-500" />;
    }
  };

  const togglePopover = (id) => {
    setPopoverOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent applied users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Status</TableHead>
            <TableHead>FullName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {localApplicants &&
            localApplicants.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{renderStatusIcon(item?.status)}</TableCell>
                <TableCell>{item?.applicant?.fullname}</TableCell>
                <TableCell>{item?.applicant?.email}</TableCell>
                <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                <TableCell>
                  {item.applicant?.profile?.resume ? (
                    <a
                      className="text-blue-600 cursor-pointer"
                      href={item?.applicant?.profile?.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item?.applicant?.profile?.resumeOriginalName}
                    </a>
                  ) : (
                    <span>NA</span>
                  )}
                </TableCell>
                <TableCell>{item?.applicant.createdAt.split("T")[0]}</TableCell>
                <TableCell className="float-right cursor-pointer">
                  <Popover open={popoverOpen[item._id]}>
                    <PopoverTrigger onClick={() => togglePopover(item._id)}>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      {shortlistingStatus.map((status, index) => (
                        <div
                          key={index}
                          onClick={() => statusHandler(status, item?._id)}
                          className="flex w-fit items-center my-2 cursor-pointer"
                        >
                          <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
                        </div>
                      ))}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;
