// import { useTheme } from "@/components/hooks/useDarkMode";
// import style from "./ThemeToggle.module.css"
// // import classNames from "classnames";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { JsxAttribute } from "typescript";

// export const ThemeToggle = () => {
//   const { theme, toggleTheme } = useTheme();
//   return (
//     <>
//       <label className={style.lable} >
//         <input className={style.toggleCheckbox} type='checkbox' onClick={toggleTheme} value={theme} />
//         <div className={style.toggleSlot}>
//           <div className={style.sunIconWrapper}>
//             <div className={classNames(style.iconify, style.sunIcon)} data-icon="feather-sun" data-inline="false"></div>
//           </div>
//           <div className={style.toggleButton}></div>
//           <div className={style.moonIconWrapper}>
//             <div className={classNames(style.iconify, style.moonIcon)} data-icon="feather-moon" data-inline="false"></div>
//           </div>
//         </div>
//       </label>
//     </>
//   );
// }