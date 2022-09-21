// files
import useFetch from "../hooks/useFetch";
import PackageItem from "../components/PackageItem";

export default function Packages() {
  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  const { data, loading, error } = useFetch(url);

  const PackageItems =
    data && data.map((item) => <PackageItem item={item} key={item.id} />);

  return (
    <div>
      {loading && <p>Loading ...</p>}
      {PackageItems}
      {error && <p>{error}</p>}
    </div>
  );
}
