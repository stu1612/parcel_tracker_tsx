// files
import timeStamp from "../utils/timeStamp";
import SearchInput from "./SearchInput";

interface searchProps {
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Header({ onChange, query }: searchProps) {
  return (
    <header className="search">
      <div className="search__content">
        <p>{timeStamp(new Date())}</p>
        <h1>Welcome Carl, see your parcels!</h1>
        {/* <SearchInput onChange={onChange} query={query} /> */}
        <SearchInput />
      </div>
    </header>
  );
}
