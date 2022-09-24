// files
import useQuery from "../hooks/useQuery";
import useFetch from "../hooks/useFetch";
import PackageItem from "../components/PackageItem";
import data from "../data/dummyApi.json";
import Header from "../components/Header";
import SideNav from "../components/SideNav";

export default function Packages() {
  // global state
  const { query } = useQuery();
  // properties
  // const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  // const { data, loading, error } = useFetch(url);

  // components
  const Packages =
    data &&
    data
      .filter((item) => item.parcel_id.match(query))
      .map((item) => <PackageItem item={item} key={item.id} />);

  return (
    <main className="main">
      {/* {loading && <p>Loading ...</p>} */}
      <Header />
      <SideNav />
      <div className="grid">{Packages}</div>
      {/* {error && <p>{error}</p>} */}
    </main>
  );
}
