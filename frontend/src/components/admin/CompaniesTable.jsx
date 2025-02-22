// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Avatar, AvatarImage } from "../ui/avatar";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Edit2, MoreHorizontal } from "lucide-react";
// import { useSelector } from "react-redux";

// const CompaniesTable = () => {
//   const { companies } = useSelector((store) => store.company);
//   return (
//     <div>
//       <Table>
//         <TableCaption>A list of recent registered companies</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Logo</TableHead>
//             <TableHead>Name</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {companies.length <= 0 ? 
//             <span> You haven't registered any company yet </span>
//            : (
//             <div>
//             {
//               companies.map((company)=>{
//                 return(
//                   <div key={company._id}>
//                   <TableCell>
//                 <Avatar>
//                   <AvatarImage src="https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo.png" />
//                 </Avatar>
//               </TableCell>
//               <TableCell>{company.name}</TableCell>
//               <TableCell>{company.createdAt.split("T")[0]}</TableCell>
//               <TableCell className="text-right cursor-pointer">
//                 <Popover>
//                   <PopoverTrigger>
//                     <MoreHorizontal />
//                   </PopoverTrigger>
//                   <PopoverContent className=" w-32">
//                     <div className="flex items-center gap-3 w-fit cursor-pointer">
//                       <Edit2 className="w-4" />
//                       <span>Edit</span>
//                     </div>
//                   </PopoverContent>
//                 </Popover>
//               </TableCell>
//                   </div>
                  
//                 )
//               })
//             }
//             </div>
              
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default CompaniesTable;


import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CompaniesTable = () => {
    const { companies, searchCompanyByText } = useSelector(store => store.company);
    const [filterCompany, setFilterCompany] = useState(companies);
    const navigate = useNavigate();
    useEffect(()=>{
        const filteredCompany = companies.length >= 0 && companies.filter((company)=>{
            if(!searchCompanyByText){
                return true
            };
            return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());

        });
        setFilterCompany(filteredCompany);
    },[companies,searchCompanyByText])
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterCompany?.map((company) => (
                            <tr key={company._id}>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage src={
                                          company.logo ||
                          "https://photosking.net/wp-content/uploads/2024/05/no-dp-pic_23.webp"
                        }/>
                                        
                                    </Avatar>
                                </TableCell>
                                <TableCell>{company.name}</TableCell>
                                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div onClick={()=> navigate(`/admin/companies/${company._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                                <Edit2 className='w-4' />
                                                <span>Edit</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </tr>

                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable