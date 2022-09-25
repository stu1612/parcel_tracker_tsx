// npm
import { Icon } from "@iconify/react";
// files
import SearchInput from "./SearchInput";
import usePackageContext from "../hooks/usePackage";
import Counter from "../utils/counter";

export default function SideNav() {
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
          <li>
            <SearchInput />
          </li>
          <li>
            <span className="icon">
              <Icon icon="carbon:delivery-parcel" height={30} />
            </span>
            <span className="item">
              Delivered: {Counter(packages, "delivered")}
            </span>
          </li>
          <li>
            <span className="icon">
              <Icon icon="fluent:select-all-on-24-filled" height={30} />
            </span>
            <span className="item">
              Pickup: {Counter(packages, "ready-for-pickup")}
            </span>
          </li>
          <li>
            <span className="icon">
              <Icon icon="carbon:delivery-truck" height={30} />
            </span>
            <span className="item">
              On Route: {Counter(packages, "on-the-way")}
            </span>
          </li>
          <li>
            <span className="icon">
              <Icon icon="ri:folder-received-fill" height={30} />
            </span>
            <span className="item">
              Received: {Counter(packages, "order-info-received")}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
