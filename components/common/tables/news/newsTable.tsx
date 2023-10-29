// import { LeftAngle } from "@/public/icons/icons/svg/cards/blog/leftAngle";
// import { RightAngle } from "@/public/icons/icons/svg/cards/blog/rightAngle";
// import style from "./newsTable.module.css";
// import { useState } from "react";
// import Pagination from "rc-pagination";

// import { ShowIcon } from "@/public/icons/icons/svg/show/password/show";
// import Link from "next/link";
// import Image from "next/image";
// import { DeleteAcc } from "@/public/icons/icons/svg/dashboard/delete";
// import { EditAcc } from "@/public/icons/icons/svg/dashboard/edit";

// import { useRouter } from "next/router";
// import moment from "moment-jalaali";
// export const NewsTable = () => {
//   const [perPage, setPerPage] = useState<number>(5);
//   const [size, setSize] = useState<number>(perPage);
//   const [current, setCurrent] = useState<number>(1);
//   const PerPageChange = (value: number) => {
//     setSize(value);
//     const newPerPage = Math.ceil(blogData.length / value);
//     if (current > newPerPage) {
//       setCurrent(newPerPage);
//     }
//   };
//   const getData = (current: number, pageSize: number) => {
//     // Normally you should get the data from the server
//     return blogData.slice((current - 1) * pageSize, current * pageSize);
//   };
//   const PaginationChange = (page: number, pageSize: number) => {
//     setCurrent(page);
//     setSize(pageSize);
//   };
//   const PrevNextArrow = (
//     current: number,
//     type: string,
//     originalElement: any
//   ) => {
//     if (type === "prev") {
//       return (
//         <button title="Back">
//           <LeftAngle className={style.LeftAngle} />
//         </button>
//       );
//     }
//     if (type === "next") {
//       return (
//         <button title="Next">
//           <RightAngle className={style.RightAngle} />
//         </button>
//       );
//     }
//     return originalElement;
//   };
//   // news List :
//   interface newL {
//     title: string;
//     href: string;
//     tags: string[];
//     authorName: string;
//     editorName: string;
//     create_at: number;
//     update_at: number;
//     numberOfEdit: number;
//     status: string;
//     mPhoto: string;
//   }
//   const OrderList = ({
//     title,
//     href,
//     tags,
//     authorName,
//     editorName,
//     create_at,
//     update_at,
//     numberOfEdit,
//     status,
//     mPhoto,
//   }: newL) => {
//     const createAt: string = moment
//       .unix(create_at / 1000)
//       .format("jYYYY/jM/jD");
//     const updateAt: string = moment
//       .unix(update_at / 1000)
//       .format("jYYYY/jM/jD");
//     const router = useRouter();
//     const showHandler = () => {
//       router.push(href);
//     };
//     const editHandler = () => {
//       router.push(href);
//     };
//     return (
//       <tr>
//         <td>
//           <Link href={href}>
//             <Image
//               className={style.mImageNews}
//               src={mPhoto}
//               alt={title}
//               title={title}
//               width={60}
//               height={60}
//             />
//           </Link>
//         </td>
//         <td>
//           <Link href={href}>{title}</Link>
//         </td>
//         <td>
//           {tags.map((tag, index) => (
//             <span key={index}>{tag} / </span>
//           ))}
//         </td>
//         <td>{authorName}</td>
//         <td>{editorName}</td>
//         <td>{createAt}</td>
//         <td>{updateAt}</td>
//         <td>{numberOfEdit}</td>
//         <td>{status}</td>
//         <td className={style.editSide}>
//           <button title="Show" onClick={showHandler}>
//             <ShowIcon className={style.deleteIcon} />
//           </button>
//           <button title="Delete Account">
//             <DeleteAcc className={style.deleteIcon} />
//           </button>
//           <button title="Edit Account">
//             <EditAcc className={style.editIcon} />
//           </button>
//         </td>
//       </tr>
//     );
//   };
//   return (
//     <div className={style.productList}>
//       <h1>News List</h1>
//       <table className={style.productListAll}>
//         <thead>
//           <tr>
//             <th>Photo</th>
//             <th>Title</th>
//             <th>Tags</th>
//             <th>Author Name</th>
//             <th>Editor Name</th>
//             <th>Create At</th>
//             <th>Update At</th>
//             <th>Number Of Edit</th>
//             <th>Status</th>
//             <th>Setting</th>
//           </tr>
//         </thead>
//         <tbody>
//           {getData(current, size).map((data, index) => (
//             <OrderList
//               key={data.id}
//               title={data.title}
//               href={data.href}
//               tags={data.tags}
//               authorName={data.authorName}
//               editorName={data.editorName}
//               create_at={0}
//               update_at={0}
//               numberOfEdit={data.numberOfEdit}
//               status={data.status}
//               mPhoto={data.mPhoto}
//             />
//           ))}
//         </tbody>
//       </table>
//       <Pagination
//         className={style.paginationData}
//         onChange={PaginationChange}
//         total={blogData.length}
//         current={current}
//         pageSize={size}
//         showSizeChanger={false}
//         itemRender={PrevNextArrow}
//         onShowSizeChange={PerPageChange}
//       />
//     </div>
//   );
// };
