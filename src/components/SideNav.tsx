// files
import SearchInput from "./SearchInput";

interface searchProps {
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SideNav({ onChange, query }: searchProps) {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="sidebar__profile">
          <img
            src="https://source.unsplash.com/random/300×300/?profile/?male"
            alt="profile_picture"
            className="profile-image"
          />
          <h3 className="sidebar__profile--title">Carl</h3>
        </div>
        <ul>
          <li>
            <SearchInput onChange={onChange} query={query} />
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
