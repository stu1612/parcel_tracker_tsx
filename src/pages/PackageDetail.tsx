// npm
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
// files
import Map from "../components/Map";
import DetailDelivery from "../components/DetailDelivery";
import DetailNotes from "../components/DetailNotes";
import SideNav from "../components/SideNav";

export default function PackageDetail() {
  const [show, setShow] = useState(false);
  // properties
  const navigate = useNavigate();
  const location = useLocation();
  const { parcel_id } = location.state;

  return (
    <section className="details-page">
      <header className="details-page__header">
        <Icon
          icon="fluent:chevron-circle-left-12-filled"
          height={30}
          className="icon"
        />
        <h1>
          Parcel <span>{parcel_id}</span>
        </h1>
      </header>
      <SideNav show={show} />
      <main className="details-page__main">
        <div className="details-page__main--top">
          <DetailDelivery location={location} />
          <Map location={location} />
        </div>
        <DetailNotes location={location} />
        <button className="detail-btn" onClick={() => navigate(-1)}>
          Back
        </button>
      </main>
    </section>
  );
}
