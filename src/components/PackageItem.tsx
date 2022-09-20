// files
import iPackage from "../interfaces/iPackage";

interface iProps {
  item: iPackage;
}

export default function PackageItem({ item }: iProps) {
  const { status, id } = item;
  return (
    <div className="package-container">
      <h1>{id}</h1>
      <h2>{status}</h2>
    </div>
  );
}
