// files
import SearchInput from "./SearchInput";

export default function SideNav() {
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
            <SearchInput />
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
