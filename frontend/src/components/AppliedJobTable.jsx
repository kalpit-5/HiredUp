import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector(store => store.job);

  // Function to get status color class
  const getStatusColor = (status) => {
    switch (status) {
      case "accepted":
        return "bg-green-600 text-white"; // Green for accepted
      case "rejected":
        return "bg-red-400 text-white"; // Red for rejected
      case "pending":
        return "bg-gray-500 text-white"; // Gray for pending
      default:
        return "bg-gray-500 text-white"; // Default gray color
    }
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length === 0 ? (
            <span>You haven't applied to any job yet</span>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob._id}>
                <TableCell>{appliedJob?.createdAt.split("T")[0]}</TableCell>
                <TableCell>{appliedJob?.job?.title}</TableCell>
                <TableCell>{appliedJob?.job?.companyId?.name}</TableCell>
                <TableCell className="text-right">
                  <Badge className={getStatusColor(appliedJob?.status)}>
                    {appliedJob?.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
