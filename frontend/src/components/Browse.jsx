import { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { motion } from 'framer-motion';

const Browse = () => {
  useGetAllJobs();  // Fetch jobs on component load
  const { allJobs = [] } = useSelector((store) => store.job);  // Default to an empty array
  const dispatch = useDispatch();

  // Clear the search query when the component unmounts
  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results ({allJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {allJobs.length > 0 ? (
            allJobs.map((job) => {
              return (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  key={job._id}
                >
                  <Job key={job._id} job={job} />
                </motion.div>
              );
            })
          ) : (
            <span>No jobs found</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Browse;

// import React, { useEffect } from "react";
// import Navbar from "./shared/Navbar";
// import Job from "./Job";
// import { useDispatch, useSelector } from "react-redux";
// import { setSearchedQuery } from "@/redux/jobSlice";
// import useGetAllJobs from "@/hooks/useGetAllJobs";
// import { motion } from 'framer-motion';

// const Browse = () => {
//   useGetAllJobs();  // Fetch jobs on component load
//   const { allJobs = [] } = useSelector((store) => store.job);  // Default to an empty array
//   const dispatch = useDispatch();

//   // Clear the search query when the component unmounts
//   useEffect(() => {
//     return () => {
//       dispatch(setSearchedQuery(""));
//     };
//   }, [dispatch]);

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-7xl mx-auto my-10">
//         <h1 className="font-bold text-xl my-10">
//           Search Results ({allJobs.length})
//         </h1>
//         <div className="grid grid-cols-3 gap-4">
//           {allJobs.length > 0 ? (
//             allJobs.map((job) => {
//               return (
//                 <motion.div
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -100 }}
//                   transition={{ duration: 0.3 }}
//                   key={job._id}
//                 >
//                   <Job key={job._id} job={job} />
//                 </motion.div>
//               );
//             })
//           ) : (
//             <span>No jobs found</span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Browse;
