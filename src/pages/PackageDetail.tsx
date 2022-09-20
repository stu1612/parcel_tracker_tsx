// npm
import { useParams } from "react-router-dom";

export default function PackageDetail() {
  // properties
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
