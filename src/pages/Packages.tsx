// files
import useQuery from "../hooks/useQuery";
import PackageItem from "../components/PackageItem";
import data from "../data/dummyApi.json";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import usePackageContext from "../hooks/usePackage";

export default function Packages() {
  // global state
  const { query } = useQuery();
  const { packages } = usePackageContext();

  // components
  const Packages =
    packages &&
    packages
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
