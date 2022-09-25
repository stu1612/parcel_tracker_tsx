// npm
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
// files
import Map from "../components/Map";
import DetailDelivery from "../components/DetailDelivery";
import DetailNotes from "../components/DetailNotes";

export default function PackageDetail() {
  // properties
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
      <main className="details-page__main">
        <div className="details-page__main--top">
          <DetailDelivery location={location} />
          <Map location={location} />
        </div>
        <DetailNotes location={location} />
      </main>
    </section>
  );
}
