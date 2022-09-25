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
    <section className="packages">
      {/* {loading && <p>Loading ...</p>} */}
      <Header />
      <SideNav />
      <main className="grid">{Packages}</main>
      {/* {error && <p>{error}</p>} */}
    </section>
  );
}
