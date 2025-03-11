// import React from "react";
// import LatestJobCards from "./LatestJobCards";
// import { useSelector } from "react-redux";

// const LatestJobs = () => {
//   const { allJobs } = useSelector((store) => store.job);

//   return (
//     <div className="max-w-7xl mx-auto my-20">
//       <h1 className="text-4xl font-bold">
//         <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
//       </h1>
//       <div className="grid grid-cols-3 gap-4 my-5">
//         {allJobs.length <= 0 ? (
//           <span>No Job Available</span>
//         ) : (
//           allJobs
//             ?.slice(0, 6)
//             .map((job) => <LatestJobCards key={job._id} job={job} />)
//         )}
//       </div>
//     </div>
//   );
// };

// export default LatestJobs;

import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";
import { motion } from 'framer-motion';

const LatestJobs = () => {
  const { allJobs = [] } = useSelector((store) => store.job);

  // Sorting jobs by creation date (latest to earliest)
  const sortedJobs = [...allJobs].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA; // Reverse sorting for latest to earliest
  });

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {sortedJobs.length <= 0 ? (
          <span>No Job Available</span>
        ) : (
          sortedJobs
            ?.slice(0, 6) // Limit to 6 jobs
            .map((job) => (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                key={job?._id}
              >
                <LatestJobCards key={job._id} job={job} />
              </motion.div>
            ))
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
