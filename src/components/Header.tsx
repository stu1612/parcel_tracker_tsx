// files
import timeStamp from "../utils/timeStamp";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <header className="search">
      <div className="search__content">
        <p>{timeStamp(new Date())}</p>
        <h1>Welcome Carl, see your parcels!</h1>
        <SearchInput />
      </div>
    </header>
  );
}
