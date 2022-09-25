// npm
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function PackageDetail() {
  // properties
  const { id } = useParams();
  const location = useLocation();
  const { location_name, sender } = location.state;
  return (
    <main className="main">
      <header className="sub-header">
        <Icon
          icon="fluent:chevron-circle-left-12-filled"
          height={30}
          className="icon"
        />
        <h1>
          Parcel <span>{id}</span>
        </h1>
      </header>
      <div className="container">
        <div className="container__wrapper">
          <div className="container__wrapper--left">
            <div className="location">
              <h2>Location</h2>
              <p>{location_name}</p>
            </div>
            <div className="sender">
              <h2>Sender</h2>
              <p>{sender}</p>
            </div>
          </div>
          <div className="container__wrapper--right">
            <div className="id">
              <h2>Identification</h2>
            </div>
            <div className="id-notice">
              <Icon icon="fa6-solid:id-card" />
              {/* ternary */}
              <Icon icon="teenyicons:tick-circle-solid" />
              <Icon icon="entypo:circle-with-cross" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
