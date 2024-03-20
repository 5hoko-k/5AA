import TheCharts from "../components/Home Components/Charts";
import DisplayProgress from "../components/Home Components/DisplayProgress";
import DisplayStats from "../components/DisplayStats";

function Home() {
  return (
    <div className="bg-slate-100 p-5">
      {/* <DisplayStats /> */}
      <TheCharts />
      <DisplayProgress />
    </div>
  );
}
export default Home;
