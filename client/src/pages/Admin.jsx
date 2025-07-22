import React from "react";

const filteredUsers = [
  {
    _id: "1",
    name: "Abdul Hannan",
    email: "hannan@example.com",
    role: "user",
  },
  {
    _id: "2",
    name: "Admin User",
    email: "admin@smit.com",
    role: "admin",
  },
  {
    _id: "3",
    name: "Ali Raza",
    email: "ali@example.com",
    role: "moderator",
  },
  {
    _id: "4",
    name: "Fatima Noor",
    email: "fatima@example.com",
    role: "user",
  },
];

const tableData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    status: "Active",
    joinDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "234-567-8901",
    address: "456 Oak Ave, Somewhere, USA",
    status: "Inactive",
    joinDate: "2022-11-05",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert@example.com",
    phone: "345-678-9012",
    address: "789 Pine Rd, Nowhere, USA",
    status: "Active",
    joinDate: "2023-03-22",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    phone: "456-789-0123",
    address: "321 Elm Blvd, Anywhere, USA",
    status: "Pending",
    joinDate: "2023-05-10",
  },
];

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Developer",
    status: "Active",
    joinDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Designer",
    status: "Active",
    joinDate: "2022-11-22",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Manager",
    status: "Inactive",
    joinDate: "2021-05-30",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Developer",
    status: "Active",
    joinDate: "2023-02-10",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "QA Engineer",
    status: "Active",
    joinDate: "2022-07-18",
  },
  {
    id: 6,
    name: "Diana Davis",
    email: "diana@example.com",
    role: "Product Owner",
    status: "Active",
    joinDate: "2021-09-05",
  },
  {
    id: 7,
    name: "Edward Miller",
    email: "edward@example.com",
    role: "DevOps Engineer",
    status: "Inactive",
    joinDate: "2023-03-21",
  },
];
// <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
//   <div className="block overflow-x-scroll whitespace-nowrap">
//     <table className="min-w-full  divide-y divide-gray-200 dark:divide-gray-700">
//       <thead className="bg-gray-50 dark:bg-gray-700">
//         <tr>
//           <th
//             scope="col"
//             className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
//           >
//             Name
//           </th>
//           <th
//             scope="col"
//             className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
//           >
//             Email
//           </th>
//           <th
//             scope="col"
//             className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
//           >
//             Role
//           </th>
//           <th
//             scope="col"
//             className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
//           >
//             Actions
//           </th>
//           <th
//             scope="col"
//             className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
//           >
//             Actions
//           </th>
//           <th
//             scope="col"
//             className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
//           >
//             Actions
//           </th>
//           <th
//             scope="col"
//             className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
//           >
//             Actions
//           </th>
//         </tr>
//       </thead>
//       <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
//         {filteredUsers.map((user) => (
//           <tr
//             key={user._id}
//             className="hover:bg-gray-50 dark:hover:bg-gray-700"
//           >
//             <td className="px-6 py-4 whitespace-nowrap">
//               <div className="text-sm font-medium text-gray-900 dark:text-white">
//                 {user.name}
//               </div>
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap">
//               <div className="text-sm text-gray-500 dark:text-gray-300">
//                 {user.email}
//               </div>
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap">
//               <span
//                 className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
//                 ${
//                   user.role === "admin"
//                     ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
//                     : user.role === "moderator"
//                     ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
//                     : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
//                 }`}
//               >
//                 {user.role}
//               </span>
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//               <button
//                 disabled={user.email === "admin@smit.com"}
//                 className={`mr-3 text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300
//                   ${
//                     user.email === "admin@smit.com"
//                       ? "opacity-50 cursor-not-allowed"
//                       : ""
//                   }`}
//               >
//                 Edit
//               </button>
//               <button
//                 disabled={user.email === "admin@smit.com"}
//                 className={`text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300
//                   ${
//                     user.email === "admin@smit.com"
//                       ? "opacity-50 cursor-not-allowed"
//                       : ""
//                   }`}
//               >
//                 Delete
//               </button>
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//               <button
//                 disabled={user.email === "admin@smit.com"}
//                 className={`mr-3 text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300
//                   ${
//                     user.email === "admin@smit.com"
//                       ? "opacity-50 cursor-not-allowed"
//                       : ""
//                   }`}
//               >
//                 Edit
//               </button>
//               <button
//                 disabled={user.email === "admin@smit.com"}
//                 className={`text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300
//                   ${
//                     user.email === "admin@smit.com"
//                       ? "opacity-50 cursor-not-allowed"
//                       : ""
//                   }`}
//               >
//                 Delete
//               </button>
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//               <button
//                 disabled={user.email === "admin@smit.com"}
//                 className={`mr-3 text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300
//                   ${
//                     user.email === "admin@smit.com"
//                       ? "opacity-50 cursor-not-allowed"
//                       : ""
//                   }`}
//               >
//                 Edit
//               </button>
//               <button
//                 disabled={user.email === "admin@smit.com"}
//                 className={`text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300
//                   ${
//                     user.email === "admin@smit.com"
//                       ? "opacity-50 cursor-not-allowed"
//                       : ""
//                   }`}
//               >
//                 Delete
//               </button>
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//               <button
//                 disabled={user.email === "admin@smit.com"}
//                 className={`mr-3 text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300
//                   ${
//                     user.email === "admin@smit.com"
//                       ? "opacity-50 cursor-not-allowed"
//                       : ""
//                   }`}
//               >
//                 Edit
//               </button>
//               <button
//                 disabled={user.email === "admin@smit.com"}
//                 className={`text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300
//                   ${
//                     user.email === "admin@smit.com"
//                       ? "opacity-50 cursor-not-allowed"
//                       : ""
//                   }`}
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// </div>
const Admin = () => {
  //   return (
  //     <div className="p-4">
  //       <h2 className="text-xl font-bold mb-4">User Data</h2>

  //       {/* Container that enables horizontal scrolling on mobile */}
  //       <div className="w-full overflow-x-auto">
  //         {/* Table with minimum width to ensure it's wider than mobile screens */}
  //         <table className="min-w-full divide-y divide-gray-200">
  //           <thead className="bg-gray-50">
  //             <tr>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  //                 ID
  //               </th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  //                 Name
  //               </th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  //                 Email
  //               </th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  //                 Phone
  //               </th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  //                 Address
  //               </th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  //                 Status
  //               </th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
  //                 Join Date
  //               </th>
  //             </tr>
  //           </thead>
  //           <tbody className="bg-white divide-y divide-gray-200">
  //             {tableData.map((item) => (
  //               <tr key={item.id}>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
  //                   {item.id}
  //                 </td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
  //                   {item.name}
  //                 </td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
  //                   {item.email}
  //                 </td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
  //                   {item.phone}
  //                 </td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
  //                   {item.address}
  //                 </td>
  //                 <td className="px-6 py-4 whitespace-nowrap">
  //                   <span
  //                     className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
  //                       item.status === "Active"
  //                         ? "bg-green-100 text-green-800"
  //                         : item.status === "Inactive"
  //                         ? "bg-red-100 text-red-800"
  //                         : "bg-yellow-100 text-yellow-800"
  //                     }`}
  //                   >
  //                     {item.status}
  //                   </span>
  //                 </td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
  //                   {item.joinDate}
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">User Management</h1>

      {/* Responsive container with horizontal scrolling on mobile */}
      <div className="rounded-lg border border-gray-200 shadow-sm overflow-x-auto w-full">
        {/* Table with fixed layout to improve performance on large datasets */}
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Join Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                                                ${
                                                  user.status === "Active"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-red-100 text-red-800"
                                                }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.joinDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile hint (only visible on small screens) */}
      <div className="md:hidden mt-4 text-sm text-gray-500 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 inline-block mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
          />
        </svg>
        Scroll horizontally to view all columns
      </div>
    </div>
  );
};

export default Admin;
