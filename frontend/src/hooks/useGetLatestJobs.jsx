import { useDispatch } from "react-redux";
import { setLatestJobs } from "@/redux/jobSlice";
import { useEffect } from "react";
import axios from "axios";

const useGetLatestJobs = () => {
  const dispatch = useDispatch();

  const fetchLatestJobs = async () => {
    try {
      const { data } = await axios.get("/api/jobs/latest");  // Replace with your API
      dispatch(setLatestJobs(data.jobs));  // Dispatch to Redux
    } catch (error) {
      console.error("Error fetching latest jobs", error);
    }
  };

  useEffect(() => {
    fetchLatestJobs();

    // Polling mechanism to update jobs every 10 seconds
    const intervalId = setInterval(fetchLatestJobs, 10000);

    return () => clearInterval(intervalId);  // Clear polling on unmount
  }, []);
};

export default useGetLatestJobs;
