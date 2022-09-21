// npm
import { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

// files
import iPackage from "../interfaces/iPackage";

interface iProps {
  item: iPackage;
}

export default function PackageItem({ item }: iProps) {
  const { status, parcel_id, eta } = item;

  const timestamp = moment(eta).format("MMM Do YYYY");

  return (
    <div className="package-container">
      <h1>{parcel_id}</h1>
      <h2>{status}</h2>
      <p>Expected {timestamp}</p>
      <Link to={`/package-item/${parcel_id}`}>See more</Link>
    </div>
  );
}