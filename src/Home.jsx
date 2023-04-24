import DisplayLibrary from "./DisplayLibrary";
import DisplayProgress from "./DisplayProgress";
import DisplayStats from "./DisplayStats";

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