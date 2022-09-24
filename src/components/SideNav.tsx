// files
import SearchInput from "./SearchInput";
import iPackage from "../interfaces/iPackage";
// import { iData } from "../pages/Packages";
import usePackageContext from "../hooks/usePackage";

export default function SideNav() {
  const { packages } = usePackageContext();
  console.log(packages);

  function Counter(data: any, status: string) {
    let counter: any = "";
    for (const obj of data) {
      if (obj.status === status) counter++;
    }
    return counter;
  }

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
          <li style={{ color: "white", fontSize: 10 }}>
            Delivered: {Counter(packages, "delivered")}
          </li>
          <li style={{ color: "white", fontSize: 10 }}>
            Pickup: {Counter(packages, "ready-for-pickup")}
          </li>
        </ul>
      </div>
    </div>
  );
}
