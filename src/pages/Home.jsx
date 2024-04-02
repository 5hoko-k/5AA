import TheCharts from "../components/Home Components/Charts";
import DisplayProgress from "../components/Home Components/DisplayProgress";
import DisplayStats from "../components/DisplayStats";
import heroImage from "../assets/heroImage.jpg";

function Home() {
  return (
    <div className="bg-slate-100">
      {/* <DisplayStats /> */}
      <div
        className='h-lvh z-30 bg-cover bg-center brightness-50 bg-fixed shadow-inner'
        style={{ backgroundImage: `url(${heroImage})`}}
      ></div>
      <TheCharts />
      <DisplayProgress />
    </div>
  );
}
export default Home;
