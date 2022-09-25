// npm
import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import Map from "../components/Map";

export default function PackageDetail() {
  // properties
  const location = useLocation();
  const { location_name, sender, verification_required, parcel_id } =
    location.state;
  return (
    <main className="main">
      <header className="sub-header">
        <Icon
          icon="fluent:chevron-circle-left-12-filled"
          height={30}
          className="icon"
        />
        <h1>
          Parcel <span>{parcel_id}</span>
        </h1>
      </header>
      <div className="detail">
        <div className="detail__wrapper">
          <div className="detail__wrapper--left">
            <div className="item">
              <p className="text-dark">Location</p>
              <h2 className="heading-3">{location_name}</h2>
            </div>
            <div className="item">
              <p className="text-dark">Sender</p>
              <h2 className="heading-3">{sender}</h2>
            </div>
          </div>
          <div className="detail__wrapper--right">
            <div className="item">
              <p className="text-dark">Identification</p>
            </div>
            <div className="item icons">
              <Icon icon="fa6-solid:id-card" height={20} className="id" />
              {verification_required ? (
                <Icon
                  icon="teenyicons:tick-circle-solid"
                  height={30}
                  color="green"
                />
              ) : (
                <Icon icon="entypo:circle-with-cross" height={30} color="red" />
              )}
            </div>
          </div>
        </div>
        <Map location={location} />
        <div className="detail__info">
          <h2>History</h2>
          <div className="item">
            <h2>28 Feb</h2>
            <p>Package Information updated</p>
          </div>
          <div className="item">
            <h2>28 Feb</h2>
            <p>Pcakage expected</p>
          </div>
          <div className="notes">
            <h2>Notes</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              explicabo.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
