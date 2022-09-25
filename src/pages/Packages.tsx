// files
import useQuery from "../hooks/useQuery";
import PackageItem from "../components/PackageItem";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import usePackageContext from "../hooks/usePackage";
import { useState } from "react";

// backup data
import data from "../data/dummyApi.json";

export default function Packages() {
  const [show, setShow] = useState(true);
  // global state
  const { query } = useQuery();
  // const { data, loading, error } = usePackageContext();

  // components
  const Packages =
    data &&
    data
      .filter((item) => item.parcel_id.match(query))
      .map((item) => <PackageItem item={item} key={item.id} />);

  return (
    <section className="packages">
      {/* {loading && <p>Loading ...</p>} */}
      <Header />
      <SideNav show={show} />
      <main className="grid">{Packages}</main>
      {/* {error && <p>{error}</p>} */}
    </section>
  );
}
