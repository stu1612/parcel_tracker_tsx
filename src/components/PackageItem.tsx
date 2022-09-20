// npm
import { Link } from "react-router-dom";

// files
import iPackage from "../interfaces/iPackage";

interface iProps {
  item: iPackage;
}

export default function PackageItem({ item }: iProps) {
  const { status, parcel_id } = item;
  return (
    <div className="package-container">
      <h1>{parcel_id}</h1>
      <h2>{status}</h2>
      <Link to={`/package-item/${parcel_id}`}>See more</Link>
    </div>
  );
}
