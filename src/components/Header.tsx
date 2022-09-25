// files
import timeStamp from "../utils/timeStamp";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <p className="text-light">{timeStamp(new Date())}</p>
        <h1 className="heading-2">Welcome Carl, see your parcels!</h1>
        <SearchInput />
      </div>
    </header>
  );
}
