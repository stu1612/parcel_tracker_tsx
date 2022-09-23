// npm
import { useState } from "react";

// files
// import useFetch from "../hooks/useFetch";
import PackageItem from "../components/PackageItem";
import timeStamp from "../utils/timeStamp";
import data from "../data/dummyApi.json";

export default function Packages() {
  // local state
  const [query, setQuery] = useState("");

  // properties
  // const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  // const { data, loading, error } = useFetch(url);

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
    <main className="main">
      {/* {loading && <p>Loading ...</p>} */}
      <div className="search">
        <div className="search__content">
          <p>{timeStamp(new Date())}</p>
          <h1>Welcome Carl, see your parcels!</h1>
          <form>
            <input
              type="string"
              id="query"
              value={query}
              onChange={onChange}
              placeholder="Search Package ID"
            />
          </form>
        </div>
      </div>
      {Packages}
      {/* {error && <p>{error}</p>} */}
    </main>
  );
}
