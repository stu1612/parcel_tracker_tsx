// npm
import { useState } from "react";

// files
import useFetch from "../hooks/useFetch";
import PackageItem from "../components/PackageItem";

export default function Packages() {
  // local state
  const [query, setQuery] = useState("");

  // properties
  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  const { data, loading, error } = useFetch(url);

  // methods
  const onChange = (event: any) => {
    setQuery(event.target.value);
  };

  // components
  const Packages =
    data &&
    data
      .filter((item) => item.parcel_id.match(query))
      .map((item) => <PackageItem item={item} key={item.id} />);

  return (
    <div>
      {loading && <p>Loading ...</p>}
      <div>
        <h1>Search</h1>
        <form>
          <input type="string" id="query" value={query} onChange={onChange} />
        </form>
        {Packages}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}
