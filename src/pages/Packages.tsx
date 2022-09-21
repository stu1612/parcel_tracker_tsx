// npm
import { useState } from "react";

// files
import useFetch from "../hooks/useFetch";
import PackageItem from "../components/PackageItem";

export default function Packages() {
  const [query, setQuery] = useState("");
  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  const { data, loading, error } = useFetch(url);

  const PackageItems =
    data && data.map((item) => <PackageItem item={item} key={item.id} />);

  const onChange = (event: any) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      {loading && <p>Loading ...</p>}
      <div>
        <h1>Search</h1>
        <form>
          <input type="string" id="query" value={query} onChange={onChange} />
        </form>
        <p>Query: {query}</p>
        {data &&
          data
            .filter((item) => item.parcel_id.match(query))
            .map((item) => <PackageItem item={item} key={item.id} />)}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}
