// npm
import { Link } from "react-router-dom";

// files
import iPackage from "../interfaces/iPackage";
import { convertStatus } from "../utils/status";
import timeStamp from "../utils/timeStamp";

interface iProps {
  item: iPackage;
}

export default function PackageItem({ item }: iProps) {
  // properties
  const { status, parcel_id, eta } = item;
  const Date = timeStamp(eta);
  const Timeline = convertStatus(status);

  return (
    <div className="package-container">
      <h1>{parcel_id}</h1>
      {Timeline}
      <p>Expected {Date}</p>
      <Link to={`/package-item/${parcel_id}`}>See more</Link>
    </div>
  );
}
