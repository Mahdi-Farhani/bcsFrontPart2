import { Search } from "@/public/icons/icons/svg/navbar/search";
import style from "./searchBox.module.css";
export const searchBoxP = () => {
  return (
    <>
      <div className={style.searchBarPart}>
        <input type="text" />
        <button type="button">
          <Search />
        </button>
      </div>
    </>
  );
};
