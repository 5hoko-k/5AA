import DisplayLibrary from "../components/DisplayLibrary";
import DisplayProgress from "../components/DisplayProgress";
import DisplayStats from "../components/DisplayStats";

function Home () {
    return (
        <>
            <div>
                <DisplayStats />
            </div>
            <DisplayProgress />
            {/* <DisplayLibrary /> */}
        </>
    )
}
export default Home;