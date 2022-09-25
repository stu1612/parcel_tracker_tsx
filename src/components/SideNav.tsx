// npm
import { Icon } from "@iconify/react";
// files
import SearchInput from "./SearchInput";
import usePackageContext from "../hooks/usePackage";
import Counter from "../utils/counter";
import links from "../data/links.json";

export default function SideNav({ show }: any) {
  const { packages } = usePackageContext();

  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="sidebar__profile">
          <img
            src="https://source.unsplash.com/random/300×300/?profile/?male"
            alt="profile_picture"
            className="profile-image"
          />
          <h3 className="heading-2">Carl</h3>
        </div>
        <ul>
          {show && (
            <li>
              <SearchInput />
            </li>
          )}

          {links &&
            links.map((link) => {
              const { id, icon, height, label, status } = link;
              return (
                <li key={id}>
                  <span className="icon">
                    <Icon icon={icon} height={height} />
                  </span>
                  <span className="item">
                    {label}: {Counter(packages, status)}
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
