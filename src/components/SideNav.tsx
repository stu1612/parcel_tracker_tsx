// files
import usePackageContext from "../hooks/usePackage";
import SearchInput from "./SearchInput";

// interface searchProps {
//   query: string;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// export default function SideNav({ onChange, query }: searchProps) {
export default function SideNav() {
  // global state
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
            {/* <SearchInput onChange={onChange} query={query} /> */}
            <SearchInput />
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
