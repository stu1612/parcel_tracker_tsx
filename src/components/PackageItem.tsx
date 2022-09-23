// npm
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

// files
import iPackage from "../interfaces/iPackage";
import { convertStatus } from "../utils/status";
import timeStamp from "../utils/timeStamp";

interface iProps {
  item: iPackage;
}

export default function PackageItem({ item }: iProps) {
  // properties
  const { status, parcel_id, eta, last_updated } = item;
  const ExpectedDate = timeStamp(eta);
  const UpdatedDate = timeStamp(last_updated);
  const Timeline = convertStatus(status);

  return (
    <div className="package-container">
      {Timeline}
      <div className="package-container__content">
        <div className="timestamp">
          <p className="text-dark">Updated </p>
          <p className="heading-3">{UpdatedDate}</p>
        </div>
        <div className="timestamp">
          <p className="text-dark">Expected </p>
          <p className="heading-3">{ExpectedDate}</p>
        </div>
        <button type="button">
          <Link to={`/package-item/${parcel_id}`} className="card-btn">
            <Icon icon="akar-icons:circle-chevron-right-fill" />
            <span className="span">{parcel_id}</span>
          </Link>
        </button>
      </div>
    </div>
  );
}
