// npm
import { useState } from "react";

// files
// import useFetch from "../hooks/useFetch";
import PackageItem from "../components/PackageItem";
import data from "../data/dummyApi.json";
import Header from "../components/Header";
import SideNav from "../components/SideNav";

import usePackageContext from "../hooks/usePackage";

export default function Packages() {
  // local state
  const [query, setQuery] = useState("");

  const { packages } = usePackageContext();
  console.log(packages);

  // properties
  // const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  // const { data, loading, error } = useFetch(url);

  // methods
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // components
  const Packages =
    data &&
    data
      .filter((item) => item.parcel_id.match(query))
      .map((item) => <PackageItem item={item} key={item.id} />);

  return (
    <main className="main">
      {/* {loading && <p>Loading ...</p>} */}
      <Header onChange={onChange} query={query} />
      <SideNav onChange={onChange} query={query} />
      <div className="grid">{Packages}</div>
      {/* {error && <p>{error}</p>} */}
    </main>
  );
}
